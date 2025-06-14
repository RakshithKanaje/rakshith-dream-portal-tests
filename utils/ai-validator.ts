import natural from 'natural';

const classifier = new natural.BayesClassifier();

// GOOD Dream Names (from diary table)
classifier.addDocument('Flying over mountains', 'Good');
classifier.addDocument('Winning a race', 'Good');
classifier.addDocument('Exploring space', 'Good');
classifier.addDocument('Laughing with friends', 'Good');
classifier.addDocument('Finding treasure', 'Good');
classifier.addDocument('Swimming with dolphins', 'Good'); // ✅ Newly added

// BAD Dream Names (from diary table)
classifier.addDocument('Lost in maze', 'Bad');
classifier.addDocument('Chased by monster', 'Bad');
classifier.addDocument('Falling from cliff', 'Bad');
classifier.addDocument('Stranded in desert', 'Bad');
classifier.addDocument('Trapped in a burning house', 'Bad');
classifier.addDocument('Being late to exam', 'Bad'); // ✅ Previously added

classifier.train();

export async function classifyDream(name: string): Promise<'Good' | 'Bad'> {
  const label = classifier.classify(name);
  return label === 'Bad' ? 'Bad' : 'Good';
}
