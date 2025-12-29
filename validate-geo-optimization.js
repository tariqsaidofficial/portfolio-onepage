#!/usr/bin/env node

/**
 * GEO Optimization Validation Script
 * Validates that all service pages follow GEO-friendly patterns
 */

const fs = require('fs');
const path = require('path');

// Service pages to validate
const servicePages = [
  'app/services/web-development/page.tsx',
  'app/services/av-systems/page.tsx', 
  'app/services/devops/page.tsx',
  'app/about/page.tsx',
  'app/faq/page.tsx'
];

// GEO validation patterns
const validationPatterns = {
  citationFriendlyDefinition: /CitationBlock.*variant="definition"/,
  citationFriendlySummary: /"In summary,/,
  microFAQSection: /MicroFAQSection/,
  serviceSection: /ServiceSection/,
  exampleCard: /ExampleCard|ExampleGrid/,
  relevanceExplanation: /relevanceExplanation/,
  structuredData: /@context.*schema\.org/,
  whenNotToChoose: /When.*NOT.*appropriate|When this service is NOT/,
  bulletList: /BulletList/,
  finalOutputFormat: /Final Output Format/
};

function validateFile(filePath) {
  console.log(`\n🔍 Validating: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const results = {};
  let allPassed = true;

  // Check each pattern
  for (const [pattern, regex] of Object.entries(validationPatterns)) {
    const found = regex.test(content);
    results[pattern] = found;
    
    if (found) {
      console.log(`✅ ${pattern}`);
    } else {
      console.log(`❌ ${pattern}`);
      allPassed = false;
    }
  }

  return allPassed;
}

function validateComponents() {
  console.log('\n🔧 Validating GEO Components...');
  
  const components = [
    'components/citation-block.tsx',
    'components/service-section.tsx', 
    'components/example-card.tsx',
    'components/micro-faq-section.tsx'
  ];

  let allExist = true;
  
  for (const component of components) {
    if (fs.existsSync(component)) {
      console.log(`✅ ${component}`);
    } else {
      console.log(`❌ ${component}`);
      allExist = false;
    }
  }

  return allExist;
}

function main() {
  console.log('🚀 Starting GEO Optimization Validation...\n');

  // Validate components first
  const componentsValid = validateComponents();
  
  // Validate service pages
  let allPagesValid = true;
  for (const page of servicePages) {
    const pageValid = validateFile(page);
    if (!pageValid) {
      allPagesValid = false;
    }
  }

  // Final summary
  console.log('\n📊 VALIDATION SUMMARY');
  console.log('='.repeat(50));
  
  if (componentsValid) {
    console.log('✅ All GEO components exist');
  } else {
    console.log('❌ Some GEO components missing');
  }

  if (allPagesValid) {
    console.log('✅ All service pages follow GEO patterns');
  } else {
    console.log('❌ Some service pages missing GEO patterns');
  }

  const overallValid = componentsValid && allPagesValid;
  
  if (overallValid) {
    console.log('\n🎉 GEO OPTIMIZATION VALIDATION PASSED!');
    console.log('All service pages follow GEO-friendly patterns.');
  } else {
    console.log('\n⚠️  GEO OPTIMIZATION VALIDATION FAILED!');
    console.log('Some requirements are not met. Check the details above.');
  }

  process.exit(overallValid ? 0 : 1);
}

main();