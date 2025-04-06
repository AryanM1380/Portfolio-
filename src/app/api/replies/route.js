import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const { projectId, commentId, reply } = await request.json();
    
    // Read the current comments file
    const filePath = path.join(process.cwd(), 'public', 'data', 'projectComments.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Find the comment and add the reply
    const comment = data.comments[projectId]?.find(c => c.id === commentId);
    if (comment) {
      if (!comment.replies) {
        comment.replies = [];
      }
      comment.replies.push(reply);
      
      // Write back to the file
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
      
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
  } catch (error) {
    console.error('Error saving reply:', error);
    return NextResponse.json({ error: 'Failed to save reply' }, { status: 500 });
  }
} 