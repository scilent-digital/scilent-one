'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Switch,
  Progress,
  Slider,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  Label,
} from '@repo/ui';

export default function ComponentsPage() {
  const [progress, setProgress] = useState(50);
  const [sliderValue, setSliderValue] = useState([50]);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">🧩 UI Components</h1>
          <p className="text-muted-foreground">
            Reusable UI components built with React, TypeScript, and Tailwind CSS.
            All components are accessible and fully customizable.
          </p>
        </div>

        <Tabs defaultValue="buttons">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="data-display">Data</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="overlays">Overlays</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          {/* Buttons Tab */}
          <TabsContent value="buttons" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">🔍</Button>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Button States</h3>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <Button asChild>
                      <a href="#link">As Link</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Form Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select value={selectedValue} onValueChange={setSelectedValue}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="notifications"
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>

                  <div className="space-y-2">
                    <Label>Volume: {sliderValue[0]}%</Label>
                    <Slider
                      value={sliderValue}
                      onValueChange={setSliderValue}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data Display Tab */}
          <TabsContent value="data-display" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Data Display Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-muted-foreground">john@example.com</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="info">Info</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Progress</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="w-full" />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => setProgress(Math.max(0, progress - 10))}>
                        -10%
                      </Button>
                      <Button size="sm" onClick={() => setProgress(Math.min(100, progress + 10))}>
                        +10%
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Layout Tab */}
          <TabsContent value="layout" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Card Layout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This is a card component that can be used to group related content.
                    Cards have a clean, modern design and work well for displaying information.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card with Separator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    This card demonstrates the use of separators to divide content sections.
                  </p>
                  <Separator />
                  <p className="text-muted-foreground">
                    You can use separators to create visual breaks between different content areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Overlays Tab */}
          <TabsContent value="overlays" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog/Modal</CardTitle>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Example</DialogTitle>
                      </DialogHeader>
                      <p className="text-muted-foreground">
                        This is a dialog component that can be used for confirmations, forms, or additional content.
                      </p>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alert Dialog</CardTitle>
                </CardHeader>
                <CardContent>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button variant="destructive">Delete Item</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Feedback Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Toast Notifications</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      Show Toast (Click to implement)
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Loading States</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button loading>Loading Button</Button>
                    <Button variant="outline" loading>
                      Loading Outline
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Progress Indicators</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Task Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="w-full" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Download Progress</span>
                        <span>25%</span>
                      </div>
                      <Progress value={25} className="w-full" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}