import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const { projectId, comment } = await request.json();
    
    // Read the current comments file
    const filePath = path.join(process.cwd(), 'public', 'data', 'projectComments.json');
    const fileContent = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    
    // Add the new comment
    if (!data.comments[projectId]) {
      data.comments[projectId] = [];
    }
    data.comments[projectId].push(comment);
    
    // Write back to the file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving comment:', error);
    return NextResponse.json({ error: 'Failed to save comment' }, { status: 500 });
  }
} 