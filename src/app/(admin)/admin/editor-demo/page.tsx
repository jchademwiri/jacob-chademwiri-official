'use client';

import { useState } from 'react';
import { RichTextEditor, ContentPreview } from '@/components/editor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Edit, Save, Upload } from 'lucide-react';
import { toast } from 'sonner';

export default function EditorDemoPage() {
  const [title, setTitle] = useState('Sample Article Title');
  const [excerpt, setExcerpt] = useState(
    'This is a sample excerpt that describes what this article is about. It provides a brief overview of the content.'
  );
  const [content, setContent] = useState(`
    <h1>Welcome to the Rich Text Editor Demo</h1>
    
    <p>This is a demonstration of the TipTap rich text editor with Notion-like styling. You can use various formatting options to create professional content.</p>
    
    <h2>Features Included</h2>
    
    <ul>
      <li><strong>Text Formatting</strong>: Bold, italic, underline, strikethrough</li>
      <li><strong>Headings</strong>: H1, H2, H3 support</li>
      <li><strong>Lists</strong>: Bullet points and numbered lists</li>
      <li><strong>Code</strong>: Inline <code>code</code> and code blocks</li>
      <li><strong>Tables</strong>: Resizable tables with headers</li>
      <li><strong>Images</strong>: Upload or embed from URL</li>
      <li><strong>Links</strong>: Add hyperlinks to text</li>
      <li><strong>Colors</strong>: Text colors and highlighting</li>
    </ul>
    
    <h3>Code Example</h3>
    
    <pre><code class="language-typescript">interface User {
  id: string;
  name: string;
  email: string;
}

const createUser = (userData: User): Promise&lt;User&gt; =&gt; {
  return fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  }).then(res =&gt; res.json());
};</code></pre>
    
    <h3>Sample Table</h3>
    
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Rich Text Editing</td>
          <td>✅ Complete</td>
          <td>High</td>
        </tr>
        <tr>
          <td>Image Upload</td>
          <td>✅ Complete</td>
          <td>High</td>
        </tr>
        <tr>
          <td>Table Support</td>
          <td>✅ Complete</td>
          <td>Medium</td>
        </tr>
      </tbody>
    </table>
    
    <blockquote>
      <p>This editor provides a professional writing experience with all the tools needed for creating engaging content for case studies, insights, and other business content.</p>
    </blockquote>
    
    <p>Try editing this content to see all the features in action!</p>
  `);
  const [tags, setTags] = useState(['demo', 'editor', 'tiptap', 'rich-text']);
  const [activeTab, setActiveTab] = useState('edit');
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const handleImageUpload = async (file: File): Promise<string> => {
    // Simulate image upload - in real implementation, this would upload to Supabase Storage
    return new Promise((resolve) => {
      setTimeout(() => {
        // Create a temporary URL for demo purposes
        const url = URL.createObjectURL(file);
        resolve(url);
        toast.success('Image uploaded successfully!');
      }, 1000);
    });
  };

  const handleSave = () => {
    // Simulate saving content
    toast.success('Content saved successfully!');
  };

  const togglePreview = () => {
    setIsPreviewMode(!isPreviewMode);
    setActiveTab(isPreviewMode ? 'edit' : 'preview');
  };

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Rich Text Editor Demo</h1>
          <p className="text-muted-foreground mt-2">
            Test the TipTap editor with Notion-like styling and features
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" onClick={togglePreview}>
            {isPreviewMode ? (
              <Edit className="h-4 w-4 mr-2" />
            ) : (
              <Eye className="h-4 w-4 mr-2" />
            )}
            {isPreviewMode ? 'Edit' : 'Preview'}
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="edit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content Metadata</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter article title..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Enter article excerpt..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Editor</CardTitle>
            </CardHeader>
            <CardContent>
              <RichTextEditor
                content={content}
                onChange={setContent}
                placeholder="Start writing your content..."
                onImageUpload={handleImageUpload}
                className="min-h-[500px]"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview">
          <ContentPreview
            title={title}
            content={content}
            excerpt={excerpt}
            tags={tags}
            publishedAt={new Date()}
            status="draft"
            onEdit={() => setActiveTab('edit')}
          />
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Editor Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Text Formatting</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Bold, Italic, Underline</li>
                <li>• Strikethrough, Code</li>
                <li>• Text Colors & Highlighting</li>
                <li>• Text Alignment</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Structure</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Headings (H1, H2, H3)</li>
                <li>• Bullet & Numbered Lists</li>
                <li>• Blockquotes</li>
                <li>• Horizontal Rules</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Advanced</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Code Blocks with Syntax Highlighting</li>
                <li>• Tables with Resizing</li>
                <li>• Image Upload & Embedding</li>
                <li>• Link Management</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
