# 🖼️ SLIKE I ASSETS

## 📁 Struktura foldera za slike

```
public/
├── images/
│   ├── icons/           ← Ikone (ako koristiš custom)
│   ├── products/        ← Slike proizvoda
│   │   ├── krsni-setovi/
│   │   ├── narukvice/
│   │   ├── nausnice/
│   │   ├── ogrlice/
│   │   ├── privjesci/
│   │   └── krunice/
│   ├── gallery/         ← Galerija slike (viši res)
│   ├── hero/            ← Hero slike za sekcije
│   ├── logo.jpg         ← Logo
│   └── favicon.ico      ← Ikona za tab
├── styles/
│   └── global.css       ← Stilovi
└── ...
```

---

## 📸 Preporučene veličine slika

### Hero slika
- **Dimenzije**: 1920x400px (ili veća)
- **Format**: JPG (kompresovano)
- **Veličina fajla**: < 500KB

### Product kartice
- **Dimenzije**: 300x300px ili 400x400px
- **Format**: JPG ili PNG
- **Veličina fajla**: < 100KB po slici

### Galerija slike
- **Dimenzije**: 600x600px ili veća
- **Format**: JPG (visoka kvaliteta)
- **Veličina fajla**: < 200KB po slici

### Logo
- **Dimenzije**: 200x200px (min)
- **Format**: PNG (sa transparencijom)
- **Veličina fajla**: < 50KB

### Favicon
- **Dimenzije**: 32x32px ili 64x64px
- **Format**: ICO ili PNG
- **Veličina fajla**: < 10KB

---

## 🎨 Kako koristiti slike u kodu

### 1. Hero sekcija
```html
<img src="/images/hero/slika.jpg" alt="Opis slike" class="img-fluid w-100">
```

### 2. Product kartice
```html
<img src="/images/products/narukvice/proizvod-1.jpg" alt="Narukvica" class="product-img">
```

### 3. Galerija
```html
<img src="/images/gallery/proizvod.jpg" alt="Proizvod" class="gallery-img">
```

### 4. Logo
```html
<img src="/images/logo.jpg" alt="Love Little Things" style="height: 38px;">
```

---

## 📦 Kompresovanje slika za web

### Online alati (besplatno)
1. **TinyPNG** - https://tinypng.com/
2. **ImageOptim** - https://imageoptim.com/ (Mac)
3. **Squoosh** - https://squoosh.app/

### Primjer:
- Originalna slika: 2.5MB
- Nakon kompresije: 250KB ✨

---

## 🎯 SEO optimizacija slika

### Alt atributi (obavezno!)
```html
<!-- ❌ LOŠE -->
<img src="slika.jpg">

<!-- ✅ DOBRO -->
<img src="slika.jpg" alt="Ružičasta narukvica od preciozne metala">
```

### Title atributi
```html
<img src="slika.jpg" alt="Opis" title="Love Little Things narukvica">
```

---

## 📞 Gdje preuzeti slike?

### Besplatne slike
- **Unsplash** - https://unsplash.com/
- **Pexels** - https://www.pexels.com/
- **Pixabay** - https://pixabay.com/

### Za proizvode
- **Fotografiraj sami** (najbolje!)
- **Fiverr** - Pronađi fotografa
- **Upwork** - Freelance usluge

---

## 💡 Pro savjeti

1. **Koristi JPG** za fotos (brže)
2. **Koristi PNG** za transparenciju (logoi, ikone)
3. **Koristi WebP** za bolje kompresije (ako server podrži)
4. **Responsive slike:**
```html
<img 
    src="/images/small.jpg" 
    srcset="/images/small.jpg 480w, /images/medium.jpg 768w, /images/large.jpg 1200w"
    alt="Opisna slika"
/>
```

5. **Lazy loading:**
```html
<img src="/images/slika.jpg" alt="Opis" loading="lazy">
```

---

## 🚀 Kako dodati slike u projekt

### Korak 1: Kreiraj folder
```bash
mkdir -p public/images/products/narukvice
mkdir -p public/images/gallery
```

### Korak 2: Kopiraj slike u folder

### Korak 3: Referencira u kodu
```html
<img src="/images/products/narukvice/mojaSlika.jpg" alt="Moja narukvica">
```

### Korak 4: Republish
```bash
npm run build
```

---

## 🎬 Video upustva

Ako koristiš Astro, pogledaj:
- https://docs.astro.build/en/guides/images/

---

**Sada si spreman za dodavanje slika! 📸**
