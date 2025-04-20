interface PhoneticLetterData {
  phoneticQuestion: string;
  phoneticAnswer1: string;
  phoneticAnswer2: string;
  phoneticAnswer3?: string;
}

export const PHONETIC_LETTERS: Record<string, PhoneticLetterData> = {
  C: {
    phoneticQuestion: "c",
    phoneticAnswer1: "k",
    phoneticAnswer2: "s",
    phoneticAnswer3: "tiy",
  },
  CH: {
    phoneticQuestion: "ch",
    phoneticAnswer1: "k",
    phoneticAnswer2: "tiy",
  },
  J: {
    phoneticQuestion: "j",
    phoneticAnswer1: "h",
    phoneticAnswer2: "diy",
  },
  QU: {
    phoneticQuestion: "qu",
    phoneticAnswer1: "k",
    phoneticAnswer2: "kuw",
  },
};
