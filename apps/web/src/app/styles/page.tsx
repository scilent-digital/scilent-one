'use client';

import { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardTitle, Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui';
import { tokens, lightTheme, darkTheme, applyTheme, getCurrentTheme } from '@repo/styles';

export default function StylesPage() {
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme());

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-4xl font-bold text-foreground">🎨 Design System</h1>
            <Button onClick={toggleTheme} variant="outline">
              {currentTheme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
            </Button>
          </div>
          <p className="text-muted-foreground">
            Comprehensive design tokens, themes, and utilities for consistent styling across the application.
          </p>
        </div>

        <Tabs defaultValue="colors">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="spacing">Spacing</TabsTrigger>
            <TabsTrigger value="shadows">Shadows</TabsTrigger>
            <TabsTrigger value="themes">Themes</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Primary Colors */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Primary Colors</h3>
                  <div className="grid grid-cols-10 gap-2">
                    {Object.entries(tokens.colors.primary).map(([key, color]) => (
                      <div key={key} className="text-center">
                        <div
                          className="w-12 h-12 rounded-md border border-border"
                          style={{ backgroundColor: color }}
                        />
                        <div className="text-xs mt-1">{key}</div>
                        <div className="text-xs text-muted-foreground">{color}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Colors */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Secondary Colors</h3>
                  <div className="grid grid-cols-10 gap-2">
                    {Object.entries(tokens.colors.secondary).map(([key, color]) => (
                      <div key={key} className="text-center">
                        <div
                          className="w-12 h-12 rounded-md border border-border"
                          style={{ backgroundColor: color }}
                        />
                        <div className="text-xs mt-1">{key}</div>
                        <div className="text-xs text-muted-foreground">{color}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Semantic Colors */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Semantic Colors</h3>
                  <div className="grid grid-cols-5 gap-4">
                    {['success', 'warning', 'error', 'info'].map((semantic) => (
                      <div key={semantic} className="text-center">
                        <div
                          className="w-16 h-16 rounded-md border border-border"
                          style={{ backgroundColor: (tokens.colors as any)[semantic][500] }}
                        />
                        <div className="text-sm mt-2 capitalize font-medium">{semantic}</div>
                        <div className="text-xs text-muted-foreground">{(tokens.colors as any)[semantic][500]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Typography Scale</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {Object.entries(tokens.typography.fontSize).map(([size, value]) => (
                    <div key={size} className="flex items-center gap-4">
                      <div className="w-20 text-sm text-muted-foreground capitalize">{size}</div>
                      <div
                        className="font-sans"
                        style={{ fontSize: value, lineHeight: tokens.typography.lineHeight.normal }}
                      >
                        The quick brown fox jumps over the lazy dog
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Font Weights</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {Object.entries(tokens.typography.fontWeight).map(([weight, value]) => (
                      <div key={weight} className="text-center">
                        <div
                          className="text-lg font-sans"
                          style={{ fontWeight: value }}
                        >
                          {weight}
                        </div>
                        <div className="text-xs text-muted-foreground">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Spacing Tab */}
          <TabsContent value="spacing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Spacing System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  {Object.entries(tokens.spacing).slice(0, 20).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <div className="w-20 text-sm text-muted-foreground">{key}</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="bg-primary rounded"
                          style={{ width: value, height: '16px' }}
                        />
                        <span className="text-sm">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Shadows Tab */}
          <TabsContent value="shadows" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Shadow System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(tokens.shadows).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-muted-foreground capitalize">{key}</div>
                      <div
                        className="w-24 h-16 bg-card border rounded-md"
                        style={{ boxShadow: value }}
                      />
                      <span className="text-xs text-muted-foreground font-mono">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Themes Tab */}
          <TabsContent value="themes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Light Theme</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Background</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border border-border"
                          style={{ backgroundColor: lightTheme.background }}
                        />
                        <span className="text-sm">{lightTheme.background}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Foreground</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border border-border"
                          style={{ backgroundColor: lightTheme.foreground }}
                        />
                        <span className="text-sm">{lightTheme.foreground}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Primary</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border border-border"
                          style={{ backgroundColor: lightTheme.primary }}
                        />
                        <span className="text-sm">{lightTheme.primary}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Accent</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border border-border"
                          style={{ backgroundColor: lightTheme.accent }}
                        />
                        <span className="text-sm">{lightTheme.accent}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dark Theme</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Background</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border border-border"
                          style={{ backgroundColor: darkTheme.background }}
                        />
                        <span className="text-sm">{darkTheme.background}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Foreground</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border border-border"
                          style={{ backgroundColor: darkTheme.foreground }}
                        />
                        <span className="text-sm">{darkTheme.foreground}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Primary</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border border-border"
                          style={{ backgroundColor: darkTheme.primary }}
                        />
                        <span className="text-sm">{darkTheme.primary}</span>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Accent</div>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded border border-border"
                          style={{ backgroundColor: darkTheme.accent }}
                        />
                        <span className="text-sm">{darkTheme.accent}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}