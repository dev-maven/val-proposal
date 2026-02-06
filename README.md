# 💕 Valentine's Day Proposal Website

A magical, interactive, and romantic multi-stage website to ask someone special to be your Valentine! Created with pure HTML, CSS, and JavaScript.

## ✨ Features

- **10 Romantic Stages** - A beautiful journey from introduction to the big question
- **Interactive Animations** - Floating hearts, confetti, sparkles, and rose petals
- **Personalized Messages** - Sweet, heartfelt messages throughout
- **Photo Gallery** - Showcase your favorite memories together
- **Dinner Reveal** - Surprise them with romantic dinner plans
- **Easter Egg** - Hidden secret message for extra romance
- **Fully Responsive** - Perfect on desktop, tablet, and mobile
- **No Dependencies** - Pure vanilla JavaScript, no libraries needed
- **GitHub Pages Ready** - Easy to deploy and share

## 🎭 The Journey

1. **Grand Entrance** - Magical opening with pulsing hearts
2. **Opening Letter** - Heartfelt message with photo
3. **What You Mean to Me** - Poetic expressions with floating words
4. **Memory Lane** - Photo gallery of special moments
5. **Reasons I Adore You** - Animated counter with rotating reasons
6. **My Promises** - Beautiful promises with rose petals
7. **The Big Question** - Interactive "Will you be my Valentine?" with playful "No" button
8. **Celebration** - Confetti explosion when they say yes!
9. **Dinner Reveal** - Surprise romantic dinner invitation
10. **Perfect Ending** - Final romantic message with sparkles

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Add your photos** to the `images/` folder (see `images/README.md`)
3. **Customize the content** (see Customization Guide below)
4. **Open `index.html`** in your browser to preview
5. **Deploy to GitHub Pages** (see Deployment section)

## 🎨 Customization Guide

### 1. Update Personal Details

Open `index.html` and search for these placeholders to customize:

- **Partner's name:** Currently set to "Sweet Cheeks" - search and replace throughout
- **Photo captions:** Update memory captions in Stage 4
- **Dinner details:** Update Stage 9 with your actual restaurant, date, and time

### 2. Add Your Photos

Place 5 photos in the `images/` folder:

- `photo1.jpg` - Profile photo (400x400px recommended)
- `photo2.jpg` - Memory photo 1 (600x600px recommended)
- `photo3.jpg` - Memory photo 2 (600x600px recommended)
- `photo4.jpg` - Memory photo 3 (600x600px recommended)
- `photo5.jpg` - Couple photo (1000x800px recommended)

### 3. Customize Messages

**Opening Letter (Stage 2):**

```html
<!-- Find in index.html around line 30 -->
<p class="fade-in-text">Your personalized message here...</p>
```

**Promises (Stage 6):**

```html
<!-- Find in index.html around line 115 -->
<p>I promise to...</p>
```

**Reasons (Stage 5):**
Open `script.js` and update the `reasons` array (around line 72):

```javascript
let reasons = [
	'Your smile that lights up my entire world',
	// Add your own reasons here!
];
```

**Dinner Details (Stage 9):**

```html
<!-- Find in index.html around line 180 -->
<p class="detail-value">[Your Favorite Restaurant Name]</p>
<p class="detail-value">[Date], [Time]</p>
```

### 4. Customize Colors

Open `styles.css` to change the color scheme:

```css
/* Main gradient background (line 10) */
background: linear-gradient(
	135deg,
	#667eea 0%,
	/* Purple */ #764ba2 25%,
	/* Purple-pink */ #f093fb 50%,
	/* Pink */ #f5576c 75%,
	/* Red-pink */ #ff6b9d 100% /* Pink-red */
);
```

## 📱 Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files (index.html, styles.css, script.js, images folder)
3. Go to Settings → Pages
4. Under "Source", select "main" branch
5. Click Save
6. Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 2: Using Git Command Line

```bash
# Navigate to the project folder
cd /Users/oluwaferanmimaven/Documents/val-proposal

# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Valentine's proposal website"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/valentine-proposal.git

# Push to GitHub
git push -u origin main

# Enable GitHub Pages in repository settings
```

## 🔗 Sharing the Website

Once deployed, share the link with your special someone:

- Send via text message
- Create a QR code (use qr-code-generator.com)
- Share on social media (make it private!)
- Email the link with a sweet message

## 💡 Tips for Maximum Impact

1. **Test thoroughly** - Go through all stages before sharing
2. **Choose photos carefully** - Select meaningful, high-quality images
3. **Perfect timing** - Share it at the right romantic moment
4. **Mobile-friendly** - Most people will view it on their phone
5. **Add personal touches** - The more personalized, the better!
6. **Have backup plans** - Make sure you have the actual dinner reservation ready!

## 🎯 Browser Compatibility

Works perfectly on:

- ✅ Chrome (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Edge (Desktop & Mobile)

## 📂 File Structure

```
val-proposal/
│
├── index.html          # Main HTML file (10 stages)
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # This file
│
└── images/
    ├── README.md       # Photo guide
    ├── photo1.jpg      # Profile photo placeholder
    ├── photo2.jpg      # Memory 1 placeholder
    ├── photo3.jpg      # Memory 2 placeholder
    ├── photo4.jpg      # Memory 3 placeholder
    └── photo5.jpg      # Couple photo placeholder
```

## 🐛 Troubleshooting

**Photos not showing?**

- Check that photo filenames match exactly (case-sensitive)
- Make sure photos are in the `images/` folder
- Verify file extensions (.jpg or .png)

**Animations not working?**

- Make sure JavaScript is enabled in the browser
- Try clearing browser cache
- Check browser console for errors (F12)

**Page not deploying on GitHub Pages?**

- Ensure the main HTML file is named `index.html`
- Check that all files are in the main branch
- Wait a few minutes for GitHub Pages to build

## 💖 Making It Your Own

This is your love story! Feel free to:

- Add more stages
- Change the color scheme
- Add music/sound effects
- Include videos
- Add more photos
- Write longer messages
- Change the sequence

## 📝 License

Feel free to use, modify, and share this website for personal romantic purposes! 💕

## 🎉 Credits

Created with love for Sweet Cheeks 💕

---

**Remember:** The most important part is the genuine emotion behind your words. Make it personal, make it special, make it yours! 💖✨

Good luck with your Valentine's proposal! 🌹
