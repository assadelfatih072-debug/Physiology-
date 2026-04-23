/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  // Section 1: Basic Physiology & Cells
  {
    id: 1,
    text: "What is the definition of Physiology?",
    options: [
      "The study of chemical substances in the body",
      "The branch of medical science concerned with the functions and mechanisms of living systems",
      "The study of the structure of bones only",
      "The study of diseases and their causes"
    ],
    correctAnswer: 1,
    explanation: "Physiology is the branch of medical science concerned with the functions and mechanisms of living systems, including cells, organs, and tissues."
  },
  {
    id: 2,
    text: "What is the smallest structural and functional unit of a living organism?",
    options: ["Tissue", "Organ", "Cell", "System"],
    correctAnswer: 2,
    explanation: "The cell is the smallest structural and functional unit of a living organism."
  },
  {
    id: 3,
    text: "Which type of cell is defined as simple, like Bacteria, and lacks a defined nucleus?",
    options: ["Eukaryotic", "Prokaryotic", "Human cell", "Fungal cell"],
    correctAnswer: 1,
    explanation: "Prokaryotic cells are simple cells (e.g., bacteria) without a defined nucleus and membrane, containing circular DNA."
  },
  {
    id: 4,
    text: "Cells found in humans, animals, plants, and fungi are classified as:",
    options: ["Prokaryotic", "Eukaryotic", "Simple cells", "Bacterial cells"],
    correctAnswer: 1,
    explanation: "Eukaryotic cells are found in humans, animals, fungi, parasites, and plants, containing a true nucleus."
  },
  {
    id: 5,
    text: "Which organelle is known as the 'powerhouse' of the eukaryotic cell?",
    options: ["Golgi Apparatus", "Endoplasmic Reticulum", "Mitochondria", "Nucleus"],
    correctAnswer: 2,
    explanation: "Mitochondria are key organelles in eukaryotic cells responsible for energy production."
  },
  {
    id: 6,
    text: "A group of similar cells working together is called:",
    options: ["An organ", "A system", "A tissue", "An organism"],
    correctAnswer: 2,
    explanation: "A tissue is a group of similar cells working together."
  },
  {
    id: 7,
    text: "Which primary tissue type covers body surfaces and lines internal organs?",
    options: ["Connective tissue", "Muscle tissue", "Epithelial tissue", "Nervous tissue"],
    correctAnswer: 2,
    explanation: "Epithelial tissues cover body surfaces and line internal organs."
  },
  {
    id: 8,
    text: "Bone and Blood are examples of which tissue type?",
    options: ["Epithelial", "Connective", "Muscle", "Nervous"],
    correctAnswer: 1,
    explanation: "Connective tissues support and connect parts of the body (e.g., Bone and Blood)."
  },
  {
    id: 9,
    text: "Which tissue type is specialized for transmitting electrical nerve impulses?",
    options: ["Muscle tissue", "Nervous tissue", "Epithelial tissue", "Connective tissue"],
    correctAnswer: 1,
    explanation: "Nervous tissues are specialized for transmitting electrical nerve impulses."
  },
  {
    id: 10,
    text: "The cell membrane consists of a:",
    options: ["Single lipid layer", "Protein bilayer", "Phospholipid bilayer", "Carbohydrate wall"],
    correctAnswer: 2,
    explanation: "The cell membrane consists of a phospholipid bilayer."
  },

  // Section 2: Transport Mechanisms
  {
    id: 11,
    text: "In the phospholipid bilayer, the phosphate group is ________ and lipids are ________.",
    options: [
      "Hydrophobic; Hydrophilic",
      "Hydrophilic; Hydrophobic",
      "Liquid; Solid",
      "Active; Passive"
    ],
    correctAnswer: 1,
    explanation: "The phosphate group is hydrophilic (water-loving) and lipids are hydrophobic (water-fearing)."
  },
  {
    id: 12,
    text: "Which type of transport requires No Energy (ATP) and moves substances from High to Low concentration?",
    options: ["Active transport", "Passive transport", "Primary transport", "Secondary transport"],
    correctAnswer: 1,
    explanation: "Passive transport requires no energy (ATP) and moves substances from High to Low concentration."
  },
  {
    id: 13,
    text: "Movement from Low to High concentration (against the gradient) is known as:",
    options: ["Simple diffusion", "Facilitated diffusion", "Active transport", "Osmosis"],
    correctAnswer: 2,
    explanation: "Active transport moves substances from Low to High concentration, requiring energy (ATP)."
  },
  {
    id: 14,
    text: "O2 and CO2 move across the cell membrane via:",
    options: ["Active transport", "Simple diffusion", "Facilitated diffusion", "The Na-K pump"],
    correctAnswer: 1,
    explanation: "Gases like O2 and CO2 move via simple diffusion (passive movement)."
  },
  {
    id: 15,
    text: "Facilitated diffusion requires which of the following?",
    options: ["ATP energy", "A protein channel/gate", "Low to High movement", "Secondary active transport"],
    correctAnswer: 1,
    explanation: "Facilitated diffusion is passive but requires a protein channel or carrier to pass through the membrane."
  },
  {
    id: 16,
    text: "The Sodium-Potassium ATPase pump is an example of:",
    options: ["Simple diffusion", "Primary active transport", "Facilitated diffusion", "Passive transport"],
    correctAnswer: 1,
    explanation: "The Na-K pump is a classic example of primary active transport."
  },
  {
    id: 17,
    text: "The Sodium-Potassium pump moves ________ Na+ ions OUT and ________ K+ ions IN.",
    options: ["2; 3", "3; 2", "1; 1", "3; 3"],
    correctAnswer: 1,
    explanation: "The Na-K pump forces 3 Sodium (Na+) ions out and brings 2 Potassium (K+) ions in."
  },
  {
    id: 18,
    text: "What does the pump do with ATP to provide energy?",
    options: ["Synthesize it", "Hydrolyze it", "Store it", "Ignore it"],
    correctAnswer: 1,
    explanation: "The pump hydrolyzes ATP (breaks it down) to provide energy for transport."
  },
  {
    id: 19,
    text: "Osmosis is the movement of water from a region of ________ solute concentration to ________ solute concentration.",
    options: ["Higher; Lower", "Lower; Higher", "Equal; Variable", "Outside; Inside"],
    correctAnswer: 1,
    explanation: "Osmosis is the movement of water from lower solute concentration (more water) to higher solute concentration (less water)."
  },
  {
    id: 20,
    text: "A 'Hypotonic' solution causes the cell to:",
    options: ["Shrink", "Stay the same", "Swell", "Explode immediately"],
    correctAnswer: 2,
    explanation: "A hypotonic solution has a lower concentration than blood, causing water to move INTO the cell, leading to swelling."
  },

  // Section 3: Homeostasis & Water Balance
  {
    id: 21,
    text: "The body's ability to maintain a stable internal environment is called:",
    options: ["Hemostasis", "Homeostasis", "Hydrolysis", "Hyperplasia"],
    correctAnswer: 1,
    explanation: "Homeostasis is the process by which the body maintains a stable internal environment."
  },
  {
    id: 22,
    text: "What is the normal pH range of human blood?",
    options: ["7.0 - 8.0", "7.35 - 7.45", "6.8 - 7.2", "7.5 - 8.5"],
    correctAnswer: 1,
    explanation: "The normal blood pH range is 7.35 to 7.45 (summarized as 7.3-7.4 in some notes)."
  },
  {
    id: 23,
    text: "Acidosis occurs when the blood pH drops below:",
    options: ["7.45", "7.35", "7.0", "8.0"],
    correctAnswer: 1,
    explanation: "Acidosis is when pH drops below 7.35."
  },
  {
    id: 24,
    text: "What is the normal core temperature range in Celsius?",
    options: ["35.0 - 36.0", "36.5 - 37.5", "37.5 - 38.5", "38.0 - 39.0"],
    correctAnswer: 1,
    explanation: "The normal body temperature range is 36.5 to 37.5°C."
  },
  {
    id: 25,
    text: "The process that prevents and stops bleeding is called:",
    options: ["Homeostasis", "Hemostasis", "Hematopoiesis", "Hemodialysis"],
    correctAnswer: 1,
    explanation: "Hemostasis is the process of stopping bleeding."
  },
  {
    id: 26,
    text: "Water makes up what percentage of the total body weight (TBW) in an average adult?",
    options: ["40%", "50%", "60%", "70%"],
    correctAnswer: 2,
    explanation: "The body is composed of approximately 60% water."
  },
  {
    id: 27,
    text: "Water percentage is generally higher in:",
    options: ["Females", "Males", "Elderly", "Obese individuals"],
    correctAnswer: 1,
    explanation: "The percentage of water is higher in males than in females."
  },
  {
    id: 28,
    text: "How is total body water (TBW) distributed between intracellular and extracellular compartments?",
    options: ["1/2 Intracellular, 1/2 Extracellular", "2/3 Intracellular, 1/3 Extracellular", "1/3 Intracellular, 2/3 Extracellular", "3/4 Intracellular, 1/4 Extracellular"],
    correctAnswer: 1,
    explanation: "TBW is distributed 2/3 inside the cells (Intracellular) and 1/3 outside (Extracellular)."
  },
  {
    id: 29,
    text: "The term for excess fluid in the extracellular spaces resulting in swelling is:",
    options: ["Dehydration", "Edema", "Efflux", "Influx"],
    correctAnswer: 1,
    explanation: "Edema is an excess of fluid in the extracellular spaces."
  },
  {
    id: 30,
    text: "What's the relationship between water and sodium in the body?",
    options: ["Water repels sodium", "Sodium follows water", "Water follows sodium", "There is no relationship"],
    correctAnswer: 2,
    explanation: "A key biological rule is that 'water follows sodium' via osmosis."
  },

  // Section 4: Membrane Potential & Excitable Tissues
  {
    id: 31,
    text: "Resting Membrane Potential (RMP) is characterized by a charge that is ________ inside relative to the outside.",
    options: ["Positive", "Negative", "Neutral", "Fluctuating"],
    correctAnswer: 1,
    explanation: "RMP is an electrical potential where the inside of the cell is negative relative to the outside."
  },
  {
    id: 32,
    text: "The typical value of Resting Membrane Potential (RMP) is approximately:",
    options: ["+40 mV", "0 mV", "-70 mV to -90 mV", "-20 mV"],
    correctAnswer: 2,
    explanation: "RMP is typically estimated at -70 mV or -90 mV."
  },
  {
    id: 33,
    text: "Which of the following contributes to the negative interior of a cell during RMP?",
    options: [
      "Potassium Efflux (leakage out)",
      "Sodium Influx (leakage in)",
      "Large positive proteins inside",
      "Calcium storage"
    ],
    correctAnswer: 0,
    explanation: "Potassium efflux (leakage of positive ions out) leaves the interior more negative."
  },
  {
    id: 34,
    text: "Identify the tissues considered 'Excitable Tissues':",
    options: ["Epithelial and Connective", "Muscle and Nervous", "Bone and Blood", "Adipose and Skin"],
    correctAnswer: 1,
    explanation: "Only nerves and muscles are considered excitable tissues as they can generate action potentials."
  },
  {
    id: 35,
    text: "Efflux refers to movement ________ and Influx refers to movement ________.",
    options: [
      "Inside to Outside; Outside to Inside",
      "Outside to Inside; Inside to Outside",
      "High to Low; Low to High",
      "Active; Passive"
    ],
    correctAnswer: 0,
    explanation: "Efflux is movement from inside to outside (Exit); Influx is movement from outside to inside."
  },

  // Section 5: Nervous System - Classification
  {
    id: 36,
    text: "The Anatomical Classification of the Nervous System includes:",
    options: ["Sensory and Motor", "CNS and PNS", "Somatic and Autonomic", "Sympathetic and Parasympathetic"],
    correctAnswer: 1,
    explanation: "Anatomically, the nervous system is divided into Central (CNS) and Peripheral (PNS)."
  },
  {
    id: 37,
    text: "The CNS consists of the:",
    options: ["Nerves branching out", "Brain and Heart", "Brain and Spinal Cord", "Senses and Muscles"],
    correctAnswer: 2,
    explanation: "The Central Nervous System (CNS) includes the brain and spinal cord."
  },
  {
    id: 38,
    text: "The Functional Classification divides the nervous system into:",
    options: ["Brain and Spine", "Sensory and Motor", "Left and Right", "Old and New"],
    correctAnswer: 1,
    explanation: "Functionally, it is divided into the Sensory system and the Motor system."
  },
  {
    id: 39,
    text: "The Motor System is subdivided into:",
    options: ["Somatic and Autonomic", "CNS and PNS", "Brain and Nerves", "Fast and Slow"],
    correctAnswer: 0,
    explanation: "The Motor system is divided into Somatic (Voluntary) and Autonomic (Involuntary)."
  },
  {
    id: 40,
    text: "The 'Voluntary' nervous system that controls conscious actions like walking is the:",
    options: ["Autonomic Nervous System", "Somatic Nervous System", "Enteric Nervous System", "Sympathetic Nervous System"],
    correctAnswer: 1,
    explanation: "The Somatic nervous system controls voluntary actions."
  },

  // Section 6: Autonomic Nervous System (ANS)
  {
    id: 41,
    text: "Which system is known as the 'Fight or Flight' system?",
    options: ["Parasympathetic", "Sympathetic", "Somatic", "Enteric"],
    correctAnswer: 1,
    explanation: "The Sympathetic Nervous System is known as the 'Fight or Flight' system."
  },
  {
    id: 42,
    text: "The Sympathetic system originates from which part of the spinal cord?",
    options: ["Craniosacral", "Thoracolumbar (T1-L2)", "Cervical only", "Sacral only"],
    correctAnswer: 1,
    explanation: "The Sympathetic system originates from the Thoracolumbar segment (T1 to L2)."
  },
  {
    id: 43,
    text: "Which system is known as the 'Rest and Digest' system?",
    options: ["Sympathetic", "Parasympathetic", "Somatic", "Central"],
    correctAnswer: 1,
    explanation: "The Parasympathetic Nervous System is known as the 'Rest and Digest' system."
  },
  {
    id: 44,
    text: "The Parasympathetic system originates from cranial nerves often remembered as:",
    options: ["1914", "1973", "2024", "1234"],
    correctAnswer: 1,
    explanation: "The Parasympathetic system involves cranial nerves 3, 7, 9, and 10 (mnemonic 1973)."
  },
  {
    id: 45,
    text: "The 'Enteric Nervous System' controls which body system?",
    options: ["Respiratory", "Cardiovascular", "Gastrointestinal (Digestive)", "Muscular"],
    correctAnswer: 2,
    explanation: "The Enteric Nervous System controls digestive movement and secretions independently."
  },

  // Section 7: System Effects (Sympathetic vs Parasympathetic)
  {
    id: 46,
    text: "Dilating the pupil is known as ________ and is stimulated by the ________ system.",
    options: ["Miosis; Parasympathetic", "Mydriasis; Sympathetic", "Mydriasis; Parasympathetic", "Miosis; Sympathetic"],
    correctAnswer: 1,
    explanation: "Mydriasis is pupil dilation, caused by the Sympathetic system."
  },
  {
    id: 47,
    text: "Constricting the pupil is known as ________ and is stimulated by the ________ system.",
    options: ["Mysis; Sympathetic", "Miosis; Parasympathetic", "Mydriasis; Sympathetic", "Miosis; Sympathetic"],
    correctAnswer: 1,
    explanation: "Miosis is pupil constriction, caused by the Parasympathetic system."
  },
  {
    id: 48,
    text: "Bronchodilation (dilation of bronchioles) is a ________ response.",
    options: ["Sympathetic", "Parasympathetic", "Somatic", "Resting"],
    correctAnswer: 0,
    explanation: "Sympathetic stimulation causes bronchodilation to increase airflow during stress."
  },
  {
    id: 49,
    text: "Tachycardia (increased heart rate) is associated with which system?",
    options: ["Parasympathetic", "Sympathetic", "Enteric", "Somatic"],
    correctAnswer: 1,
    explanation: "The Sympathetic system increases heart rate (Tachycardia)."
  },
  {
    id: 50,
    text: "The Parasympathetic system ________ digestive secretions and motility.",
    options: ["Decreases", "Increases", "Has no effect on", "Stops"],
    correctAnswer: 1,
    explanation: "The Parasympathetic system increases activity for digestion ('Rest and Digest')."
  },

  // More questions to reach 70
  {
    id: 51,
    text: "Alkalosis is a condition where blood pH rises above:",
    options: ["7.35", "7.40", "7.45", "7.50"],
    correctAnswer: 2,
    explanation: "Alkalosis occurs when pH exceeds 7.45."
  },
  {
    id: 52,
    text: "Hyperthermia is commonly known as:",
    options: ["Chills", "Fever", "Freezing", "Stroke"],
    correctAnswer: 1,
    explanation: "Hyperthermia is an elevated body temperature, often called fever."
  },
  {
    id: 53,
    text: "Hyperglycemia refers to:",
    options: ["Low blood sugar", "High blood sugar", "Normal blood sugar", "Blood clotting"],
    correctAnswer: 1,
    explanation: "Hyperglycemia is high blood glucose."
  },
  {
    id: 54,
    text: "Hypoglycemia refers to:",
    options: ["Low blood sugar", "High blood sugar", "High blood pressure", "Low blood pressure"],
    correctAnswer: 0,
    explanation: "Hypoglycemia is low blood glucose."
  },
  {
    id: 55,
    text: "The ratio of extracellular water between interstitial and intravascular spaces is roughly:",
    options: ["1/2 and 1/2", "2/3 (Interstitial) and 1/3 (Intravascular)", "1/3 (Interstitial) and 2/3 (Intravascular)", "Full in blood vessels"],
    correctAnswer: 1,
    explanation: "Of the 1/3 extracellular water, 2/3 is interstitial (between cells) and 1/3 is intravascular (in vessels)."
  },
  {
    id: 56,
    text: "Why is the distribution of extracellular water (safety system) important?",
    options: ["To keep blood thick", "To prevent rapid fluid loss during a wound", "To store sugar", "To make cells heavier"],
    correctAnswer: 1,
    explanation: "This distribution prevents rapid fluid loss because the larger portion is between cells."
  },
  {
    id: 57,
    text: "Which ion exits the cell through specific channels in facilitated diffusion?",
    options: ["Sodium (Na)", "Calcium (Ca)", "Potassium (K)", "Chloride (Cl)"],
    correctAnswer: 2,
    explanation: "Potassium (K) is a common example of facilitated diffusion exiting cells."
  },
  {
    id: 58,
    text: "Primary Active Transport uses energy directly from:",
    options: ["Sunlight", "ATP hydrolysis", "Concentration gradients", "Heat"],
    correctAnswer: 1,
    explanation: "Primary active transport uses energy directly from ATP hydrolysis."
  },
  {
    id: 59,
    text: "Secondary Active Transport also depends on:",
    options: ["ATP energy", "Passive warmth", "Magnetic fields", "O2 levels"],
    correctAnswer: 0,
    explanation: "Both types of active transport depend on energy (ATP), though secondary uses it indirectly."
  },
  {
    id: 60,
    text: "A 'Hypertonic' solution causes the cell to:",
    options: ["Swell", "Burst", "Shrink", "Become more circular"],
    correctAnswer: 2,
    explanation: "A hypertonic solution draws water out of the cell, leading to shrinkage."
  },
  {
    id: 61,
    text: "The Peripheral Nervous System (PNS) includes:",
    options: ["Brain and Spinal Cord", "The Skull", "Nerves branching out from the CNS", "Only the Heart"],
    correctAnswer: 2,
    explanation: "PNS includes the nerves branching out from the brain and spinal cord."
  },
  {
    id: 62,
    text: "The Autonomic Nervous System is considered ________ control.",
    options: ["Voluntary", "Involuntary", "Conscious", "Muscle-only"],
    correctAnswer: 1,
    explanation: "Autonomic system operates automatically without conscious control (Involuntary)."
  },
  {
    id: 63,
    text: "The heart rate decreases under the influence of which system?",
    options: ["Sympathetic", "Parasympathetic", "Somatic", "Sensory"],
    correctAnswer: 1,
    explanation: "The Parasympathetic system decreases heart rate."
  },
  {
    id: 64,
    text: "Bromchoconstriction is caused by the ________ system.",
    options: ["Sympathetic", "Parasympathetic", "Central", "Enteric"],
    correctAnswer: 1,
    explanation: "The Parasympathetic system constricts bronchioles."
  },
  {
    id: 65,
    text: "The sodium-potassium pump is located in the:",
    options: ["Nucleus", "Mitochondria", "Cell membrane", "Cytoplasm"],
    correctAnswer: 2,
    explanation: "The Na-K pump is located in the cell membrane."
  },
  {
    id: 66,
    text: "Impermeable negative compounds within the cell include:",
    options: ["Small salts", "Large proteins and phosphate groups", "Water molecules", "Glucose"],
    correctAnswer: 1,
    explanation: "Large proteins and phosphate groups carry negative charges and cannot exit, contributing to negativity."
  },
  {
    id: 67,
    text: "Which ions typically migrate to achieve balance in osmosis?",
    options: ["The solutes move", "The water moves", "Both move equally", "None move"],
    correctAnswer: 1,
    explanation: "In osmosis, it is the water that moves across the membrane to achieve balance."
  },
  {
    id: 68,
    text: "Secondary active transport is driven by:",
    options: ["Gravity", "Electrical signals", "Energy from ATP", "Direct pressure"],
    correctAnswer: 2,
    explanation: "Both types of active transport require ATP energy."
  },
  {
    id: 69,
    text: "Homeostasis is maintained by:",
    options: ["A single organ", "A collective effort of all body systems", "Only the brain", "Only the heart"],
    correctAnswer: 1,
    explanation: "Homeostasis is a collective effort involving all body systems."
  },
  {
    id: 70,
    text: "The main factor determining the concentration of all other substances in the body is:",
    options: ["Sugar balance", "Water balance", "Oxygen balance", "Vitamin balance"],
    correctAnswer: 1,
    explanation: "Water balance is the first and most critical part of homeostasis."
  }
];
