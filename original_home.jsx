Created At: 2026-06-24T19:01:20Z
Completed At: 2026-06-24T19:01:20Z
File Path: `file:///c:/Users/vivek%20patel/Downloads/tech6sence-main/src/pages/Home.jsx`
Total Lines: 951
Total Bytes: 46139
Showing lines 601 to 951
The following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.
601:           <h4 className="mb-2 font-display text-[1.4rem] font-bold text-slate-800 tracking-tight">{title}</h4>
602:           <p className="font-body text-[0.9rem] leading-relaxed text-slate-500">
603:             {description}
604:           </p>
605:         </div>
606:       </div>
607:     </div>
608:   )
609: }
610: 
611: function AboutSection() {
612:   return (
613:     <section id="about" className="relative w-full py-32 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FAF9FF 0%, #f5f1ff 100%)' }}>
614:       {/* Subtle grid */}
615:       <div className="pointer-events-none absolute inset-0 z-0 opacity-30 [background-image:linear-gradient(rgba(124,58,237,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.06)_1px,transparent_1px)] [background-size:64px_64px]" />
616:       
617:       {/* Animated floating gradient blobs */}
618:       <div className="hero-blob-1 absolute -top-20 right-[-5%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-violet-200/40 via-purple-200/30 to-fuchsia-200/40 blur-[100px] pointer-events-none" />
619:       <div className="hero-blob-2 absolute bottom-[-10%] left-[-8%] h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-indigo-200/35 via-violet-200/25 to-purple-200/35 blur-[100px] pointer-events-none" />
620:       <div className="hero-blob-3 absolute top-1/3 left-1/2 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-pink-200/25 via-fuchsia-200/20 to-violet-200/25 blur-[100px] pointer-events-none" />
621: 
622:       <div className="relative z-10 mx-auto max-w-[85rem]">
623:         {/* Section Header */}
624:         <div className="mb-16 flex items-center gap-3">
625:           <span className="icon-soft-glow flex h-8 w-8 items-center justify-center rounded-lg border border-violet-300 bg-violet-100 text-violet-600">
626:             <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
627:               <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
628:             </svg>
629:           </span>
630:           <span className="h-px w-16 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-transparent" />
631:           <h2 className="font-body text-xs font-bold tracking-[0.3em] text-violet-600 uppercase">
632:             WHO WE ARE
633:           </h2>
634:         </div>
635: 
636:         {/* Content Layout */}
637:         <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] xl:gap-16">
638:           
639:           {/* Main Narrative */}
640:           <div className="flex flex-col justify-center">
641:             <h3 className="mb-8 font-display text-[clamp(2.5rem,4vw,4rem)] leading-[1.15] font-bold text-slate-800">
642:               Welcome to <br/><span className="text-shimmer">TECH6SENSE AI</span>
643:             </h3>
644:             
645:             {/* Animated gradient border card */}
646:             <div className="animated-gradient-border group relative rounded-2xl px-8 py-8">
647:               <p className="mb-6 font-body text-base leading-relaxed text-slate-600 md:text-lg relative z-10">
648:                 Welcome to TECH6SENSE AI, where cutting-edge artificial intelligence research converges with real-world business transformation. Founded by <strong className="text-slate-800">Dr. Chintan Patel</strong>, a distinguished AI researcher and innovator, we're pioneering the next generation of intelligent solutions that redefine what's possible in technology and business.
649:               </p>
650:               
651:               <p className="font-body text-base leading-relaxed text-slate-600 md:text-lg relative z-10">
652:                 Operating from the prestigious <strong className="text-violet-600 font-bold">GIFT City</strong> – India's premier financial and technology hub – we serve global enterprises, ambitious startups, and visionary founders ready to harness the transformative power of artificial intelligence.
653:               </p>
654: 
655:               {/* Decorative dots */}
656:               <div className="absolute bottom-4 right-4 flex gap-2 opacity-60 z-10">
657:                 <div className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-400 to-purple-500" />
658:                 <div className="h-2 w-2 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500" />
659:                 <div className="h-2 w-2 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500" />
660:               </div>
661:             </div>
662:           </div>
663: 
664:           {/* Bento Cards - Right Side */}
665:           <div className="flex flex-col gap-6">
666:             <BentoCard
667:               title="GIFT City HQ"
668:               description="Operating from India's premier global financial and technology hub. We leverage world-class infrastructure to serve global enterprises and visionary startups with unparalleled security and scalability."
669:               icon={
670:                 <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
671:                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
672:                 </svg>
673:               }
674:             />
675: 
676:             <BentoCard
677:               title="Deep-Tech Driven"
678:               description="Beyond standard software. We build the next generation of intelligent solutions—from custom AI models and computer vision to advanced hardware integrations and enterprise automation."
679:               icon={
680:                 <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2">
681:                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.433 4.433 0 002.771 2.771 4.902 4.902 0 003.123-.06 4.5 4.5 0 002.515-2.515c.14-.36.214-.75.214-1.146a4.48 4.48 0 00-1.146-3.003c-.26-.29-.553-.55-.867-.775M8.5 13l-4 4 2 2 4-4" />
682:                 </svg>
683:               }
684:               isFuchsia={true}
685:             />
686:           </div>
687:         </div>
688:       </div>
689:     </section>
690:   )
691: }
692: 
693: const MemoHeader = memo(Header);
694: const MemoAboutSection = memo(AboutSection);
695: const MemoIntelligenceStack = memo(IntelligenceStack);
696: const MemoHowWeWork = memo(HowWeWork);
697: const MemoSimpleTextSection = memo(SimpleTextSection);
698: 
699: export default function Home() {
700:   const scrollRef = useRef(null)
701:   const heroRef = useRef(null)
702:   const [progress, setProgress] = useState(0)
703:   const [torch, setTorch] = useState({ x: 0, y: 0, active: false })
704:   const [winSize, setWinSize] = useState({ w: 1200, h: 800 })
705: 
706:   useEffect(() => {
707:     if (typeof window === 'undefined') return
708:     
709:     if ('scrollRestoration' in window.history) {
710:       window.history.scrollRestoration = 'manual'
711:     }
712:     window.scrollTo(0, 0)
713: 
714:     const el = scrollRef.current
715:     if (!el) return
716: 
717:     let scrollable = el.offsetHeight - window.innerHeight
718: 
719:     const handleResize = () => {
720:       setWinSize({ w: window.innerWidth, h: window.innerHeight })
721:       scrollable = el.offsetHeight - window.innerHeight
722:     }
723:     handleResize()
724: 
725:     const onScroll = () => {
726:       const scrolled = Math.min(Math.max(window.scrollY, 0), scrollable)
727:       setProgress(scrollable > 0 ? scrolled / scrollable : 0)
728:     }
729:     onScroll()
730: 
731:     window.addEventListener('resize', handleResize, { passive: true })
732:     window.addEventListener('scroll', onScroll, { passive: true })
733: 
734:     return () => {
735:       window.removeEventListener('resize', handleResize)
736:       window.removeEventListener('scroll', onScroll)
737:     }
738:   }, [])
739: 
740:   const updateTorch = (clientX, clientY) => {
741:     setTorch({ x: clientX, y: clientY, active: true })
742:   }
743: 
744:   const handleMouseMove = (e) => updateTorch(e.clientX, e.clientY)
745:   const handleTouchMove = (e) => {
746:     const touch = e.touches[0]
747:     if (touch) updateTorch(touch.clientX, touch.clientY)
748:   }
749:   const handleLeave = () => setTorch((prev) => ({ ...prev, active: false }))
750: 
751:   const titleOpacity = Math.max(0, 1 - progress * 2.8)
752:   const taglineOpacity = Math.max(0, 1 - progress * 2.5)
753:   const ringOpacity = Math.min(Math.max((progress - 0.12) * 2.2, 0), 1)
754:   const ringScale = 0.88 + ringOpacity * 0.12
755:   const cardsReveal = Math.min(Math.max((progress - 0.3) * 2, 0), 1)
756:   const topPillOpacity = Math.min(Math.max((progress - 0.45) * 2.5, 0), 1)
757:   const bottomTagOpacity = Math.min(Math.max((progress - 0.5) * 2.5, 0), 1)
758:   const scrollIndicatorOpacity = Math.max(0, 1 - progress * 5.2)
759: 
760:   const leftCards = FEATURE_CARDS.filter((c) => c.side === 'left')
761:   const rightCards = FEATURE_CARDS.filter((c) => c.side === 'right')
762: 
763:   return (
764:     <main className="bg-bg">
765:       <MemoHeader />
766: 
767:       <section ref={scrollRef} className="relative h-[220vh]">
768:         <div
769:           ref={heroRef}
770:           className="sticky top-0 h-screen w-full overflow-hidden"
771:           onMouseMove={handleMouseMove}
772:           onMouseLeave={handleLeave}
773:           onTouchStart={handleTouchMove}
774:           onTouchMove={handleTouchMove}
775:           onTouchEnd={handleLeave}
776:         >
777:           {/* Original Base Background */}
778:           <div className="absolute inset-0 z-0 bg-[#0a031d]" style={{ background: 'radial-gradient(circle at 50% 45%, #250954 0%, #12062f 45%, #0a031d 85%)' }} />
779:           
780: 
781: 
782:           <HeroBackgroundTitle opacity={titleOpacity} progress={progress} torch={torch} winSize={winSize} />
783: 
784:           {/* Top pill */}
785:           <div
786:             className="pointer-events-none absolute inset-x-0 top-[calc(10vh+20px)] z-[6] flex justify-center px-4"
787:             style={{
788:               opacity: topPillOpacity,
789:               transform: `translateY(${(1 - topPillOpacity) * -12}px)`,
790:             }}
791:           >
792:             <div className="pointer-events-auto border border-violet-500/15 bg-violet-950/45 px-6 py-2.5 backdrop-blur-md rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.4)] flex items-center justify-center">
793:               <p className="m-0 font-body text-[0.62rem] tracking-[0.32em] font-bold text-slate-300 uppercase flex items-center justify-center">
794:                 AI <span className="text-violet-400 font-bold px-1.5">•</span> AUTOMATION <span className="text-fuchsia-400 font-bold px-1.5">•</span> DEEP-TECH <span className="text-indigo-400 font-bold px-1.5">•</span> INNOVATION
795:               </p>
796:             </div>
797:           </div>
798: 
799: 
800: 
801:           {/* Network Globe Container */}
802:           <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] flex justify-center">
803:             <div 
804:               className="relative h-[min(92vh,820px)] w-full max-w-[min(92vw,450px)] flex justify-center"
805:               style={{ transform: `translateY(${progress * 14}vh)` }}
806:             >
807:               <NetworkGlobe progress={progress} />
808:             </div>
809:           </div>
810: 
811:           {/* Feature cards */}
812:           {leftCards.map((card, i) => (
813:             <HeroFeatureCard key={card.title} card={card} index={i} reveal={cardsReveal} />
814:           ))}
815:           {rightCards.map((card, i) => (
816:             <HeroFeatureCard key={card.title} card={card} index={i} reveal={cardsReveal} />
817:           ))}
818: 
819:           {/* SVG Connector Lines */}
820:           <svg className="pointer-events-none absolute inset-0 z-[24] h-full w-full hidden lg:block">
821:             <defs>
822:               <linearGradient id="line-grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
823:                 <stop offset="0%" stopColor="rgba(124,58,237,0.5)" />
824:                 <stop offset="40%" stopColor="rgba(168,85,247,0.3)" />
825:                 <stop offset="100%" stopColor="rgba(217,70,239,0.5)" />
826:               </linearGradient>
827:               <linearGradient id="line-grad-right" x1="100%" y1="0%" x2="0%" y2="0%">
828:                 <stop offset="0%" stopColor="rgba(124,58,237,0.5)" />
829:                 <stop offset="40%" stopColor="rgba(168,85,247,0.3)" />
830:                 <stop offset="100%" stopColor="rgba(217,70,239,0.5)" />
831:               </linearGradient>
832:             </defs>
833:             {getConnectorPaths(winSize.w, winSize.h, progress, cardsReveal).map((path, idx) => (
834:               <g
835:                 key={path.id}
836:                 style={{
837:                   opacity: path.reveal,
838:                   transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
839:                 }}
840:               >
841:                 <path d={path.d} stroke={`url(#line-grad-${path.isLeft ? 'left' : 'right'})`} strokeWidth="1.5" fill="none" />
842:                 <path
843:                   d={path.d}
844:                   stroke={path.isLeft ? '#7c3aed' : '#d946ef'}
845:                   strokeWidth="2.5"
846:                   fill="none"
847:                   className={path.isLeft ? 'connector-pulse-left' : 'connector-pulse-right'}
848:                   style={{ animationDelay: `${(idx % 3) * 0.8}s` }}
849:                 />
850:                 <circle cx={path.endX} cy={path.endY} r="3.5" fill={path.isLeft ? '#d946ef' : '#7c3aed'} className="connector-endpoint-pulse" />
851:               </g>
852:             ))}
853:           </svg>
854: 
855:           {/* Mobile cards grid */}
856:           <div className="pointer-events-none absolute inset-x-3 bottom-28 z-[25] grid grid-cols-2 gap-2.5 lg:hidden">
857:             {FEATURE_CARDS.map((card, idx) => {
858:               const stagger = idx * 0.08
859:               const mobileCardReveal = Math.min(Math.max((cardsReveal - stagger) * 2, 0), 1)
860:               return (
861:                 <div
862:                   key={card.title}
863:                   className="feature-card-inner px-3 py-2.5 transition-all duration-300"
864:                   style={{
865:                     opacity: mobileCardReveal,
866:                     transform: `translateY(${(1 - mobileCardReveal) * 12}px)`,
867:                   }}
868:                 >
869:                   <div className="flex items-center gap-2">
870:                     <div className="feature-card-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-violet-500/20 bg-violet-950/40 text-violet-400">
871:                       {card.icon}
872:                     </div>
873:                     <div className="min-w-0">
874:                       <p className="m-0 truncate font-display text-[0.55rem] font-bold tracking-wider text-slate-200">
875:                         {card.title}
876:                       </p>
877:                       <p className="m-0 mt-0.5 truncate font-body text-[0.48rem] text-slate-400">
878:                         {card.subtitle}
879:                       </p>
880:                     </div>
881:                   </div>
882:                 </div>
883:               )
884:             })}
885:           </div>
886: 
887:           <HeroTagline opacity={taglineOpacity} progress={progress} />
888: 
889:           {/* Bottom center tagline */}
890:           <div
891:             className="pointer-events-none absolute inset-x-0 bottom-10 z-[30] hidden text-center md:block"
892:             style={{
893:               opacity: bottomTagOpacity,
894:               transform: `translateY(${(1 - bottomTagOpacity) * 16}px)`,
895:             }}
896:           >
897:             <p className="m-0 font-display text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase md:text-base">
898:               Transforming Vision Into Intelligence
899:             </p>
900:           </div>
901: 
902:           {/* Scroll Indicator - Bottom Right */}
903:           <div
904:             className="pointer-events-none absolute bottom-9 right-[4%] xl:right-[6%] z-[30] hidden items-center gap-3 transition-all duration-200 lg:flex"
905:             style={{
906:               opacity: scrollIndicatorOpacity,
907:               transform: `translateY(${(1 - scrollIndicatorOpacity) * 12}px)`,
908:             }}
909:           >
910:             <span className="font-body text-[0.55rem] tracking-[0.25em] font-semibold text-slate-400 uppercase">
911:               Scroll to Explore
912:             </span>
913:             <div className="flex h-7 w-4.5 justify-center rounded-full border border-violet-500/20 bg-violet-950/40 p-[3px] shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
914:               <div className="scroll-dot-animated h-1.5 w-1 rounded-full bg-violet-400" />
915:             </div>
916:           </div>
917: 
918:           {/* Bottom right action button */}
919:           <a
920:             href="#about"
921:             className="group absolute bottom-9 right-[4%] xl:right-[6%] z-[30] hidden items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-2.5 font-display text-[0.65rem] font-bold tracking-widest text-white no-underline shadow-[0_4px_15px_rgba(124,58,237,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(124,58,237,0.4)] active:scale-[0.98] lg:flex"
922:             style={{
923:               opacity: cardsReveal,
924:               transform: `translateY(${(1 - cardsReveal) * 20}px)`,
925:               transition: 'opacity 0.4s ease, transform 0.4s ease',
926:             }}
927:           >
928:             {/* Hover overlay gradient */}
929:             <span className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
930:             <span className="relative z-10 flex items-center gap-2.5">
931:               EXPLORE INTELLIGENCE
932:               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-300 group-hover:translate-x-0.5">
933:                 <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" stroke="currentColor" strokeWidth="2.5">
934:                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
935:                 </svg>
936:               </span>
937:             </span>
938:           </a>
939: 
940:           {/* Overlays */}
941:           <div className="hero-scan pointer-events-none absolute right-0 left-0 z-20 h-32 bg-gradient-to-b from-transparent via-violet-400/6 to-transparent" aria-hidden="true" />
942:         </div>
943:       </section>
944: <MemoAboutSection />
945:       <MemoIntelligenceStack />
946:       <MemoHowWeWork />
947:       <MemoSimpleTextSection />
948:     </main>
949:   )
950: }
951: 
The above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.
