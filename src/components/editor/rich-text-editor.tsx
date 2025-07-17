'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Placeholder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Typography from '@tiptap/extension-typography';
import { createLowlight } from 'lowlight';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { EditorToolbar } from './editor-toolbar';
import { ImageUploadDialog } from './image-upload-dialog';

// Import common languages for code highlighting
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import python from 'highlight.js/lib/languages/python';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

// Create lowlight instance and register languages
const lowlight = createLowlight();
lowlight.register('javascript', javascript);
lowlight.register('typescript', typescript);
lowlight.register('css', css);
lowlight.register('html', xml);
lowlight.register('xml', xml);
lowlight.register('python', python);
lowlight.register('json', json);
lowlight.register('bash', bash);

interface RichTextEditorProps {
  content?: string;
  onChange?: (content: string) => void;
  placeholder?: string;
  className?: string;
  editable?: boolean;
  onImageUpload?: (file: File) => Promise<string>;
}

export function RichTextEditor({
  content = '',
  onChange,
  placeholder = 'Start writing...',
  className,
  editable = true,
  onImageUpload,
}: RichTextEditorProps) {
  const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // We'll use CodeBlockLowlight instead
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full h-auto',
        },
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: 'border-collapse table-auto w-full border border-border',
        },
      }),
      TableRow.configure({
        HTMLAttributes: {
          class: 'border-b border-border',
        },
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class:
            'border border-border bg-muted/50 px-4 py-2 text-left font-medium',
        },
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: 'border border-border px-4 py-2',
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: 'rounded-md bg-muted p-4 font-mono text-sm overflow-x-auto',
        },
      }),
      Placeholder.configure({
        placeholder,
        emptyEditorClass:
          'cursor-text before:content-[attr(data-placeholder)] before:absolute before:left-4 before:top-4 before:text-muted-foreground before:pointer-events-none',
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class:
            'text-primary underline underline-offset-4 hover:text-primary/80',
        },
      }),
      TextStyle,
      Color,
      Highlight.configure({
        HTMLAttributes: {
          class: 'bg-yellow-200 dark:bg-yellow-800 px-1 rounded',
        },
      }),
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Typography,
    ],
    content,
    editable,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
    editorProps: {
      attributes: {
        class: cn(
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl mx-auto focus:outline-none',
          'prose-headings:font-semibold prose-headings:text-foreground',
          'prose-p:text-foreground prose-p:leading-relaxed',
          'prose-a:text-primary prose-a:no-underline hover:prose-a:underline',
          'prose-strong:text-foreground prose-strong:font-semibold',
          'prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm',
          'prose-pre:bg-muted prose-pre:border prose-pre:border-border',
          'prose-blockquote:border-l-primary prose-blockquote:text-foreground/80',
          'prose-ul:text-foreground prose-ol:text-foreground',
          'prose-li:text-foreground',
          'prose-table:text-foreground',
          'prose-th:text-foreground prose-td:text-foreground',
          'dark:prose-invert',
          'min-h-[200px] p-4',
          className
        ),
      },
    },
  });

  const handleImageUpload = useCallback(
    async (file: File) => {
      if (!editor || !onImageUpload) return;

      try {
        const url = await onImageUpload(file);
        editor.chain().focus().setImage({ src: url }).run();
      } catch (error) {
        console.error('Failed to upload image:', error);
      }
    },
    [editor, onImageUpload]
  );

  const insertImage = useCallback(
    (url: string, alt?: string) => {
      if (!editor) return;

      editor
        .chain()
        .focus()
        .setImage({
          src: url,
          alt: alt || '',
          title: alt || '',
        })
        .run();
    },
    [editor]
  );

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  if (!editor) {
    return (
      <div className="border border-border rounded-lg p-4 min-h-[200px] animate-pulse bg-muted/20" />
    );
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-background">
      {editable && (
        <EditorToolbar
          editor={editor}
          onImageClick={() => setIsImageDialogOpen(true)}
        />
      )}
      <div className="relative">
        <EditorContent
          editor={editor}
          className={cn(
            'min-h-[200px] max-h-[600px] overflow-y-auto',
            !editable && 'cursor-default'
          )}
        />
      </div>

      {editable && onImageUpload && (
        <ImageUploadDialog
          open={isImageDialogOpen}
          onOpenChange={setIsImageDialogOpen}
          onImageUpload={handleImageUpload}
          onImageUrl={insertImage}
        />
      )}
    </div>
  );
}
