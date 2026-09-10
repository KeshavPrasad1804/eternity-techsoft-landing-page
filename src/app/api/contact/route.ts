import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, category, budget, message } = body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and project message are required.' },
        { status: 400 }
      );
    }

    const inquiryId = `ET-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

    console.log('[Eternity Techsoft Lead Received]:', {
      inquiryId,
      name,
      email,
      company: company || 'N/A',
      category: category || 'Software Engineering Services',
      budget: budget || 'N/A',
      messageLength: message.length,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        inquiryId,
        message: 'Inquiry received successfully. Our engineering leads will reach out within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again or email contact@eternitytechsoft.com directly.' },
      { status: 500 }
    );
  }
}
