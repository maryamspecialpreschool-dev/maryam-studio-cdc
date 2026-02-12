# Brand Color & Social Media Update

## Changes Made

### 1. Primary Color Update
**Changed from:** `#9C29B2` (purple)  
**Changed to:** `#6d1b6d` (darker purple - brand color)

**File Updated:**
- `public/css/style.css` - Line 81: Updated `:root { --theme-color: #6d1b6d; }`

**Impact:**
This CSS variable is used throughout the entire website for:
- Button backgrounds and borders
- Link hover states
- Active menu items
- Icons and decorative elements
- Form focus states
- All theme-colored elements

### 2. Footer Overlay Update
**Changed from:** Black overlay `rgba(0, 0, 0, 0.7)`  
**Changed to:** Primary color overlay `rgba(109, 27, 109, 0.85)` with white text

**File Updated:**
- `components/Footer.tsx`:
  - Footer overlay background: `rgba(109, 27, 109, 0.85)` (85% opacity)
  - Footer text color: `#ffffff` (white)

**Visual Impact:**
- Footer now has a rich purple overlay instead of black
- Better brand consistency
- White text ensures excellent readability
- Creates a cohesive brand experience

### 3. Social Media Links Update
Updated all social media links throughout the website to use only Instagram and LinkedIn.

**Instagram:** https://www.instagram.com/maryamspecialpre/  
**LinkedIn:** https://www.linkedin.com/company/maryam-special-studio/

**Files Updated:**

#### Header (`components/Header.tsx`)
- Removed: Facebook, Twitter, YouTube
- Kept: Instagram, LinkedIn
- Added `target="_blank"` and `rel="noopener noreferrer"` for security

**Before:**
```tsx
<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
<li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
```

**After:**
```tsx
<li><Link href="https://www.instagram.com/maryamspecialpre/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link></li>
<li><Link href="https://www.linkedin.com/company/maryam-special-studio/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></Link></li>
```

#### Footer (`components/Footer.tsx`)
- Removed: Facebook, Twitter, Pinterest
- Kept: Instagram, LinkedIn
- Added `target="_blank"` and `rel="noopener noreferrer"` for security

**Before:**
```tsx
<Link href="#"><i className="fab fa-facebook-f"></i></Link>
<Link href="#"><i className="fab fa-twitter"></i></Link>
<Link href="#"><i className="fab fa-pinterest-p"></i></Link>
<Link href="#"><i className="fab fa-linkedin-in"></i></Link>
```

**After:**
```tsx
<Link href="https://www.instagram.com/maryamspecialpre/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link>
<Link href="https://www.linkedin.com/company/maryam-special-studio/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></Link>
```

## Build Status
✅ **Build Successful** - All changes compiled without errors

## Visual Changes Summary
1. **Entire Website Theme:** Now uses `#6d1b6d` as the primary brand color
2. **Footer Background:** Rich purple overlay instead of black
3. **Footer Text:** All text is white for maximum contrast
4. **Social Media:** Only Instagram and LinkedIn icons/links throughout the site
5. **Security:** All external links open in new tab with proper security attributes

## Files Modified
1. `public/css/style.css` - Primary color variable
2. `components/Footer.tsx` - Overlay color, text color, social links
3. `components/Header.tsx` - Social links

## Testing Recommendations
- Verify all buttons and links show the new purple color
- Check footer readability with white text on purple overlay
- Test social media links open correctly in new tabs
- Verify brand consistency across all pages
