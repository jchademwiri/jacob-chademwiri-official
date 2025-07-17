'use client';

import { RichTextEditor } from './rich-text-editor';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentPreviewProps {
  title?: string;
  content: string;
  excerpt?: string;
  tags?: string[];
  publishedAt?: Date;
  status?: 'draft' | 'published';
  onEdit?: () => void;
  className?: string;
}

export function ContentPreview({
  title,
  content,
  excerpt,
  tags = [],
  publishedAt,
  status = 'draft',
  onEdit,
  className,
}: ContentPreviewProps) {
  return (
    <div className={className}>
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2 flex-1">
              {title && (
                <CardTitle className="text-2xl font-bold leading-tight">
                  {title}
                </CardTitle>
              )}

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge
                  variant={status === 'published' ? 'default' : 'secondary'}
                >
                  {status === 'published' ? 'Published' : 'Draft'}
                </Badge>

                {publishedAt && (
                  <span>
                    {status === 'published' ? 'Published on' : 'Created on'}{' '}
                    {publishedAt.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                )}
              </div>

              {excerpt && (
                <p className="text-muted-foreground leading-relaxed">
                  {excerpt}
                </p>
              )}

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {onEdit && (
              <Button variant="outline" size="sm" onClick={onEdit}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            )}
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground border-b pb-2">
              <Eye className="h-4 w-4" />
              <span>Preview</span>
            </div>

            <RichTextEditor
              content={content}
              editable={false}
              className="border-0 p-0"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
