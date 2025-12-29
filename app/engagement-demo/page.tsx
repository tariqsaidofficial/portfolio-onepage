"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SmartContactForm } from "@/components/smart-contact-form"
import { SocialActivityFeed } from "@/components/social-activity-feed"
import { Sparkles, Github, Linkedin, MessageSquare, TrendingUp } from "lucide-react"

export default function EngagementDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 py-12 px-4 relative">
      {/* Fixed background layer to prevent AnimatedBackground from showing through */}
      <div className="fixed inset-0 bg-[#0a122c]" style={{ zIndex: 0 }} />
      
      {/* Content container with higher z-index */}
      <div className="container mx-auto max-w-7xl relative" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            المرحلة 2: الذكاء التفاعلي
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Engagement Layer Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            تحويل الموقع من "عرض ثابت" إلى "تجربة تفاعلية ذكية" تتكلم عنك وتتفاعل مع الزوار
          </p>
        </div>

        {/* Features Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="glass border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <MessageSquare className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Smart Contact Form</CardTitle>
              <CardDescription>
                نموذج اتصال ذكي مع اقتراحات تلقائية وقوالب جاهزة
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Auto-suggestions بناءً على السياق
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Quick message templates
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Smart field validation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Progress indicator
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <Github className="w-10 h-10 text-primary mb-2" />
              <CardTitle>GitHub Integration</CardTitle>
              <CardDescription>
                عرض آخر المشاريع والأنشطة من GitHub تلقائياً
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  آخر 5 repositories
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Recent commits & activity
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Live stats & metrics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Auto-refresh daily
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <Linkedin className="w-10 h-10 text-primary mb-2" />
              <CardTitle>LinkedIn Integration</CardTitle>
              <CardDescription>
                عرض آخر الأنشطة والمنشورات من LinkedIn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Recent posts & articles
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Professional updates
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Engagement metrics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Dynamic content feed
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main Demo Tabs */}
        <Tabs defaultValue="contact-form" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="contact-form" className="text-base">
              <MessageSquare className="w-4 h-4 mr-2" />
              Smart Contact Form
            </TabsTrigger>
            <TabsTrigger value="social-feed" className="text-base">
              <TrendingUp className="w-4 h-4 mr-2" />
              Social Activity Feed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact-form">
            <SmartContactForm />
          </TabsContent>

          <TabsContent value="social-feed">
            <SocialActivityFeed />
          </TabsContent>
        </Tabs>

        {/* Implementation Notes */}
        <Card className="mt-12 glass border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Implementation Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-primary">🎯 الهدف الرئيسي</h3>
              <p className="text-muted-foreground">
                تحويل الموقع من مجرد "عرض معلومات" إلى "تجربة تفاعلية حية" تعكس نشاطك المستمر وتسهل التواصل مع الزوار
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-primary">⚡ التقنيات المستخدمة</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">GitHub API</Badge>
                <Badge variant="outline">LinkedIn API (محدود)</Badge>
                <Badge variant="outline">React Hooks</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Framer Motion</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-primary">📝 ملاحظات مهمة</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>GitHub API:</strong> لا يحتاج authentication للبيانات العامة، لكن يُنصح باستخدام Personal Access Token لزيادة Rate Limit
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>LinkedIn API:</strong> محدود جداً ويحتاج موافقة من LinkedIn. البديل: استخدام RSS feed أو web scraping (مع الحذر)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>Caching:</strong> يُنصح بعمل cache للبيانات لمدة 24 ساعة لتقليل API calls وتحسين الأداء
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span>
                    <strong>Fallback:</strong> دائماً يجب وجود fallback content في حالة فشل API calls
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 text-primary">🚀 الخطوات التالية</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                <li>إنشاء GitHub Personal Access Token</li>
                <li>إضافة Environment Variables للـ API keys</li>
                <li>إنشاء API route في Next.js للـ caching</li>
                <li>دمج المكونات في الصفحة الرئيسية</li>
                <li>اختبار الأداء والـ error handling</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
