export type Locale = 'en' | 'no' | 'pt';

export const locales: Locale[] = ['en', 'no', 'pt'];

type LikertOption = {
  label: string;
  value: number;
};

type Question = {
  id: string;
  number: number;
  prompt: string;
  orientation: 'normal' | 'reverse';
};

type ResultBucket = {
  id: 'fixed' | 'fixedLean' | 'growthLean' | 'growth';
  title: string;
  range: string;
  summary: string;
  advice: string;
};

type ShareNetwork = {
  id: 'twitter' | 'linkedin' | 'facebook';
  label: string;
};

type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  landing: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
    secondaryCta: string;
    highlights: string[];
    footer: string;
    methodologyTitle: string;
    methodologyBody: string[];
    methodologyCta: string;
    languageLabel: string;
  };
  quiz: {
    title: string;
    intro: string;
    progressLabel: (current: number, total: number) => string;
    progressA11yLabel: string;
    cta: string;
    secondaryCta: string;
    likertLabel: string;
    questions: Question[];
    likertOptions: LikertOption[];
    completionHint: string;
    back: string;
  };
  results: {
    title: string;
    scoreLabel: string;
    scoreUnit: string;
    shareHeading: string;
    shareCopy: string;
    shareAction: string;
    shareNetworks: ShareNetwork[];
    buckets: ResultBucket[];
    learnMore: string;
    restart: string;
    retake: string;
  };
};

const baseQuestions: Array<Pick<Question, 'id' | 'number' | 'orientation'>> = [
  { id: 'inteligencia-1', number: 1, orientation: 'normal' },
  { id: 'inteligencia-2', number: 2, orientation: 'normal' },
  { id: 'inteligencia-3', number: 3, orientation: 'reverse' },
  { id: 'inteligencia-4', number: 4, orientation: 'normal' },
  { id: 'inteligencia-5', number: 5, orientation: 'reverse' },
  { id: 'inteligencia-6', number: 6, orientation: 'normal' },
  { id: 'inteligencia-7', number: 7, orientation: 'reverse' },
  { id: 'inteligencia-8', number: 8, orientation: 'reverse' },
  { id: 'talento-9', number: 9, orientation: 'normal' },
  { id: 'talento-10', number: 10, orientation: 'normal' },
  { id: 'talento-11', number: 11, orientation: 'reverse' },
  { id: 'talento-12', number: 12, orientation: 'normal' },
  { id: 'talento-13', number: 13, orientation: 'reverse' },
  { id: 'talento-14', number: 14, orientation: 'normal' },
  { id: 'talento-15', number: 15, orientation: 'reverse' },
  { id: 'talento-16', number: 16, orientation: 'reverse' }
];

const questionPrompts: Record<Locale, Record<string, string>> = {
  en: {
    'inteligencia-1': 'You have a certain level of intelligence, and there is really no way to change it.',
    'inteligencia-2': 'Your intelligence is an innate trait that cannot be altered.',
    'inteligencia-3': 'No matter who you are, you can significantly change your level of intelligence.',
    'inteligencia-4': 'Honestly, you cannot change your intelligence.',
    'inteligencia-5': 'You can always substantially change your level of intelligence.',
    'inteligencia-6': 'You may learn new things, but you cannot change your basic level of intelligence.',
    'inteligencia-7': 'No matter how intelligent you are, you can always change your level of intelligence quite a bit.',
    'inteligencia-8': 'You can change your basic level of intelligence considerably.',
    'talento-9': 'You have a certain level of talent, and there is no way to change it.',
    'talento-10': 'Talent in any area is something that cannot be altered.',
    'talento-11': 'No matter who you are, it is always possible to change your level of talent.',
    'talento-12': 'Honestly, you cannot change your talent.',
    'talento-13': 'You can always substantially change the talent you have.',
    'talento-14': 'You can learn new things, but you really cannot change your basic level of talent.',
    'talento-15': 'Regardless of the talent you have, you can always change it substantially.',
    'talento-16': 'You can even change your basic level of talent considerably.'
  },
  no: {
    'inteligencia-1': 'Du har et visst nivå av intelligens, og det er egentlig ingen måte å endre det på.',
    'inteligencia-2': 'Intelligensen din er en iboende egenskap som ikke kan endres.',
    'inteligencia-3': 'Uansett hvem du er, kan du endre intelligensnivået ditt betydelig.',
    'inteligencia-4': 'Helt ærlig kan du ikke endre intelligensen din.',
    'inteligencia-5': 'Du kan alltid endre intelligensnivået ditt betydelig.',
    'inteligencia-6': 'Du kan lære nye ting, men du kan ikke endre ditt grunnleggende intelligensnivå.',
    'inteligencia-7': 'Uansett hvor intelligent du er, kan du alltid endre intelligensnivået ganske mye.',
    'inteligencia-8': 'Du kan endre ditt grunnleggende intelligensnivå betraktelig.',
    'talento-9': 'Du har et visst nivå av talent, og det finnes ingen måte å endre det på.',
    'talento-10': 'Talent innen et område er noe som ikke kan endres.',
    'talento-11': 'Uansett hvem du er, er det alltid mulig å endre talentnivået ditt.',
    'talento-12': 'Helt ærlig kan du ikke endre talentet ditt.',
    'talento-13': 'Du kan alltid endre talentet du har betydelig.',
    'talento-14': 'Du kan lære nye ting, men du kan ikke virkelig endre ditt grunnleggende talentnivå.',
    'talento-15': 'Uavhengig av talentet du har, kan du alltid endre det betydelig.',
    'talento-16': 'Du kan til og med endre ditt grunnleggende talentnivå betraktelig.'
  },
  pt: {
    'inteligencia-1': 'Você possui um nível de inteligência e, na verdade, não tem como mudá-lo.',
    'inteligencia-2': 'Sua inteligência é uma característica inata sua que não tem como ser alterada.',
    'inteligencia-3': 'Não importa quem você seja, você pode alterar significativamente seu nível de inteligência.',
    'inteligencia-4': 'Honestamente, você não pode alterar sua inteligência.',
    'inteligencia-5': 'Você sempre pode alterar substancialmente seu nível de inteligência.',
    'inteligencia-6': 'Você pode aprender coisas novas, mas não pode alterar o seu nível básico de inteligência.',
    'inteligencia-7': 'Não importa quão inteligente você seja, você sempre poderá alterar bastante seu nível de inteligência.',
    'inteligencia-8': 'Você pode mudar o nível básico de inteligência consideravelmente.',
    'talento-9': 'Você tem um certo nível de talento, e não há como alterar isso.',
    'talento-10': 'O talento para alguma área é algo que não se pode alterar.',
    'talento-11': 'Não importa quem você seja, sempre é possível alterar o nível de talento.',
    'talento-12': 'Honestamente, você não pode alterar seu talento.',
    'talento-13': 'Você sempre pode alterar substancialmente o talento que você tem.',
    'talento-14': 'Você pode aprender coisas novas, mas realmente não pode alterar o seu nível básico de talento.',
    'talento-15': 'Independentemente do talento que você possui, você pode sempre alterá-lo substancialmente.',
    'talento-16': 'Você pode alterar até mesmo o seu nível básico de talento consideravelmente.'
  }
};

const likertOptions: Record<Locale, LikertOption[]> = {
  en: [
    { label: 'Strongly agree', value: 1 },
    { label: 'Agree', value: 2 },
    { label: 'Somewhat agree', value: 3 },
    { label: 'Somewhat disagree', value: 4 },
    { label: 'Disagree', value: 5 },
    { label: 'Strongly disagree', value: 6 }
  ],
  no: [
    { label: 'Helt enig', value: 1 },
    { label: 'Enig', value: 2 },
    { label: 'Delvis enig', value: 3 },
    { label: 'Delvis uenig', value: 4 },
    { label: 'Uenig', value: 5 },
    { label: 'Helt uenig', value: 6 }
  ],
  pt: [
    { label: 'Concordo totalmente', value: 1 },
    { label: 'Concordo', value: 2 },
    { label: 'Concordo parcialmente', value: 3 },
    { label: 'Discordo parcialmente', value: 4 },
    { label: 'Discordo', value: 5 },
    { label: 'Discordo totalmente', value: 6 }
  ]
};

const resultBuckets: Record<Locale, ResultBucket[]> = {
  en: [
    {
      id: 'fixed',
      title: 'Preference for a fixed mindset',
      range: '≤ 24 points',
      summary:
        'You tend to view intelligence and talent as rigid traits. This starting point can limit growth and reduce room for experimentation.',
      advice:
        'Try noting one daily question about something that feels unchangeable. Small curiosities fuel gradual, constant shifts.'
    },
    {
      id: 'fixedLean',
      title: 'Leaning fixed mindset with moments of flexibility',
      range: '24–48 points',
      summary:
        'Stability is your default, but you make exceptions in specific contexts. There is room to test new approaches without losing discipline and focus.',
      advice:
        'Pick a weekly activity to test ideas and request feedback before deciding. Use what you learn to reduce risk without losing consistency.'
    },
    {
      id: 'growthLean',
      title: 'Leaning toward a growth mindset',
      range: '48–72 points',
      summary:
        'You see intelligence and talent as starting points. You learn from mistakes, change course when needed, and stay curious.',
      advice:
        'Build a reflection habit after each project: where does a fixed mindset still show up, and when might it help maintain discipline and focus?'
    },
    {
      id: 'growth',
      title: 'Consistent growth mindset',
      range: '≥ 72 points',
      summary:
        'You work with the idea of continuous evolution, opening possibilities and encouraging experimentation while still keeping an eye on decisive moments.',
      advice:
        'Use your profile to help others test hypotheses. At the same time, set checkpoints with clear criteria to decide when to end an experiment.'
    }
  ],
  no: [
    {
      id: 'fixed',
      title: 'Preferanse for fastlåst mindset',
      range: '≤ 24 poeng',
      summary:
        'Du ser ofte på intelligens og talent som faste egenskaper. Det kan begrense vekst og gjøre det vanskelig å prøve nye ting.',
      advice:
        'Noter ett daglig spørsmål om noe du opplever som uforanderlig. Små doser nysgjerrighet driver gradvise, jevne endringer.'
    },
    {
      id: 'fixedLean',
      title: 'Lener mot fastlåst mindset, med fleksibilitet innimellom',
      range: '24–48 poeng',
      summary:
        'Stabilitet er utgangspunktet ditt, men du gjør unntak i bestemte situasjoner. Det finnes rom for å teste nye tilnærminger uten å miste disiplin og fokus.',
      advice:
        'Velg en ukentlig aktivitet der du prøver ut ideer og ber om tilbakemelding før du lander beslutninger. Bruk innsikten til å redusere risiko uten å gi slipp på struktur.'
    },
    {
      id: 'growthLean',
      title: 'Lener mot vekstmindset',
      range: '48–72 poeng',
      summary:
        'Du ser intelligens og talent som utgangspunkt. Du lærer av feil, endrer kurs når det trengs og holder nysgjerrigheten levende.',
      advice:
        'Gjør ettertankemøter til en vane: hvor dukker et fastlåst mindset fortsatt opp, og når kan det faktisk hjelpe deg med disiplin og fokus?'
    },
    {
      id: 'growth',
      title: 'Stødig vekstmindset',
      range: '≥ 72 poeng',
      summary:
        'Du jobber ut fra idéen om kontinuerlig utvikling. Det åpner muligheter og oppmuntrer til å teste nye ting, samtidig som du fanger øyeblikkene som krever klare valg.',
      advice:
        'Bruk profilen din til å hjelpe andre med å teste hypoteser. Sett også tydelige sjekkpunkter for når et eksperiment bør avsluttes.'
    }
  ],
  pt: [
    {
      id: 'fixed',
      title: 'Preferência por mindset fixo',
      range: '≤ 24 pontos',
      summary:
        'Você tende a ver inteligência e talento como traços rígidos. Esse ponto de partida pode limitar seu crescimento e reduzir o espaço para experimentação.',
      advice:
        'Experimente registrar um questionamento por dia sobre algo que parece imutável. Pequenas curiosidades alimentam mudanças graduais e constantes.'
    },
    {
      id: 'fixedLean',
      title: 'Tendência ao mindset fixo, com flexibilidade pontual',
      range: '24–48 pontos',
      summary:
        'A preferência é por estabilidade, mas você abre exceções em contextos específicos. Há espaço para experimentar novas abordagens sem abandonar disciplina e foco.',
      advice:
        'Escolha uma atividade semanal para testar ideias e pedir feedback antes de firmar uma decisão. Use o resultado para reduzir riscos sem perder consistência.'
    },
    {
      id: 'growthLean',
      title: 'Tendência ao mindset de crescimento',
      range: '48–72 pontos',
      summary:
        'Você encara inteligência e talento como pontos de partida. Aprende com erros, muda de rota quando necessário e mantém curiosidade ativa.',
      advice:
        'Fortaleça o hábito de refletir após cada projeto: onde o mindset fixo ainda aparece e quando ele pode ser útil para manter disciplina e foco?'
    },
    {
      id: 'growth',
      title: 'Mindset de crescimento consistente',
      range: '≥ 72 pontos',
      summary:
        'Você trabalha com a ideia de evolução contínua. Isso amplia possibilidades e incentiva experimentação, mantendo-se atento para não perder o timing de decisões firmes.',
      advice:
        'Use seu perfil para ajudar outras pessoas a testar hipóteses. Ao mesmo tempo, defina checkpoints com critérios claros para decidir quando encerrar um experimento.'
    }
  ]
};

const meta: Record<Locale, Dictionary['meta']> = {
  en: {
    title: 'Mindset Test – Fixed vs Growth',
    description:
      'Answer 16 statements inspired by Carol S. Dweck’s book “Mindset”. Discover whether you lean toward a fixed or growth mindset and share your result instantly.'
  },
  no: {
    title: 'Mindset-test – Fastlåst vs. vekst',
    description:
      'Svar på 16 påstander inspirert av Carol S. Dwecks bok “Mindset”. Finn ut om du heller mot et fastlåst eller et vekstmindset og del resultatet med én gang.'
  },
  pt: {
    title: 'Teste de Mindset – Fixo x Crescimento',
    description:
      'Avaliação inspirada no livro “Mindset” de Carol S. Dweck. Responda as 16 afirmações e descubra sua inclinação entre mindset fixo e de crescimento.'
  }
};

const landing: Record<Locale, Dictionary['landing']> = {
  en: {
    eyebrow: 'Fixed vs Growth Mindset Test',
    title: 'Find out how you see intelligence, talent, and progress.',
    lead:
      'Based on the assessment from Carol S. Dweck’s book “Mindset”. In under five minutes you move through 16 statements, get your score, and a share-ready result.',
    cta: 'Start the test',
    secondaryCta: 'See how it works',
    highlights: [
      'Six-point Likert scale — same as the original instrument',
      'Results page ready for social sharing',
      'Copy and scoring aligned to the published ranges'
    ],
    footer: 'Inspired by sleep-test.org and adapted for the Mindset questionnaire.',
    methodologyTitle: 'How it works',
    methodologyBody: [
      'The 16 statements come from the material in the book “Mindset” by Carol S. Dweck. For each one, pick your level of agreement on a six-point Likert scale.',
      'Some questions are reverse scored; the calculation happens automatically. When you finish, you get a clear result aligned with the interpretation ranges from the source material.'
    ],
    methodologyCta: 'Begin now',
    languageLabel: 'Language'
  },
  no: {
    eyebrow: 'Test for fastlåst vs. vekstmindset',
    title: 'Finn ut hvordan du ser på intelligens, talent og utvikling.',
    lead:
      'Basert på vurderingsverktøyet fra Carol S. Dwecks bok “Mindset”. På under fem minutter svarer du på 16 påstander og får et resultat klart til å deles.',
    cta: 'Start testen',
    secondaryCta: 'Se hvordan testen fungerer',
    highlights: [
      'Likert-skala med seks nivåer — lik originalen',
      'Resultatside klar for deling i sosiale medier',
      'Tekst og poenggrenser samsvarer med kildematerialet'
    ],
    footer: 'Inspirert av sleep-test.org og tilpasset Mindset-spørsmålene.',
    methodologyTitle: 'Slik fungerer det',
    methodologyBody: [
      'De 16 påstandene er hentet fra materialet i boken “Mindset” av Carol S. Dweck. For hver påstand velger du graden av enighet på en Likert-skala med seks trinn.',
      'Noen spørsmål er omvendt skåret; beregningen skjer automatisk. Når du er ferdig, får du et tydelig resultat i tråd med tolkningsintervallene fra kilden.'
    ],
    methodologyCta: 'Begynn nå',
    languageLabel: 'Språk'
  },
  pt: {
    eyebrow: 'Teste Mindset Fixo x Crescimento',
    title: 'Descubra como você encara inteligência, talento e evolução.',
    lead:
      'Baseado no instrumento apresentado no livro “Mindset”, de Carol S. Dweck. Em menos de cinco minutos você percorre 16 afirmações e recebe um resultado pronto para compartilhar.',
    cta: 'Começar agora',
    secondaryCta: 'Ver metodologia',
    highlights: [
      'Escala Likert de 6 pontos — igual ao modelo original',
      'Resultado pronto para compartilhar em redes sociais',
      'Cópia completa em português e pronta para uso'
    ],
    footer: 'Projeto inspirado em sleep-test.org, adaptado para o teste de Mindset.',
    methodologyTitle: 'Como funciona',
    methodologyBody: [
      'As 16 afirmações abaixo foram extraídas do material apresentado no livro “Mindset”, de Carol S. Dweck. Para cada uma, escolha seu nível de concordância em uma escala Likert de seis pontos.',
      'Algumas perguntas são pontuadas de forma invertida, e todo o cálculo é aplicado automaticamente para você. Ao concluir, você recebe um resultado alinhado às faixas originais.'
    ],
    methodologyCta: 'Iniciar agora',
    languageLabel: 'Idioma'
  }
};

const quizCopy: Record<Locale, Omit<Dictionary['quiz'], 'questions' | 'likertOptions'>> = {
  en: {
    title: 'Answer the statements',
    intro:
      'Use the agreement scale for each statement. Some items are reverse scored — the logic is already applied in the final calculation.',
    progressLabel: (current, total) => `${current} of ${total} answered`,
    progressA11yLabel: 'Questionnaire progress',
    cta: 'See my result',
    secondaryCta: 'Reset test',
    likertLabel: 'Choose your level of agreement',
    completionHint: 'Answer all statements to unlock the result.',
    back: '← Back'
  },
  no: {
    title: 'Svar på påstandene',
    intro:
      'Bruk skalaen for hvor enig du er i hver påstand. Noen spørsmål skåres omvendt — logikken er allerede tatt med i beregningen.',
    progressLabel: (current, total) => `${current} av ${total} besvart`,
    progressA11yLabel: 'Fremdrift i spørreskjemaet',
    cta: 'Se resultatet mitt',
    secondaryCta: 'Tilbakestill test',
    likertLabel: 'Velg graden av enighet',
    completionHint: 'Svar på alle påstandene for å låse opp resultatet.',
    back: '← Tilbake'
  },
  pt: {
    title: 'Responda às afirmações',
    intro:
      'Siga a escala de concordância para cada afirmação. Algumas questões são pontuadas de forma invertida — a lógica já está aplicada automaticamente no cálculo final.',
    progressLabel: (current, total) => `${current} de ${total} respondidas`,
    progressA11yLabel: 'Progresso do questionário',
    cta: 'Ver meu resultado',
    secondaryCta: 'Reiniciar teste',
    likertLabel: 'Escolha seu nível de concordância',
    completionHint: 'Responda todas as afirmações para liberar o resultado.',
    back: '← Voltar'
  }
};

const resultCopy: Record<Locale, Dictionary['results']> = {
  en: {
    title: 'Mindset Test Results',
    scoreLabel: 'Score',
    scoreUnit: 'points',
    shareHeading: 'Share',
    shareCopy: 'Share your result and invite others to discover their own mindset.',
    shareAction: 'Copy or share',
    shareNetworks: [
      { id: 'twitter', label: 'Twitter / X' },
      { id: 'linkedin', label: 'LinkedIn' },
      { id: 'facebook', label: 'Facebook' }
    ],
    buckets: resultBuckets.en,
    learnMore:
      'Scores between 24 and 72 show that mindset can vary with the activity. Treat it as an invitation to question fixed beliefs and try gradual changes.',
    restart: 'Restart test',
    retake: 'Retake answers'
  },
  no: {
    title: 'Resultater fra mindset-testen',
    scoreLabel: 'Poengsum',
    scoreUnit: 'poeng',
    shareHeading: 'Del',
    shareCopy: 'Del resultatet ditt og inviter andre til å oppdage sitt eget mindset.',
    shareAction: 'Kopier eller del',
    shareNetworks: [
      { id: 'twitter', label: 'Twitter / X' },
      { id: 'linkedin', label: 'LinkedIn' },
      { id: 'facebook', label: 'Facebook' }
    ],
    buckets: resultBuckets.no,
    learnMore:
      'Poeng mellom 24 og 72 viser at mindset kan variere med aktiviteten. Se det som en invitasjon til å utfordre faste antakelser og teste gradvise endringer.',
    restart: 'Start testen på nytt',
    retake: 'Gå tilbake til svarene'
  },
  pt: {
    title: 'Resultados do Teste de Mindset',
    scoreLabel: 'Pontuação',
    scoreUnit: 'pontos',
    shareHeading: 'Compartilhar',
    shareCopy: 'Divulgue seu resultado e convide outras pessoas a descobrirem o próprio mindset.',
    shareAction: 'Copiar ou compartilhar',
    shareNetworks: [
      { id: 'twitter', label: 'Twitter / X' },
      { id: 'linkedin', label: 'LinkedIn' },
      { id: 'facebook', label: 'Facebook' }
    ],
    buckets: resultBuckets.pt,
    learnMore:
      'A faixa intermediária entre 24 e 72 pontos indica que o mindset pode variar conforme a atividade. Use isso como um convite para questionar crenças fixas e experimentar mudanças graduais.',
    restart: 'Refazer teste',
    retake: 'Voltar às respostas'
  }
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    meta: meta.en,
    landing: landing.en,
    quiz: {
      ...quizCopy.en,
      questions: baseQuestions.map((q) => ({ ...q, prompt: questionPrompts.en[q.id] })),
      likertOptions: likertOptions.en
    },
    results: resultCopy.en
  },
  no: {
    meta: meta.no,
    landing: landing.no,
    quiz: {
      ...quizCopy.no,
      questions: baseQuestions.map((q) => ({ ...q, prompt: questionPrompts.no[q.id] })),
      likertOptions: likertOptions.no
    },
    results: resultCopy.no
  },
  pt: {
    meta: meta.pt,
    landing: landing.pt,
    quiz: {
      ...quizCopy.pt,
      questions: baseQuestions.map((q) => ({ ...q, prompt: questionPrompts.pt[q.id] })),
      likertOptions: likertOptions.pt
    },
    results: resultCopy.pt
  }
};

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}

export function normalizeAnswer(optionValue: number, questionId: string) {
  const question = baseQuestions.find((q) => q.id === questionId);
  if (!question) return optionValue;
  if (question.orientation === 'reverse') {
    return 7 - optionValue;
  }
  return optionValue;
}

export function getQuizQuestions(locale: Locale) {
  return dictionary[locale].quiz.questions;
}

export function getResultBucket(totalScore: number, locale: Locale) {
  if (totalScore <= 24) return resultBuckets[locale].find((r) => r.id === 'fixed')!;
  if (totalScore <= 48) return resultBuckets[locale].find((r) => r.id === 'fixedLean')!;
  if (totalScore <= 72) return resultBuckets[locale].find((r) => r.id === 'growthLean')!;
  return resultBuckets[locale].find((r) => r.id === 'growth')!;
}

export function computeScore(answers: Record<string, number>) {
  const total = Object.entries(answers).reduce((sum, [questionId, value]) => {
    return sum + normalizeAnswer(value, questionId);
  }, 0);
  return {
    total,
    max: baseQuestions.length * 6,
    min: baseQuestions.length * 1
  };
}

export function defaultLocale(): Locale {
  return 'en';
}
