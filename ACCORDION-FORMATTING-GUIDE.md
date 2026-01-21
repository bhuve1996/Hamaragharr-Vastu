# How to Create Accordions in Product Description (Rich Text Editor)

This guide explains how to format your product description in the Shopify rich text editor to automatically create accordion sections.

## Quick Start

The theme automatically converts your product description into accordion format when you use **headings** or **bold text** as section titles.

## Method 1: Using Headings (Recommended)

Use **Heading 2 (H2)**, **Heading 3 (H3)**, or **Heading 4 (H4)** in the rich text editor:

### Example:

```
Heading 2: Benefits
This is the content that appears when you expand the Benefits section. You can add multiple paragraphs, lists, and formatting here.

Heading 2: How to Use
Step-by-step instructions go here. The accordion will automatically create a collapsible section for this heading.

Heading 2: Shipping Information
Details about shipping and delivery times.
```

**Result:** Each heading becomes an accordion item that customers can expand/collapse.

## Method 2: Using Bold Text

If you prefer not to use headings, you can use **bold text** at the start of a paragraph:

### Example:

```
**Benefits of This Product**
This is the content that appears when expanded. Make sure the bold text is on its own line or at the start of a paragraph.

**How to Use**
Instructions go here. The bold text will become the accordion title.

**FAQ**
Frequently asked questions and answers.
```

**Tips for Bold Text Method:**
- Put the bold text on its own line or at the very start of a paragraph
- Use bold text that's 10-150 characters long
- Make sure there's minimal text after the bold text on the same line (less than 5 characters)

## Method 3: Using Strong Tags

You can also use `<strong>` tags in HTML mode:

```html
<strong>Product Benefits</strong>
<p>Your content here...</p>

<strong>Usage Instructions</strong>
<p>More content here...</p>
```

## Best Practices

### ✅ DO:
- Use clear, descriptive headings (e.g., "Benefits", "How to Use", "Shipping Info")
- Keep heading text concise (10-50 words)
- Use consistent heading levels (stick to H2, H3, or H4)
- Add detailed content under each heading
- Use proper formatting (lists, paragraphs, etc.) in the content area

### ❌ DON'T:
- Mix heading levels randomly (H2, then H4, then H2)
- Use headings for regular text
- Put too much text on the same line as a bold heading
- Use headings that are too short (less than 3 characters) or too long (over 150 characters)

## Examples

### Example 1: Product Features

```
Heading 2: Key Features
• Feature 1 description
• Feature 2 description
• Feature 3 description

Heading 2: Specifications
• Size: 10x10 inches
• Material: Premium quality
• Weight: 2 lbs

Heading 2: Care Instructions
Follow these steps to maintain your product...
```

### Example 2: FAQ Format

```
Heading 2: What is this product?
This product is designed to help you with...

Heading 2: How do I use it?
Simply follow these steps:
1. Step one
2. Step two
3. Step three

Heading 2: What is the return policy?
We offer a 30-day money-back guarantee...
```

### Example 3: Using Bold Text

```
**Product Overview**
This amazing product helps you achieve your goals with ease.

**Key Benefits**
• Benefit 1
• Benefit 2
• Benefit 3

**How It Works**
Our product uses advanced technology to deliver results.
```

## Troubleshooting

### Accordions Not Showing?

1. **Check your heading format:**
   - Make sure you're using H2, H3, or H4 (not H1 or H5+)
   - Verify headings are properly formatted in the rich text editor

2. **Check bold text format:**
   - Bold text should be at the start of a paragraph
   - Should be 10-150 characters long
   - Should have minimal text after it on the same line

3. **Check the section:**
   - Make sure you're using the "Product Information Tabs" section
   - Verify the description block is enabled

4. **Clear cache:**
   - Clear your browser cache
   - Refresh the product page

### Content Not Appearing Under Headings?

- Make sure there's content after each heading
- Check that you haven't accidentally closed a tag early
- Verify the content is properly formatted

### Multiple Accordions Not Working?

- Use consistent heading levels (all H2, or all H3, etc.)
- Don't mix heading levels randomly
- Make sure each heading has content below it

## Advanced: HTML Mode

If you're comfortable with HTML, you can use HTML directly:

```html
<h2>Section Title 1</h2>
<p>Content for section 1 goes here.</p>
<p>More content...</p>

<h2>Section Title 2</h2>
<p>Content for section 2 goes here.</p>
```

## Where to Add This

1. Go to **Products** in Shopify admin
2. Select or create a product
3. Scroll to the **"Description"** field
4. Use the rich text editor to format your content
5. Save the product
6. The accordions will automatically appear on the product page

## Need Help?

If accordions still aren't working:
1. Check that the "Product Information Tabs" section is added to your product template
2. Verify the description block is enabled in that section
3. Make sure your content follows the formatting guidelines above
