"use client"

import { useState } from "react"
import { Cairo } from "next/font/google"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  BookOpen,
  Briefcase,
  Users,
  Calendar,
  Star,
  ArrowLeft,
  Play,
  CheckCircle,
  MessageCircle,
  Bell,
  GraduationCap,
  Search,
  Home,
  User,
  Plus,
  X,
  Eye,
  EyeOff,
} from "lucide-react"
import Image from "next/image"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export default function ZameleLandingPage() {
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState<"login" | "signup" | "apply">("login")
  const [showPassword, setShowPassword] = useState(false)

  const openAuth = (mode: "login" | "signup" | "apply") => {
    setAuthMode(mode)
    setShowAuth(true)
  }

  return (
    <div className={`min-h-screen bg-white ${cairo.className}`} dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0969DA] to-[#0550AE] rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">ز</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">زاملي</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-[#0969DA] transition-colors font-medium">
                المميزات
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#0969DA] transition-colors font-medium">
                عن التطبيق
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#0969DA] transition-colors font-medium">
                التقييمات
              </a>
              <Button
                onClick={() => openAuth("login")}
                className="bg-[#0969DA] hover:bg-[#0550AE] text-white px-6 border border-[#0969DA]"
              >
                تسجيل الدخول
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0969DA]/5 to-transparent"></div>
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                  زاملي
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0969DA] to-[#8250DF] block">
                    كل ما تحتاجه في جامعتك
                  </span>
                  <span className="text-4xl md:text-5xl block mt-2">بمكان واحد</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  ابق على اطلاع بأخبار جامعتك، اكتشف الفرص التدريبية، احصل على التوصيات الأكاديمية، وتواصل مع زملائك -
                  كل ذلك في تطبيق واحد
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => openAuth("signup")}
                  className="bg-gradient-to-r from-[#0969DA] to-[#0550AE] hover:from-[#0550AE] hover:to-[#033D8B] text-white px-10 py-4 text-lg font-semibold border border-[#0969DA] transition-all duration-300"
                >
                  ابدأ الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-[#0969DA] text-[#0969DA] hover:bg-blue-50 px-10 py-4 text-lg font-semibold bg-white"
                >
                  <Play className="ml-2 h-5 w-5" />
                  شاهد العرض التوضيحي
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0969DA]">25K+</div>
                  <div className="text-gray-600">طالب نشط</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1A7F37]">500+</div>
                  <div className="text-gray-600">جامعة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#8250DF]">98%</div>
                  <div className="text-gray-600">معدل الرضا</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="w-80 h-[600px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-2 border border-gray-300 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden border border-gray-200">
                    {/* Phone Screen Content */}
                    <div className="bg-[#0969DA] p-4 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
                            <span className="text-white font-bold text-sm">ز</span>
                          </div>
                          <span className="font-bold">زاملي</span>
                        </div>
                        <Bell className="w-6 h-6" />
                      </div>

                      {/* Search Bar */}
                      <div className="bg-white/20 rounded-xl p-3 mb-4 border border-white/30">
                        <div className="flex items-center gap-2 text-white/80">
                          <Search className="w-5 h-5" />
                          <span className="text-sm">اسأل شيئاً...</span>
                        </div>
                      </div>

                      {/* Navigation Tabs */}
                      <div className="flex gap-4 text-sm">
                        <div className="text-white border-b-2 border-white pb-1">لك</div>
                        <div className="text-white/70">المجتمعات</div>
                        <div className="text-white/70">المواد</div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-4 space-y-4">
                      {/* University News Card */}
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-[#0969DA] rounded-full flex items-center justify-center">
                            <Bell className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">أخبار الجامعة</h3>
                            <p className="text-gray-600 text-sm">ابق على اطلاع بآخر التحديثات من جامعتك</p>
                          </div>
                        </div>
                      </div>

                      {/* Question Card */}
                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium mb-2">ما هي أفضل النصائح للدراسة بفعالية؟</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <span>↑</span> 42
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageCircle className="w-4 h-4" />6
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
                      <div className="flex justify-around">
                        <Home className="w-6 h-6 text-[#0969DA]" />
                        <Search className="w-6 h-6 text-gray-400" />
                        <div className="w-12 h-12 bg-[#0969DA] rounded-full flex items-center justify-center -mt-2 border-2 border-white">
                          <Plus className="w-6 h-6 text-white" />
                        </div>
                        <MessageCircle className="w-6 h-6 text-gray-400" />
                        <User className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-[#1A7F37] to-[#116329] rounded-2xl flex items-center justify-center border border-[#1A7F37] animate-float">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-[#8250DF] to-[#6639BA] rounded-xl flex items-center justify-center border border-[#8250DF] animate-pulse">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">مميزات زاملي</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              كل ما يحتاجه الطالب الجامعي في تطبيق واحد سهل الاستخدام
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:border-[#0969DA] transition-all duration-300 border-2 border-gray-200 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#0969DA]/10 to-[#0969DA]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-[#0969DA]/20">
                  <Bell className="w-10 h-10 text-[#0969DA]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">📢 أخبار الجامعة</h3>
                <p className="text-gray-600 leading-relaxed">ابق على اطلاع بآخر الأخبار والإعلانات المهمة من جامعتك</p>
              </CardContent>
            </Card>

            <Card className="group hover:border-[#1A7F37] transition-all duration-300 border-2 border-gray-200 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1A7F37]/10 to-[#1A7F37]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-[#1A7F37]/20">
                  <Briefcase className="w-10 h-10 text-[#1A7F37]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">🎓 الفرص التدريبية</h3>
                <p className="text-gray-600 leading-relaxed">اكتشف أفضل الفرص التدريبية والوظائف المناسبة لتخصصك</p>
              </CardContent>
            </Card>

            <Card className="group hover:border-[#8250DF] transition-all duration-300 border-2 border-gray-200 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#8250DF]/10 to-[#8250DF]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-[#8250DF]/20">
                  <BookOpen className="w-10 h-10 text-[#8250DF]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">📚 التوصيات الأكاديمية</h3>
                <p className="text-gray-600 leading-relaxed">احصل على توصيات للمواد والأساتذة من طلاب سابقين</p>
              </CardContent>
            </Card>

            <Card className="group hover:border-[#D1242F] transition-all duration-300 border-2 border-gray-200 hover:-translate-y-2 bg-white">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[#D1242F]/10 to-[#D1242F]/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-[#D1242F]/20">
                  <Calendar className="w-10 h-10 text-[#D1242F]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">📅 الفعاليات الجامعية</h3>
                <p className="text-gray-600 leading-relaxed">لا تفوت أي فعالية أو نشاط جامعي مهم</p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Feature */}
          <div className="mt-16">
            <Card className="group hover:border-[#0969DA] transition-all duration-300 border-2 border-gray-200 bg-gradient-to-r from-[#0969DA]/5 to-[#8250DF]/5">
              <CardContent className="p-12 text-center space-y-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#0969DA] to-[#8250DF] rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border border-[#0969DA]">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">🤝 التواصل مع الأصدقاء</h3>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  اسأل زملاءك، شارك تجاربك، وابني شبكة علاقات قوية داخل جامعتك
                </p>
                <Button
                  onClick={() => openAuth("apply")}
                  className="bg-[#0969DA] hover:bg-[#0550AE] text-white px-8 py-3 text-lg font-semibold border border-[#0969DA]"
                >
                  تقدم للدورات الآن
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">لماذا زاملي؟</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                زاملي ليس مجرد تطبيق، بل رفيقك في الرحلة الجامعية. نحن نفهم التحديات التي تواجهها كطالب جامعي ونوفر لك
                الأدوات اللازمة للنجاح.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1A7F37]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#1A7F37]/20">
                    <CheckCircle className="w-6 h-6 text-[#1A7F37]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">معلومات موثوقة</h4>
                    <p className="text-gray-600">جميع المعلومات محدثة ومتحققة من مصادر رسمية</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#8250DF]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#8250DF]/20">
                    <CheckCircle className="w-6 h-6 text-[#8250DF]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">سهولة الاستخدام</h4>
                    <p className="text-gray-600">تصميم بديهي وسهل يناسب جميع الطلاب</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0969DA]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#0969DA]/20">
                    <CheckCircle className="w-6 h-6 text-[#0969DA]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">مجتمع نشط</h4>
                    <p className="text-gray-600">آلاف الطلاب يشاركون تجاربهم ويساعدون بعضهم البعض</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 bg-gradient-to-br from-[#0969DA] via-[#8250DF] to-[#1A7F37] rounded-3xl flex items-center justify-center border-2 border-gray-200">
                  <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto border border-white/30">
                        <GraduationCap className="w-12 h-12 text-white" />
                      </div>
                      <div className="text-white text-2xl font-bold">رحلتك الجامعية تبدأ هنا</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">ماذا يقول الطلاب</h2>
            <p className="text-xl text-gray-600">تجارب حقيقية من طلاب يستخدمون زاملي يومياً</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-2 border-gray-200 bg-white hover:border-[#0969DA] transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "زاملي غير طريقة دراستي تماماً! الآن أعرف كل شيء يحدث في الجامعة ولا أفوت أي فرصة مهمة."
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="أحمد محمد"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">أحمد محمد</h4>
                    <p className="text-[#0969DA] font-medium">طالب هندسة - جامعة الملك سعود</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 bg-white hover:border-[#8250DF] transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "التوصيات الأكاديمية ساعدتني في اختيار أفضل المواد والأساتذة. نتائجي تحسنت كثيراً!"
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="فاطمة العلي"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">فاطمة العلي</h4>
                    <p className="text-[#8250DF] font-medium">طالبة طب - جامعة الإمام</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-200 bg-white hover:border-[#1A7F37] transition-all duration-300">
              <CardContent className="space-y-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  "حصلت على فرصة تدريبية رائعة من خلال زاملي. التطبيق فعلاً يربطك بالفرص المناسبة."
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="خالد السعد"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">خالد السعد</h4>
                    <p className="text-[#1A7F37] font-medium">طالب حاسوب - جامعة الملك فهد</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#0969DA] via-[#8250DF] to-[#1A7F37] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">اكتشف زاملي الآن</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            انضم إلى آلاف الطلاب الذين يستخدمون زاملي لتحسين تجربتهم الجامعية
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto border border-white/20">
            <div className="space-y-4">
              <Input
                placeholder="البريد الإلكتروني الجامعي"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 text-lg focus-ring"
              />
              <Button
                size="lg"
                onClick={() => openAuth("signup")}
                className="w-full bg-white text-[#0969DA] hover:bg-gray-100 h-14 text-lg font-bold border border-white transition-all duration-300"
              >
                ابدأ الآن مجاناً
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-white/80 text-sm mt-4">متاح على iOS و Android • مجاني تماماً</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0969DA] to-[#8250DF] rounded-2xl flex items-center justify-center border border-[#0969DA]">
                  <span className="text-white font-bold text-xl">ز</span>
                </div>
                <span className="text-2xl font-bold">زاملي</span>
              </div>
              <p className="text-gray-400 leading-relaxed">رفيقك في الرحلة الجامعية - كل ما تحتاجه في مكان واحد</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">المميزات</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    أخبار الجامعة
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    الفرص التدريبية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    التوصيات الأكاديمية
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    الفعاليات الجامعية
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">الدعم</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    مركز المساعدة
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    تواصل معنا
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    الأسئلة الشائعة
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    سياسة الخصوصية
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">حمل التطبيق</h4>
              <div className="space-y-4">
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700">
                  App Store
                </Button>
                <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700">
                  Google Play
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} زاملي. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>

      {/* Authentication Modal */}
      {showAuth && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border-2 border-gray-200">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0969DA] to-[#8250DF] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">ز</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900">زاملي</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowAuth(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {authMode === "login" && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">مرحباً بعودتك</h2>
                    <p className="text-gray-600">سجل دخولك للوصول إلى حسابك</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                      <Input
                        type="email"
                        placeholder="student@university.edu.sa"
                        className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">كلمة المرور</label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring pr-12"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute left-3 top-1/2 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-[#0969DA] hover:bg-[#0550AE] text-white h-12 text-lg font-semibold border border-[#0969DA]">
                      تسجيل الدخول
                    </Button>

                    <div className="text-center">
                      <button
                        onClick={() => setAuthMode("signup")}
                        className="text-[#0969DA] hover:underline font-medium"
                      >
                        ليس لديك حساب؟ أنشئ حساباً جديداً
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {authMode === "signup" && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">انضم إلى زاملي</h2>
                    <p className="text-gray-600">أنشئ حسابك وابدأ رحلتك الجامعية</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
                        <Input
                          placeholder="أحمد"
                          className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأخير</label>
                        <Input
                          placeholder="محمد"
                          className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني الجامعي</label>
                      <Input
                        type="email"
                        placeholder="student@university.edu.sa"
                        className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الجامعة</label>
                      <select className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring rounded-md px-3">
                        <option>اختر جامعتك</option>
                        <option>جامعة الملك سعود</option>
                        <option>جامعة الملك عبدالعزيز</option>
                        <option>جامعة الملك فهد للبترول والمعادن</option>
                        <option>جامعة الإمام محمد بن سعود</option>
                        <option>جامعة أم القرى</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">التخصص</label>
                      <Input
                        placeholder="هندسة حاسوب"
                        className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">كلمة المرور</label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring pr-12"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute left-3 top-1/2 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>

                    <Button className="w-full bg-[#0969DA] hover:bg-[#0550AE] text-white h-12 text-lg font-semibold border border-[#0969DA]">
                      إنشاء الحساب
                    </Button>

                    <div className="text-center">
                      <button
                        onClick={() => setAuthMode("login")}
                        className="text-[#0969DA] hover:underline font-medium"
                      >
                        لديك حساب بالفعل؟ سجل دخولك
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {authMode === "apply" && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">تقدم للدورات</h2>
                    <p className="text-gray-600">املأ البيانات للتقديم على الدورات والبرامج</p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأول</label>
                        <Input
                          placeholder="أحمد"
                          className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الاسم الأخير</label>
                        <Input
                          placeholder="محمد"
                          className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
                      <Input
                        type="email"
                        placeholder="student@university.edu.sa"
                        className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">رقم الهاتف</label>
                      <Input
                        placeholder="05xxxxxxxx"
                        className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">الجامعة</label>
                      <select className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring rounded-md px-3">
                        <option>اختر جامعتك</option>
                        <option>جامعة الملك سعود</option>
                        <option>جامعة الملك عبدالعزيز</option>
                        <option>جامعة الملك فهد للبترول والمعادن</option>
                        <option>جامعة الإمام محمد بن سعود</option>
                        <option>جامعة أم القرى</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">التخصص</label>
                      <Input
                        placeholder="هندسة حاسوب"
                        className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">المستوى الدراسي</label>
                      <select className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring rounded-md px-3">
                        <option>اختر مستواك</option>
                        <option>السنة الأولى</option>
                        <option>السنة الثانية</option>
                        <option>السنة الثالثة</option>
                        <option>السنة الرابعة</option>
                        <option>دراسات عليا</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">نوع البرنامج المهتم به</label>
                      <select className="w-full h-12 border-2 border-gray-200 focus:border-[#0969DA] focus-ring rounded-md px-3">
                        <option>اختر نوع البرنامج</option>
                        <option>دورات تدريبية</option>
                        <option>برامج تدريب تعاوني</option>
                        <option>ورش عمل</option>
                        <option>برامج تطوير المهارات</option>
                        <option>فرص تطوعية</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">اهتماماتك (اختياري)</label>
                      <textarea
                        placeholder="اكتب عن اهتماماتك وأهدافك المهنية..."
                        className="w-full h-24 border-2 border-gray-200 focus:border-[#0969DA] focus-ring rounded-md px-3 py-2 resize-none"
                      />
                    </div>

                    <Button className="w-full bg-[#1A7F37] hover:bg-[#116329] text-white h-12 text-lg font-semibold border border-[#1A7F37]">
                      إرسال الطلب
                    </Button>

                    <div className="text-center">
                      <button
                        onClick={() => setAuthMode("login")}
                        className="text-[#0969DA] hover:underline font-medium"
                      >
                        لديك حساب؟ سجل دخولك
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
