import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { commentId, reply } = await request.json();
    const filePath = path.join(process.cwd(), 'public', 'data', 'projectComments.json');

    // Read the current comments
    const fileContent = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    // Find the comment and add the reply
    const comment = data.comments.find(c => c.id === commentId);
    if (!comment) {
      return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
    }

    comment.replies.push(reply);

    // Write back to the file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving reply:', error);
    return NextResponse.json({ error: 'Failed to save reply' }, { status: 500 });
  }
} 