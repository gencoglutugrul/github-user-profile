# Bu Nedir?
Bir iş başvurusunda bulundum ve ilk görüşmenin ardından bana bir task verdiler. Ben de sadece kodları paylaşmak yerine bunu bir write-up'a dönüştürmeye karar verdim. Task şu şekildeydi;

```
Nest.js (https://nestjs.com/) kullanarak, Github'ın public User API'nı kullanarak kullanıcı bilgilerini gösteren bir ekran geliştirmeni istiyorum. Tasarım kısmı önemli değil, basit form elemanları kullanman yeterli.
Kullanıcı adını girebileceğimiz bir sayfa olmalı. Kullanıcı adı girdikten sonra ilgili API'ye istek atılarak kullanıcıya ait ilk 10 public repository'leri alfabetik olarak listelemelisin. Tıklandığında bizi yeni sekmede Github'a yönlendirsin.
Bu formun yer alacağı sayfa protected olmalı. Öncesinde bu sayfaya girebilmemiz için küçük bir login form koyalım. Kullanıcı adı: redacted Parola: redacted olsun. Nest'in Authentication modul'ünü kullanarak yapmalısın. DB kullanmadan Auth servisinde mock user tanımlayarak yapabilirsin.
Ek olarak login formunda validation olmalı. Kullanıcı adı; boş olamaz ve min. 5 karakter olmalı. Parola; boş olamaz.
```

# Araştırma
Nestjs'i hiç bilmiyordum dolayısıyla ilk önce araştırmaya ondan başladım. Daha önce node.js ile de hiç backend uygulaması yazmamıştım. Bolca googlelayarak başta kendi dökümantasyonu olmak üzere bir çok kaynağı inceledim. Bunlardan bazıları;

- https://docs.nestjs.com/
- https://www.youtube.com/watch?v=S0R82Osg-Mk
- https://wanago.io/courses/api-with-nestjs/
- https://github.com/lujakob/nestjs-realworld-example-app
- https://github.com/nestjs/nest/tree/master/sample/
- https://youtu.be/IefCGB5gNgY

Bu noktada kavramlara ve yapıya biraz aşina olduktan sonra view için düşünmeye başladım. Normalde nestjs tarafından server-sideda render edilen bir yapı düşünmüştüm fakat araştırma sırasında karşılaştığım tüm örnekler REST API yapısında kurgulanıyordu. Her ne kadar template engine desteklediğini görsem de nestjsin ruhuna aykırı davranmak istemedim.

# İlerleme
Frontend'de de React kullanmaya karar verince auth için JWT kullanmak otomatik olarak kararlaştırılmış oldu. Aslında burada projede belirtilen ```Nest'in Authentication modul'ünü kullanarak yapmalısın.``` gerekliliğini yerine getirmek için öncesinde @nestjs/auth gibi bir paket aradım. Ayrıca nestjs'in dökümantasyon sayfasında [Authentication bölümüne](https://docs.nestjs.com/security/authentication) baktığımda Passport paketinin nest için özelleştirilmiş bir versiyonunu önerdiğini gördüm. Bu noktada eğer bu gerekliliğin dışına çıktıysam bahsedilen paketi/modülü bulamadığım için. 

# Backend
İlk önce github'ın sunduğu public API'ı entegre ettim ve çalışır hale getirdim. Daha sonra auth sistemini implemente etmeye çalıştım. Dökümantasyondaki basit haliyle implemente ettikten sonra ortaya çıkan güvenlik sorunlarını - parolaların düz metin halinde saklanması ve JWT için kullanılan secret key'in kod içerisine gömülmesi - hallettim. Başta DTO'yu yanlış anladığım için interface yerine kullandım. Daha sonra bunu interface ile değiştirdim. En son ise form validation'ı tamamladım. Ancak buradaki eksiğim form validationın çalışıyor olmasına rağmen öncesinde AuthGuard'ın devreye girip kullanıcı adı ve parolayı kontrol ettiği için validation formun pek bir anlamı kalmadı. Bunu düzeltmek için Auth mantığını değiştirmem gerekiyordu. Bunu bu noktada ertelemeye karar verdim.

# Frontend
Daha önce React kullansam da redux kullanmamıştım. Bu projede de kullanırken çok da emin olmadan kullandım. Sanırım redux kullanmadan halletmek böylesi küçük bir proje için çok daha iyi olabilirdi. React ile pek deneyimli olmadığım için internette gördüğüm yapıların bir benzerini uyguladım fakat bu kadarının overengineering olma ihtimali yüksek. Yararlandığım yegane kaynak: https://medium.com/software-development-turkey/react-jwt-authentication-kimlik-do%C4%9Frulama-d2f6eeba8d2e

Ancak birebir kopyalamak her zamanki gibi hatayla sonuçlandı deprecated olan bir kaç fonksiyon vardı. Bunları önerildiği gibi düzelttim ve bir kaç şeyi özelleştirdim ve her şey çalıştı.

Yararlandığım diğer kaynaklar:

- https://ant.design/docs/react/migration-v4
- https://ant.design/docs/react/introduce
- https://blog.netcetera.com/how-to-create-guarded-routes-for-your-react-app-d2fe7c7b6122

# Sonuç
Bu proje bana bir çok şey öğretti. Daha önce JWT nedir nasıl çalışır bilsem de hiç kullanmamıştım. En basitinden yeni bir backend framework öğrendim. React ile karmaşık state yapılarını redux ile nasıl kontrol edeceğimi az buçuk öğrendim. Son olarak decoration veya annotation yapısına her zaman bir önyargım vardı. Bu yıkıldı. Fakat yine de ben tüm routeların tek bir sayfada bulunmasını uygulamanın yapısını anlamayı kolaylaştırdığı için tercih ederim. Diğer türlü klasör yapınıza çok dikkat etmelisiniz ki her şey birbirine girmesin. Bu noktada internette farklı klasör yapıları önerilse de nestin kendi cli toolunun oluşturduğu klasör yapısını kullanmak sanırım en iyisi.