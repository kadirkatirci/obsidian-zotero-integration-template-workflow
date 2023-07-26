const fs = require('fs');
const path = require('path');

// Set the folder path to read files from
const folderPath = '/Users/kadirkatirci/Desktop/Obsidian Test/zotero-s';
const listeklasor = '/Users/kadirkatirci/Desktop/Obsidian Test/zotero-list';

// Define the regular expression to search for
const regex = /#yöntem/g;

// Create an empty array to store the matching paragraphs
const matchingParagraphs = [];

// Read each file in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.log('Error reading folder:', err);
    return;
  }
  
  // Loop through each file in the folder
  files.forEach(file => {
    // Check if the file is a Markdown file
    if (path.extname(file) === '.md') {
      // Read the contents of the file
      const filePath = path.join(folderPath, file);
      const contents = fs.readFileSync(filePath, 'utf8');
      
      // Split the contents into paragraphs
      const paragraphs = contents.split(/(\n|^)---+(\n|$)/);
      
      // Loop through each paragraph and check if it contains the regex
      paragraphs.forEach(paragraph => {
        if (regex.test(paragraph)) {
          // Add the matching paragraph to the array
          matchingParagraphs.push(paragraph);
        }
      });
    }
  });
  
  // Create a new Markdown file with the list of matching paragraphs
  const outputFilePath = path.join(listeklasor, 'yontem-list.md');
  const outputContents = matchingParagraphs.join('\n\n');
  fs.writeFileSync(outputFilePath, outputContents);
  
  // Log the matching paragraphs
  console.log('Matching paragraphs:', matchingParagraphs);
});
