export type Locale = 'en' | 'no' | 'pt';

export const locales: Locale[] = ['en', 'no', 'pt'];

export const languageMeta: Record<Locale, { label: string; flag: string }> = {
  en: { label: 'English', flag: '🇺🇸' },
  no: { label: 'Norsk', flag: '🇳🇴' },
  pt: { label: 'Português', flag: '🇧🇷' }
};

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

type ResultInsight = {
  id: ResultBucket['id'];
  title: string;
  body: string;
  source: string;
};

type StaticSection = {
  title: string;
  body: string[];
};

type StaticPage = {
  title: string;
  intro: string;
  sections: StaticSection[];
};

type Navigation = {
  quiz: string;
  about: string;
  testInfo: string;
};

type FooterCopy = {
  copyright: string;
  aboutLink: string;
};

type ShareNetwork = {
  id: 'twitter' | 'linkedin' | 'facebook';
  label: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  navigation: Navigation;
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
    takerCountLabel: string;
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
    previous: string;
    next: string;
    autoAdvance: string;
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
    insights: {
      title: string;
      intro: string;
      items: ResultInsight[];
    };
  };
  about: StaticPage;
  testInfo: StaticPage;
  footer: FooterCopy;
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
    'inteligencia-1': "You have a level of intelligence, and you really have no way to change it.",
    'inteligencia-2': 'Your intelligence is an innate characteristic that cannot be changed.',
    'inteligencia-3': 'No matter who you are, you can significantly change your level of intelligence.',
    'inteligencia-4': "Honestly, you can't change your intelligence.",
    'inteligencia-5': 'You can always substantially change your intelligence level.',
    'inteligencia-6': "You can learn new things, but you can't change your basic level of intelligence.",
    'inteligencia-7': 'No matter how smart you are, you can always change your intelligence level a lot.',
    'inteligencia-8': 'You can change your basic level of intelligence considerably.',
    'talento-9': "You have a certain level of talent, and there's no way to change that.",
    'talento-10': 'Talent for some area is something that cannot be changed.',
    'talento-11': 'No matter who you are, it is always possible to change the level of talent.',
    'talento-12': "Honestly, you can't change your talent.",
    'talento-13': 'You can always substantially alter the talent you have.',
    'talento-14': "You can learn new things, but you really can't change your basic level of talent.",
    'talento-15': 'Regardless of the talent you possess, you can always change it substantially.',
    'talento-16': 'You can even change your basic level of talent considerably.'
  },
  no: {
    'inteligencia-1': 'Du har et nivå av intelligens, og det finnes egentlig ingen måte å endre det på.',
    'inteligencia-2': 'Intelligensen din er en medfødt egenskap som ikke kan endres.',
    'inteligencia-3': 'Uansett hvem du er, kan du endre intelligensnivået ditt betydelig.',
    'inteligencia-4': 'Helt ærlig kan du ikke endre intelligensen din.',
    'inteligencia-5': 'Du kan alltid endre intelligensnivået ditt betydelig.',
    'inteligencia-6': 'Du kan lære nye ting, men du kan ikke endre ditt grunnleggende intelligensnivå.',
    'inteligencia-7': 'Uansett hvor smart du er, kan du alltid endre intelligensnivået mye.',
    'inteligencia-8': 'Du kan endre ditt grunnleggende intelligensnivå betraktelig.',
    'talento-9': 'Du har et visst nivå av talent, og det finnes ingen måte å endre det på.',
    'talento-10': 'Talent for et område er noe som ikke kan endres.',
    'talento-11': 'Uansett hvem du er, er det alltid mulig å endre talentnivået.',
    'talento-12': 'Helt ærlig kan du ikke endre talentet ditt.',
    'talento-13': 'Du kan alltid endre talentet du har betydelig.',
    'talento-14': 'Du kan lære nye ting, men du kan egentlig ikke endre ditt grunnleggende talentnivå.',
    'talento-15': 'Uansett hvilket talent du har, kan du alltid endre det betydelig.',
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

const navigation: Record<Locale, Navigation> = {
  en: {
    quiz: 'Take the test',
    about: 'About',
    testInfo: 'About the book'
  },
  no: {
    quiz: 'Start testen',
    about: 'Om',
    testInfo: 'Om boken'
  },
  pt: {
    quiz: 'Fazer o teste',
    about: 'Sobre',
    testInfo: 'Sobre o livro'
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
    languageLabel: 'Language',
    takerCountLabel: '{count} people have completed the test'
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
    methodologyCta: 'Start testen',
    languageLabel: 'Språk',
    takerCountLabel: '{count} har tatt testen'
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
    methodologyCta: 'Começar agora',
    languageLabel: 'Idioma',
    takerCountLabel: '{count} pessoas já concluíram o teste'
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
    back: '← Back',
    previous: 'Previous',
    next: 'Next',
    autoAdvance: 'Moving to the next statement…'
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
    back: '← Tilbake',
    previous: 'Forrige',
    next: 'Neste',
    autoAdvance: 'Går videre til neste påstand…'
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
    back: '← Voltar',
    previous: 'Anterior',
    next: 'Próxima',
    autoAdvance: 'Indo para a próxima afirmação…'
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
      'The sum of the statements guides your preference. Mindset is a continuum and can shift with each activity. Scores between 24 and 48 lean fixed, and 48 to 72 lean growth.',
    restart: 'Restart test',
    retake: 'Retake answers',
    insights: {
      title: 'What your score can signal',
      intro:
        'These short notes blend Dweck’s mindset research with later studies on motivation. Use them as prompts for reflection, not as a diagnosis.',
      items: [
        {
          id: 'fixed',
          title: 'Fixed preference (24 or lower)',
          body:
            'You may prioritize proven strengths and consistency. Colleagues can experience you as reliable yet risk-averse. Try pairing outcomes with process goals and invite feedback on strategies to reduce the fear of “getting it wrong.”',
          source: 'Based on Dweck (2006) and Burnette et al. (2013) meta-analyses of entity beliefs.'
        },
        {
          id: 'fixedLean',
          title: 'Fixed with flex (25–48)',
          body:
            'You can switch between protecting performance and experimenting. Others may see steadiness but also hesitation. Using if–then plans (implementation intentions) for practice time often helps convert hesitation into deliberate effort.',
          source: 'See Dweck (2006) on mixed profiles and Gollwitzer & Sheeran (2006) on implementation intentions.'
        },
        {
          id: 'growthLean',
          title: 'Growth with guardrails (49–72)',
          body:
            'You typically embrace challenge but may default to “play it safe” when stakes feel high. Make effort visible (process praise) and keep mastery goals explicit so others read your drive as constructive, not relentless.',
          source: 'Aligned with Dweck (2006) and mastery-goal framing effects summarized by Burnette et al. (2013).'
        },
        {
          id: 'growth',
          title: 'Growth preference (73 or higher)',
          body:
            'You likely persist through setbacks and radiate optimism. Peers may also need signals that you respect limits. Build in recovery time and invite challenge from others to avoid overextending your strengths.',
          source: 'Draws on Dweck (2006) and research on resilience in growth-oriented climates (Yeager & Dweck, 2012).'
        }
      ]
    }
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
      'Summen av påstandene er en veiledning til preferansen din. Mindset er et kontinuum og kan skifte med aktivitetene. Mellom 24 og 48 heller det mot fastlåst, og 48 til 72 heller mot vekst.',
    restart: 'Start testen på nytt',
    retake: 'Gå tilbake til svarene',
    insights: {
      title: 'Hva poengsummen kan tyde på',
      intro:
        'Notatene kobler Dwecks mindset-forskning med nyere funn om motivasjon. Se dem som refleksjonshjelp, ikke en diagnose.',
      items: [
        {
          id: 'fixed',
          title: 'Fastlåst preferanse (24 eller lavere)',
          body:
            'Du vektlegger kanskje stabile styrker og forutsigbarhet. Andre kan oppleve deg som pålitelig, men forsiktig. Kombiner resultatmål med prosessmål og be om tilbakemeldinger på strategier for å dempe frykten for å “gjøre feil.”',
          source: 'Bygger på Dweck (2006) og Burnette mfl. (2013) om effekten av entitetsoppfatninger.'
        },
        {
          id: 'fixedLean',
          title: 'Fast med litt fleks (25–48)',
          body:
            'Du kan veksle mellom å beskytte prestasjonen og å prøve noe nytt. Andre kan se deg som stødig, men nølende. If–then-planer (implementeringsintensjoner) for øvingstid hjelper ofte med å gjøre nøling om til målrettet innsats.',
          source: 'Se Dweck (2006) om blandede profiler og Gollwitzer & Sheeran (2006) om implementeringsintensjoner.'
        },
        {
          id: 'growthLean',
          title: 'Vekst med rekkverk (49–72)',
          body:
            'Du omfavner vanligvis utfordringer, men kan falle tilbake på “sikkert” når innsatsen virker høy. Gjør innsats synlig (prosessros) og hold mestringsmål tydelige, slik at andre leser driven din som konstruktiv og ikke masete.',
          source: 'I tråd med Dweck (2006) og mestringsorienteringseffekter oppsummert av Burnette mfl. (2013).'
        },
        {
          id: 'growth',
          title: 'Vekstpreferanse (73 eller høyere)',
          body:
            'Du står trolig i motgang og utstråler optimisme. Andre trenger også signaler om at du respekterer grenser. Legg inn pauser og inviter andres innspill for å unngå å strekke styrkene for langt.',
          source: 'Henter fra Dweck (2006) og forskning på robusthet i vekstorienterte miljøer (Yeager & Dweck, 2012).'
        }
      ]
    }
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
    retake: 'Voltar às respostas',
    insights: {
      title: 'O que sua pontuação sinaliza',
      intro:
        'Estes apontamentos unem a pesquisa de Dweck sobre mindset e estudos posteriores de motivação. Use-os como pistas de reflexão, não como diagnóstico.',
      items: [
        {
          id: 'fixed',
          title: 'Preferência fixa (24 ou menos)',
          body:
            'Você pode priorizar forças comprovadas e previsibilidade. As pessoas podem vê-lo como confiável, mas avesso a riscos. Combine metas de resultado com metas de processo e peça feedback sobre estratégias para reduzir o medo de “errar”.',
          source: 'Com base em Dweck (2006) e nas meta-análises de Burnette et al. (2013) sobre crenças de entidade.'
        },
        {
          id: 'fixedLean',
          title: 'Fixo com alguma flexibilidade (25–48)',
          body:
            'Você alterna entre proteger a performance e experimentar. Outros podem perceber firmeza, mas também hesitação. Planos se–então (intenções de implementação) para momentos de prática ajudam a transformar hesitação em esforço deliberado.',
          source: 'Veja Dweck (2006) sobre perfis mistos e Gollwitzer & Sheeran (2006) sobre intenções de implementação.'
        },
        {
          id: 'growthLean',
          title: 'Crescimento com corrimãos (49–72)',
          body:
            'Você costuma abraçar desafios, mas pode recorrer ao “seguro” quando o risco parece alto. Torne o esforço visível (elogio de processo) e mantenha metas de maestria explícitas para que sua disposição seja lida como construtiva, não insistente.',
          source: 'Alinhado a Dweck (2006) e aos efeitos de metas de maestria resumidos por Burnette et al. (2013).'
        },
        {
          id: 'growth',
          title: 'Preferência por crescimento (73 ou mais)',
          body:
            'Você tende a persistir diante de obstáculos e transmite otimismo. Colegas também precisam ver que você respeita limites. Inclua pausas e convide desafios de outras pessoas para não extrapolar suas próprias forças.',
          source: 'Baseado em Dweck (2006) e pesquisas sobre resiliência em contextos de crescimento (Yeager & Dweck, 2012).'
        }
      ]
    }
  }
};

const aboutPage: Record<Locale, StaticPage> = {
  en: {
    title: 'About & privacy',
    intro:
      'This assessment mirrors Carol S. Dweck’s fixed vs. growth mindset questionnaire with a lightweight, multilingual flow. Here you can also see who built it and how we handle privacy.',
    sections: [
      {
        title: 'What to expect',
        body: [
          'The Likert scale follows the original 1–6 pattern so scores stay compatible with the ranges described by Dweck.',
          'No accounts or storage are needed. Results are computed locally in your browser and never saved to a database.'
        ]
      },
      {
        title: 'Why it feels like sleep-test.org',
        body: [
          'The flow borrows the clean, CTA-first layout from sleep-test.org so you can start quickly, stay focused on one statement at a time, and share the outcome just as easily.'
        ]
      },
      {
        title: 'Made by',
        body: [
          'Made by DMZ DATA AS.',
          'Built pro bono in Porsgrunn with a focus on healthtech, sleeptech, and AI.'
        ]
      },
      {
        title: 'Contact',
        body: [
          'DMZ DATA AS is responsible for www.sleep-test.org. Contact point for privacy and general inquiries: kontor@dmz.no.'
        ]
      },
      {
        title: 'Explore more from DMZ DATA',
        body: [
          'Explore DMZ DATA creations at www.dmz.no.',
          'Try the app for learning Google web search (LINK), the app for learning ChatGPT (LINK), and make your Homey smart home more fun with DadJokes (LINK).'
        ]
      },
      {
        title: 'Privacy policy',
        body: [
          'Made by DMZ DATA AS.',
          'Built pro bono in Porsgrunn, focused on healthtech/sleeptech and AI.',
          'DMZ DATA AS is responsible for www.sleep-test.org. Contact point for privacy and general inquiries: kontor@dmz.no.',
          'Explore DMZ DATA creations at www.dmz.no, the app for learning Google web search (LINK), the app for learning ChatGPT (LINK), and make your Homey smart home more fun with DadJokes (LINK).',
          'We take privacy seriously. This declaration explains how we process information when you use www.sleep-test.org. By using the site you confirm you have read and accepted these terms. The site is designed so schools can use it without supplying personal data.',
          'What we process: we do not collect names, email addresses, or other directly identifiable information. To show and remember results, only a technical ID and an answer summary are used. We use no marketing cookies, third-party tracking scripts, or profiling.',
          'Purpose and legal basis: the purpose is to deliver the service and improve quality. The basis is legitimate interest (GDPR art. 6(1)(f)) to run a secure, well-functioning solution without handling personal data. Technical logs may be processed for troubleshooting and security.',
          'Storage and deletion: technical IDs and summaries are kept only as long as needed for the stated purpose. If you think content should be deleted, contact us at kontor@dmz.no.',
          'Sharing and transfer: we do not share data with third parties. If we use processors for operations, they are contractually bound to protect data and not use it for their own purposes.',
          'School use and children: the service can be used in schools without providing student data. Teachers and pupils can read and use the site without registration. No personal data is processed beyond what is strictly necessary for technical operation.',
          'Cookies: we use no unnecessary cookies. If functional cookies are introduced later (e.g., to remember language), we will update this declaration and request consent where required.',
          'Your rights and contact: questions, requests for access to technical information, or deletion requests can be sent to kontor@dmz.no. You can also complain to the Norwegian Data Protection Authority.',
          'Changes: we may update this declaration when needed. Significant changes will be published here.'
        ]
      }
    ]
  },
  no: {
    title: 'Om og personvern',
    intro:
      'Dette enkle skjemaet speiler spørresettet for fastlåst vs. vekstmindset fra Carol S. Dwecks bok “Mindset”. Her finner du også hvem som står bak og hvordan vi håndterer personvern.',
    sections: [
      {
        title: 'Hva du kan forvente',
        body: [
          'Likert-skalaen følger originalen med 1–6 slik at poengsummen er kompatibel med intervallene Dweck beskriver.',
          'Det trengs ingen konto eller lagring. Resultatet beregnes lokalt i nettleseren din og lagres ikke i en database.'
        ]
      },
      {
        title: 'Hvorfor den ligner sleep-test.org',
        body: [
          'Flyten låner den rene, handlingsrettede opplevelsen fra sleep-test.org slik at du kan starte raskt, holde fokus på én påstand av gangen og dele resultatet like enkelt.'
        ]
      },
      {
        title: 'Laget av',
        body: [
          'Laget av DMZ DATA AS.',
          'Laget på dugnad i Porsgrunn, helsetech/søvntech og AI.'
        ]
      },
      {
        title: 'Kontakt',
        body: [
          'Ansvarlig for www.sleep-test.org er DMZ DATA AS. Kontaktpunkt for personvern og generelle henvendelser: kontor@dmz.no.'
        ]
      },
      {
        title: 'Utforsk mer fra DMZ DATA',
        body: [
          'Utforsk DMZ DATA-underverker på www.dmz.no.',
          'App for å lære Google web search (LINK), App for å lære ChatGPT (LINK) og gjør Homey smarthuset ditt litt mer gøy med DadJokes (LINK).'
        ]
      },
      {
        title: 'Personvernerklæring',
        body: [
          'Laget av DMZ DATA AS.',
          'Laget på dugnad i Porsgrunn, helsetech/søvntech og AI.',
          'Ansvarlig for www.sleep-test.org er DMZ DATA AS. Kontaktpunkt for personvern og generelle henvendelser: kontor@dmz.no.',
          'Utforsk DMZ DATA-underverker på www.dmz.no, App for å lære Google web search (LINK), App for å lære ChatGPT (LINK) og gjør Homey smarthuset ditt litt mer gøy med DadJokes (LINK).',
          'Vi tar personvern på alvor. Denne erklæringen forklarer hvordan vi behandler opplysninger når du bruker www.sleep-test.org. Ved å bruke nettstedet bekrefter du at du har lest og akseptert disse vilkårene. Nettstedet er designet slik at skoler kan bruke tjenesten uten å oppgi personopplysninger.',
          'Hvilke data vi behandler: Vi samler ikke inn navn, e-postadresse eller annen direkte identifiserbar informasjon. For å vise og huske resultater brukes kun en teknisk generert ID lagret sammen med en oppsummering av svarene. Vi bruker ingen markedsførings-cookies, tredjeparts sporingsskript eller profilering.',
          'Formål og behandlingsgrunnlag: Formålet er å levere tjenesten og forbedre kvaliteten. Behandlingsgrunnlaget er berettiget interesse (GDPR art. 6(1)(f)) i å drive en sikker og velfungerende løsning uten behandling av personopplysninger. Eventuelle tekniske logger kan behandles for feilsøking og sikkerhet.',
          'Lagring og sletting: Tekniske ID-er og resultatoppsummeringer lagres bare så lenge det er nødvendig for formålet. Dersom du mener innhold bør slettes, kan du kontakte oss på kontor@dmz.no.',
          'Deling og overføring: Vi deler ikke data med tredjeparter. Dersom vi bruker underleverandører (databehandlere) for drift, vil de være kontraktsmessig forpliktet til å beskytte data og ikke bruke dem til egne formål.',
          'Skolebruk og barn: Tjenesten kan brukes i skole uten å oppgi elevdata. Lærere og elever kan lese og bruke nettstedet uten registrering. Det behandles ikke personopplysninger utover det som er strengt nødvendig for teknisk drift.',
          'Informasjonskapsler (cookies): Vi bruker ingen unødvendige cookies. Dersom vi i fremtiden innfører funksjonelle cookies (f.eks. for språkvalg), vil vi oppdatere denne erklæringen og be om samtykke der det kreves.',
          'Dine rettigheter og kontakt: Har du spørsmål, ønsker innsyn i tekniske opplysninger, eller vil be om sletting, kontakt oss på kontor@dmz.no. Du kan også klage til Datatilsynet.',
          'Endringer: Vi kan oppdatere denne erklæringen ved behov. Vesentlige endringer publiseres her.'
        ]
      }
    ]
  },
  pt: {
    title: 'Sobre e privacidade',
    intro:
      'Este questionário segue a avaliação de mindset fixo x crescimento do livro “Mindset”, de Carol S. Dweck. Aqui você também vê quem construiu o site e como tratamos privacidade.',
    sections: [
      {
        title: 'O que esperar',
        body: [
          'A escala Likert segue o padrão original de 1 a 6 para manter a compatibilidade com as faixas descritas por Dweck.',
          'Não é preciso criar conta nem armazenamos seus dados. O cálculo acontece no seu navegador e não é salvo em nenhum banco de dados.'
        ]
      },
      {
        title: 'Por que lembra o sleep-test.org',
        body: [
          'O fluxo aproveita o layout claro e direto do sleep-test.org para que você comece rápido, responda uma afirmação por vez e compartilhe o resultado com a mesma facilidade.'
        ]
      },
      {
        title: 'Feito por',
        body: [
          'Feito pela DMZ DATA AS.',
          'Construído em mutirão em Porsgrunn, com foco em healthtech, sleeptech e IA.'
        ]
      },
      {
        title: 'Contato',
        body: [
          'A DMZ DATA AS é responsável por www.sleep-test.org. Contato para privacidade e dúvidas gerais: kontor@dmz.no.'
        ]
      },
      {
        title: 'Explore mais da DMZ DATA',
        body: [
          'Explore as criações da DMZ DATA em www.dmz.no.',
          'Experimente o app para aprender a busca do Google (LINK), o app para aprender ChatGPT (LINK) e deixe sua casa inteligente Homey mais divertida com DadJokes (LINK).'
        ]
      },
      {
        title: 'Política de privacidade',
        body: [
          'Feito pela DMZ DATA AS.',
          'Construído em mutirão em Porsgrunn, com foco em healthtech, sleeptech e IA.',
          'A DMZ DATA AS é responsável por www.sleep-test.org. Contato para privacidade e dúvidas gerais: kontor@dmz.no.',
          'Explore as criações da DMZ DATA em www.dmz.no, o app para aprender a busca do Google (LINK), o app para aprender ChatGPT (LINK) e deixe sua casa inteligente Homey mais divertida com DadJokes (LINK).',
          'Levamos privacidade a sério. Esta declaração explica como tratamos informações ao usar www.sleep-test.org. Ao usar o site, você confirma que leu e aceitou estes termos. O site foi desenhado para que escolas possam usar o serviço sem fornecer dados pessoais.',
          'Quais dados processamos: não coletamos nome, e-mail ou outras informações diretamente identificáveis. Para exibir e lembrar resultados, usamos apenas um ID técnico gerado com um resumo das respostas. Não usamos cookies de marketing, scripts de rastreamento de terceiros ou criação de perfis.',
          'Finalidade e base legal: o objetivo é entregar o serviço e melhorar a qualidade. A base é interesse legítimo (GDPR art. 6(1)(f)) para operar uma solução segura e funcional sem processar dados pessoais. Logs técnicos podem ser tratados para depuração e segurança.',
          'Armazenamento e exclusão: IDs técnicos e resumos são guardados somente pelo tempo necessário. Se você achar que algo deve ser removido, escreva para kontor@dmz.no.',
          'Compartilhamento e transferência: não compartilhamos dados com terceiros. Se usarmos operadores (processadores) para a operação, eles serão contratualmente obrigados a proteger os dados e não utilizá-los para fins próprios.',
          'Uso em escolas e crianças: o serviço pode ser usado em escolas sem informar dados de alunos. Professores e alunos podem acessar e usar o site sem registro. Não tratamos dados pessoais além do estritamente necessário para a operação técnica.',
          'Cookies: não usamos cookies desnecessários. Se no futuro adicionarmos cookies funcionais (por exemplo, para lembrar idioma), atualizaremos esta declaração e pediremos consentimento quando exigido.',
          'Seus direitos e contato: dúvidas, pedidos de acesso a informações técnicas ou solicitações de exclusão podem ser enviados para kontor@dmz.no. Você também pode registrar reclamação na autoridade de proteção de dados.',
          'Mudanças: podemos atualizar esta declaração quando necessário. Mudanças relevantes serão publicadas aqui.'
        ]
      }
    ]
  }
};

const testInfoPage: Record<Locale, StaticPage> = {
  en: {
    title: 'About Carol S. Dweck and the mindset test',
    intro:
      'Psychologist Carol S. Dweck introduced the idea of fixed and growth mindsets in her book “Mindset: The New Psychology of Success”. The 16 statements here reflect the self-assessment she describes for understanding how we view intelligence and talent.',
    sections: [
      {
        title: 'Fixed vs. growth',
        body: [
          'A fixed mindset treats intelligence and talent as static traits, while a growth mindset sees them as malleable through effort, feedback, and strategy.',
          'Dweck’s research highlights that adopting a growth mindset can expand learning, resilience, and willingness to take on challenges.'
        ]
      },
      {
        title: 'About the statements',
        body: [
          'Items 1, 2, 4, 6, 9, 10, 12, and 14 are scored 1–6 from “Strongly agree” to “Strongly disagree”. Items 3, 5, 7, 8, 11, 13, 15, and 16 are reverse scored, matching the structure presented in the book.',
          'Scores between 24–48 lean fixed, 48–72 lean growth, and the extremes illustrate the spectrum described in Dweck’s guidance.'
        ]
      }
    ]
  },
  no: {
    title: 'Om Carol S. Dweck og mindset-testen',
    intro:
      'Psykologen Carol S. Dweck introduserte begrepene fastlåst og vekstmindset i boken “Mindset: The New Psychology of Success”. De 16 påstandene her speiler egenvurderingen hun beskriver for å forstå hvordan vi ser på intelligens og talent.',
    sections: [
      {
        title: 'Fastlåst vs. vekst',
        body: [
          'Et fastlåst mindset ser på intelligens og talent som statiske egenskaper, mens et vekstmindset ser dem som formbare gjennom innsats, tilbakemeldinger og gode strategier.',
          'Dwecks forskning viser at et vekstmindset kan styrke læringsevne, motstandskraft og vilje til å ta utfordringer.'
        ]
      },
      {
        title: 'Om påstandene',
        body: [
          'Påstand 1, 2, 4, 6, 9, 10, 12 og 14 skåres 1–6 fra “Helt enig” til “Helt uenig”. Påstand 3, 5, 7, 8, 11, 13, 15 og 16 skåres omvendt, slik strukturen i boken beskriver.',
          'Poengsummene mellom 24–48 heller mot fastlåst, 48–72 heller mot vekst, og ytterpunktene viser spekteret Dweck beskriver.'
        ]
      }
    ]
  },
  pt: {
    title: 'Sobre Carol S. Dweck e o teste de mindset',
    intro:
      'A psicóloga Carol S. Dweck apresentou os conceitos de mindset fixo e de crescimento no livro “Mindset: The New Psychology of Success”. As 16 afirmações aqui seguem a autoavaliação descrita por ela para entender como vemos inteligência e talento.',
    sections: [
      {
        title: 'Fixo vs. crescimento',
        body: [
          'Um mindset fixo trata inteligência e talento como traços estáticos, enquanto um mindset de crescimento os vê como maleáveis por meio de esforço, feedback e estratégia.',
          'A pesquisa de Dweck mostra que adotar um mindset de crescimento amplia a aprendizagem, a resiliência e a disposição para encarar desafios.'
        ]
      },
      {
        title: 'Sobre as afirmações',
        body: [
          'Os itens 1, 2, 4, 6, 9, 10, 12 e 14 são pontuados de 1 a 6 de “Concordo totalmente” a “Discordo totalmente”. Os itens 3, 5, 7, 8, 11, 13, 15 e 16 são pontuados de forma invertida, seguindo a estrutura do livro.',
          'Pontuações entre 24–48 indicam tendência a mindset fixo, 48–72 indicam inclinação ao mindset de crescimento, e os extremos ilustram o espectro descrito por Dweck.'
        ]
      }
    ]
  }
};

const footerCopy: Record<Locale, FooterCopy> = {
  en: {
    copyright: '© 2025 DMZ DATA AS',
    aboutLink: 'About, terms and contact'
  },
  no: {
    copyright: '© 2025 DMZ DATA AS',
    aboutLink: 'Om, vilkår og kontakt'
  },
  pt: {
    copyright: '© 2025 DMZ DATA AS',
    aboutLink: 'Sobre, termos e contato'
  }
};

export const dictionary: Record<Locale, Dictionary> = {
  en: {
    meta: meta.en,
    navigation: navigation.en,
    landing: landing.en,
    quiz: {
      ...quizCopy.en,
      questions: baseQuestions.map((q) => ({ ...q, prompt: questionPrompts.en[q.id] })),
      likertOptions: likertOptions.en
    },
    results: resultCopy.en,
    about: aboutPage.en,
    testInfo: testInfoPage.en,
    footer: footerCopy.en
  },
  no: {
    meta: meta.no,
    navigation: navigation.no,
    landing: landing.no,
    quiz: {
      ...quizCopy.no,
      questions: baseQuestions.map((q) => ({ ...q, prompt: questionPrompts.no[q.id] })),
      likertOptions: likertOptions.no
    },
    results: resultCopy.no,
    about: aboutPage.no,
    testInfo: testInfoPage.no,
    footer: footerCopy.no
  },
  pt: {
    meta: meta.pt,
    navigation: navigation.pt,
    landing: landing.pt,
    quiz: {
      ...quizCopy.pt,
      questions: baseQuestions.map((q) => ({ ...q, prompt: questionPrompts.pt[q.id] })),
      likertOptions: likertOptions.pt
    },
    results: resultCopy.pt,
    about: aboutPage.pt,
    testInfo: testInfoPage.pt,
    footer: footerCopy.pt
  }
};

export function getDictionary(locale: Locale): Dictionary {
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
