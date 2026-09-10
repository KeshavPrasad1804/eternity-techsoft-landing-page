'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe2, 
  Maximize2, 
  Radio, 
  Layers, 
  Database, 
  Cpu, 
  Navigation, 
  Compass, 
  MapPin, 
  Crosshair,
  Activity,
  Layers3
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';

export default function ProductGeomeridian() {
  const geoData = PRODUCTS.find((p) => p.id === 'geomeridian')!;

  // Interactive Map Inspector State
  const [activeLayer, setActiveLayer] = useState<'satellite' | 'topography' | 'geofence' | 'thermal'>('geofence');
  const [coords, setCoords] = useState({ lat: 37.7749, lng: -122.4194, alt: 42 });
  const [h3Index, setH3Index] = useState('8828308281fffff');
  const [activeZone, setActiveZone] = useState('ZONE-7A METROPOLITAN');
  const [radarPing, setRadarPing] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simulated telemetry radar sweep
  useEffect(() => {
    let frameId: number;
    let angle = 0;

    const render = () => {
      angle = (angle + 0.02) % (Math.PI * 2);
      setRadarPing((prev) => (prev + 1) % 100);

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Clear background
      ctx.fillStyle = '#070a12';
      ctx.fillRect(0, 0, w, h);

      // Draw Grid
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.12)';
      ctx.lineWidth = 1;
      const gridSize = 35;
      for (let x = 0; x < w; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Concentric Radar Rings
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.25)';
      [50, 100, 150, 200].forEach((r) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Draw Layer-Specific Visuals
      if (activeLayer === 'geofence') {
        // Draw Cadastral Polygon
        ctx.fillStyle = 'rgba(168, 85, 247, 0.18)';
        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx - 90, cy - 60);
        ctx.lineTo(cx + 110, cy - 80);
        ctx.lineTo(cx + 140, cy + 90);
        ctx.lineTo(cx - 40, cy + 120);
        ctx.lineTo(cx - 120, cy + 30);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Vertices points
        ctx.fillStyle = '#38bdf8';
        [
          [cx - 90, cy - 60],
          [cx + 110, cy - 80],
          [cx + 140, cy + 90],
          [cx - 40, cy + 120],
          [cx - 120, cy + 30],
        ].forEach(([vx, vy]) => {
          ctx.beginPath();
          ctx.arc(vx, vy, 4, 0, Math.PI * 2);
          ctx.fill();
        });
      } else if (activeLayer === 'topography') {
        // Contour curves
        ctx.strokeStyle = 'rgba(34, 211, 238, 0.4)';
        ctx.lineWidth = 1.5;
        for (let i = 1; i <= 4; i++) {
          ctx.beginPath();
          ctx.ellipse(cx, cy, 70 * i, 40 * i, Math.PI / 6, 0, Math.PI * 2);
          ctx.stroke();
        }
      } else if (activeLayer === 'thermal') {
        // Heatmap blobs
        const grad = ctx.createRadialGradient(cx + 40, cy - 30, 10, cx + 40, cy - 30, 90);
        grad.addColorStop(0, 'rgba(239, 68, 68, 0.5)');
        grad.addColorStop(0.5, 'rgba(234, 179, 8, 0.3)');
        grad.addColorStop(1, 'rgba(234, 179, 8, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx + 40, cy - 30, 90, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Satellite stars / points
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        for (let i = 0; i < 25; i++) {
          const sx = (cx * (i * 37) % (w - 20)) + 10;
          const sy = (cy * (i * 43) % (h - 20)) + 10;
          ctx.fillRect(sx, sy, 2, 2);
        }
      }

      // Draw Rotating Radar Sweep Line
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * 220, cy + Math.sin(angle) * 220);
      ctx.stroke();

      // Sweep gradient trail
      const sweepGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 220);
      sweepGrad.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
      sweepGrad.addColorStop(1, 'rgba(168, 85, 247, 0)');
      ctx.fillStyle = sweepGrad;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, 220, angle - 0.4, angle);
      ctx.closePath();
      ctx.fill();

      // Center crosshair
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - 10, cy);
      ctx.lineTo(cx + 10, cy);
      ctx.moveTo(cx, cy - 10);
      ctx.lineTo(cx, cy + 10);
      ctx.stroke();

      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, [activeLayer]);

  // Handle cursor movement over map to calculate live coordinate telemetry
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const baseLat = 37.7749 + (y / rect.height - 0.5) * 0.05;
    const baseLng = -122.4194 + (x / rect.width - 0.5) * 0.06;
    const alt = Math.round(35 + Math.sin(x / 30) * 15 + Math.cos(y / 30) * 20);

    setCoords({
      lat: Number(baseLat.toFixed(5)),
      lng: Number(baseLng.toFixed(5)),
      alt,
    });

    const hexChars = '0123456789abcdef';
    const fakeH3 = `8828308${hexChars[Math.floor(x % 16)]}${hexChars[Math.floor(y % 16)]}fffff`;
    setH3Index(fakeH3);

    if (x > rect.width * 0.6) {
      setActiveZone('ZONE-7B HARBOR DISTRICT');
    } else if (y > rect.height * 0.6) {
      setActiveZone('ZONE-7C INDUSTRIAL HUB');
    } else {
      setActiveZone('ZONE-7A METROPOLITAN');
    }
  };

  return (
    <section id="geomeridian" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/30 text-xs font-mono font-semibold uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5" />
              Flagship Product Lab 02
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Geomeridian: <span className="text-gradient-violet">Spatial Intelligence & GIS Engine</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We are building <strong className="text-violet-300">Geomeridian</strong> to solve enterprise geospatial scalability. 
              Process massive vector datasets, stream real-time drone and fleet telemetry, orchestrate dynamic geofences, 
              and render millions of spatial coordinates with sub-meter precision.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <span className="px-3 py-1 text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 rounded-lg">
              H3 Spatial Indexing
            </span>
            <span className="px-3 py-1 text-xs font-mono bg-violet-500/10 border border-violet-500/30 text-violet-300 rounded-lg">
              In Active Development
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Interactive Inspector on Left, Feature Bento on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Interactive Geospatial Radar Inspector (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0c101b] border-2 border-violet-500/30 shadow-2xl shadow-purple-950/60 overflow-hidden relative">
              
              {/* Header with Layer Switcher */}
              <div className="p-4 bg-gradient-to-r from-slate-900 via-slate-900/90 to-violet-950/40 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-violet-500/20 text-violet-400">
                    <Crosshair className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Geomeridian Spatial Radar</span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-violet-500/20 text-violet-300 font-mono">60 FPS GPU</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Move cursor to probe live coordinate telemetry</div>
                  </div>
                </div>

                {/* Layer Selector */}
                <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-[11px]">
                  <button
                    onClick={() => setActiveLayer('geofence')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeLayer === 'geofence'
                        ? 'bg-violet-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Geofence
                  </button>
                  <button
                    onClick={() => setActiveLayer('topography')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeLayer === 'topography'
                        ? 'bg-violet-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Contours
                  </button>
                  <button
                    onClick={() => setActiveLayer('thermal')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeLayer === 'thermal'
                        ? 'bg-violet-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Density
                  </button>
                  <button
                    onClick={() => setActiveLayer('satellite')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeLayer === 'satellite'
                        ? 'bg-violet-500 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Satellite
                  </button>
                </div>
              </div>

              {/* Radar Canvas Container */}
              <div className="relative p-2 bg-[#070a12] cursor-crosshair">
                <canvas
                  ref={canvasRef}
                  width={540}
                  height={320}
                  onMouseMove={handleMouseMove}
                  className="w-full h-[280px] sm:h-[320px] rounded-xl block"
                />

                {/* Floating Top Left Telemetry Overlay */}
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-violet-500/30 font-mono text-[11px] text-slate-200 space-y-0.5 pointer-events-none">
                  <div className="text-violet-400 flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                    STREAM: ACTIVE
                  </div>
                  <div>LAYER: {activeLayer.toUpperCase()}</div>
                  <div className="text-slate-400">FPS: 60.0 &bull; SYNC: 14ms</div>
                </div>

                {/* Floating Bottom Right Compass Overlay */}
                <div className="absolute bottom-5 right-5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-slate-800 font-mono text-[10px] text-slate-400 flex items-center gap-2 pointer-events-none">
                  <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '12s' }} />
                  <span>37.7749&deg; N, 122.4194&deg; W</span>
                </div>
              </div>

              {/* Live Telemetry Data Matrix */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px]">
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">LATITUDE:</span>
                    <span className="text-white font-bold">{coords.lat}&deg;</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">LONGITUDE:</span>
                    <span className="text-white font-bold">{coords.lng}&deg;</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">ELEVATION:</span>
                    <span className="text-cyan-400 font-bold">{coords.alt} m MSL</span>
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">H3 SPATIAL HEX:</span>
                    <span className="text-violet-400 font-bold truncate block">{h3Index.substring(0, 8)}...</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-violet-400" />
                    TARGET SECTOR: <strong className="text-slate-200">{activeZone}</strong>
                  </span>
                  <span className="text-[11px] text-emerald-400">POLYGON VALIDATED</span>
                </div>
              </div>

            </div>
          </div>

          {/* Features Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0c101b]/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-violet-400" />
                Unlocking Enterprise Geospatial Advantage
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Legacy GIS software is notoriously sluggish, desktop-locked, and incapable of processing real-time streaming coordinates. 
                Geomeridian is engineered from the ground up on modern WebGL/WebGPU, distributed spatial indexes, and cloud-native message brokers.
              </p>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
                {geoData.metrics.map((metric, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-base font-bold font-mono text-violet-400">{metric.value}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Bento */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {geoData.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-2.5 group-hover:bg-violet-500/20 transition-colors">
                    {feature.icon === 'Globe2' && <Globe2 className="w-4 h-4" />}
                    {feature.icon === 'Maximize2' && <Maximize2 className="w-4 h-4" />}
                    {feature.icon === 'Radio' && <Radio className="w-4 h-4" />}
                    {feature.icon === 'Layers' && <Layers className="w-4 h-4" />}
                    {feature.icon === 'Database' && <Database className="w-4 h-4" />}
                    {feature.icon === 'Cpu' && <Cpu className="w-4 h-4" />}
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-slate-400 font-mono">Geospatial Engine Stack:</span>
              {geoData.techPills.map((tech, i) => (
                <span key={i} className="text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
