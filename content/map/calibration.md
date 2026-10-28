# Calibration du niveau de l'examen — FMA 41031 « Analyse complexe et calcul différentiel »

> **Usage de ce document.** Il sert UNIQUEMENT à calibrer la difficulté, la longueur et le style des
> exercices du site. Les sujets changent complètement d'une année sur l'autre : **aucun contenu des
> annales ne doit être repris** (voir § 4, liste des thèmes « À NE PAS RÉUTILISER tel quel »).
>
> Sources lues intégralement : `sources/poly/annexeA_sujets_examen.txt` (annexe A du poly, pages
> imprimées 179–238 : contrôles classants 2022, 2023, 2024 avec corrigés ; DM 2022, DM 2023, DM 1 et
> DM 2 2024-2025 avec corrigés) et les cinq feuilles de PC/TD (`sources/td/`).
>
> Échelle de difficulté du site : **1** = application directe, **2** = exercice standard,
> **3** = exercice de contrôle difficile, **4** = problème long.
> Numéros de chapitres : 01 Fonctions holomorphes · 02 Formule des résidus · 03 Suites, séries et
> produits · 04 Applications (conforme, harmonique) · 05 Calcul différentiel dans les E.V.N. ·
> 06 Inversion locale et fonctions implicites · 07 Équations différentielles · 08 Calcul des
> variations · 09 Sous-variétés. « AC » = analyse complexe (ch. 1–4), « CD » = calcul différentiel
> (ch. 5–9).

---------------------------------------------------------------------------------------------------

## 1. Format de l'examen (contrôles classants 2022, 2023, 2024)

### 1.1 Vue d'ensemble

| Contrôle | Date | Nb d'exercices | Nb total de questions (sous-questions comptées) | Exercices AC / CD / mixtes | Questions AC / CD / mixtes | Longueur de l'énoncé | Durée |
|---|---|---|---|---|---|---|---|
| 2022 (MAT431) | 14 nov. 2022 | **6** | **23** | 3 / 3 / 0 | 9 / 14 / 0 | ≈ 2 pages (p. 180–181) | non indiquée |
| 2023 (MAT431) | 17 nov. 2023 | **4** | **30** | 2 / 1 / 1 | 14 / 9 / 7 | ≈ 3,5 pages (p. 191–194) | non indiquée |
| 2024 (FMA_41031_EP) | 19 nov. 2024 | **5** | **20** | 3 / 2 / 0 | 9 / 11 / 0 | ≈ 2 pages (p. 212–213) | non indiquée |
| **Total** | | 15 | 73 | 8 / 6 / 1 | 32 / 34 / 7 | | |

Remarques :
* La durée n'est indiquée dans aucun des trois sujets. La somme de mes estimations de temps
  (§ 1.2–1.4) donne ≈ 2h20 (2022), ≈ 3h20 (2023), ≈ 2h30 (2024) pour un élève bien préparé : le
  format est celui d'un contrôle de 3 h (ou 4 h en 2023) où l'on ne traite pas forcément tout.
* L'équilibre AC / CD est à peu près **50 / 50** en nombre de questions sur les trois années (44 % AC,
  47 % CD, 10 % mixte). En nombre d'exercices l'AC domine légèrement (8 contre 6).
* Les énoncés sont **courts par question** mais les exercices longs (2023, 2024 ex. V) sont des
  « mini-démonstrations de théorèmes célèbres » guidées en 7–10 questions.
* Les sujets **rappellent dans l'énoncé** ce qui n'est pas dans le poly (automorphismes du disque,
  formule du changement de variables, développement de Laurent de ℘, définition d'application propre,
  d'intégrale première, de fonction elliptique…) : l'élève n'est jamais censé connaître un résultat hors
  cours, mais il doit savoir **utiliser immédiatement** un énoncé qu'il découvre.

### 1.2 Contrôle 2022 — 6 exercices, 23 questions

| Ex. | Thème (1 ligne) | Chapitres mobilisés | Questions | « cours » / « recherche » | Longueur énoncé | Difficulté | Temps estimé |
|---|---|---|---|---|---|---|---|
| 1 | $f$ continue sur $\bar D$, holomorphe sur $D$, $\lvert f\rvert$ constant sur le cercle ⇒ $f$ s'annule ou est constante | 01 (principe du maximum appliqué à $f$ et à $1/f$) | 1 | 0 / 1 | 3 lignes | **2** | 10 min |
| 2 | Méromorphe sur $D(0,R)$ avec un unique pôle simple $\xi_0$ sur le cercle unité : rayon de convergence, $g=f-\alpha/(z-\xi_0)$, $b_n\to0$, $a_{n+1}/a_n\to\xi_0^{-1}$ | 01 + 02 (séries entières, rayon via $\sup\{r : (b_nr^n) \text{ bornée}\}$, Laurent, résidu) | 4 | 1 / 3 | 8 lignes | **2** | 20 min |
| 3 | Primitives de $1/(1+z^2)$ : sur $\Omega=\mathbb C\setminus X$ étoilé, DSE, pas de primitive sur $\mathbb C\setminus\{\pm i\}$, primitive sur $\mathbb C\setminus[-i,i]$ | 01 + 02 (ouvert étoilé, primitive = intégrale sur segment, DSE d'arctan, résidus, homotopie de chemins) | 4 | 1 / 3 | 8 lignes | **3** | 25 min |
| 4 | Champ de vecteurs tangent au cercle unité : courbe intégrale explicite, reste sur le cercle, intervalle maximal $=\mathbb R$, périodicité si $r\ne0$ | 07 (Cauchy–Lipschitz, unicité, lemme des bouts, compacité) ; notation complexe de $\mathbb R^2$ | 4 | 1 / 3 | 15 lignes | **2** | 20 min |
| 5 | Rétraction $r\circ r=r$ de classe $C^1$ : $p=dr_0$ projecteur, $h=p+r-\mathrm{id}$ difféo local, $X=\mathrm{Im}\,r$ localement redressé sur un s.e.v. | 06 (différentielle d'une composée, inversion locale, soin sur les domaines) + 09 (sous-variété en germe) | 3 | 1 / 2 | 7 lignes | **3** | 25 min |
| 6 | Intégrales premières d'un champ ; fonctions implicites ; EDP du 1er ordre $\sum a_i\partial_i u=b$ par les courbes intégrales ; cas $a(u)\partial_1u+\partial_2u=0$ ; calcul explicite $u=(1-x_1)/(1-x_2)$ | 06 + 07 (fonctions implicites et $\partial u/\partial x_i$, Cauchy–Lipschitz, gradient, calcul explicite) — mélange de deux chapitres CD | 7 (dont 1 « (Cours) Rappeler… ») | 2 / 5 | 35 lignes | **4** (long, chaque étape standard) | 40 min |

### 1.3 Contrôle 2023 — 4 exercices, 30 questions

| Ex. | Thème (1 ligne) | Chapitres mobilisés | Questions | « cours » / « recherche » | Longueur énoncé | Difficulté | Temps estimé |
|---|---|---|---|---|---|---|---|
| 1 | $f$ entière avec $\lvert f(x+iy)\rvert\le e^{-x^2+ay^2}$ : $\hat f$ entière, $\lvert\hat f(i\eta)\rvert\le Ce^{\eta^2/4}$, estimation gaussienne en $\xi$ par intégration sur des rectangles, stabilité de la classe $H$ | 01 (holomorphie sous le signe intégrale, Thm I.9.1) + 02 (Cauchy sur un rectangle, passage à la limite, convergence dominée) | 4 | 1 / 3 | 18 lignes | **3** | 40 min |
| 2 | Fonctions elliptiques pour un réseau : choix d'un parallélogramme sans zéro ni pôle au bord, $\sum\mathrm{res}=0$, #zéros = #pôles $\ge2$, surjectivité ; zéros de $\wp'$ ; $\wp(z)=w$ a deux solutions mod $\Lambda$ | 02 (résidus, indice, principe de l'argument lemme II.8.1) + 03 (Liouville + périodicité, Laurent) + 01 (zéros isolés) | 10 (1a–f, 2, 3a–b, 4) | 1 / 9 | 45 lignes | **4** | 55 min |
| 3 | Point fixe de Brouwer pour $f\in C^1$ : $\varphi$ rétraction $C^1$ sur la sphère, $\det d\varphi=0$, $\varphi_t$ injective et difféo (inversion globale, série de Neumann), image ouverte-fermée ⇒ $=B^n$, $P(t)=\int\det d\varphi_t$ polynomiale et constante, contradiction | 05 + 06 (différentielle, $\lvert\lvert\lvert d\varphi\rvert\rvert\rvert$ et Lipschitz, inversion locale/globale, $\mathrm{id}-th$ inversible si $\lvert\lvert\lvert th\rvert\rvert\rvert<1$) + topologie (connexité, compacité) + changement de variables rappelé | 9 (1a–b, 2a–c, 3, 4, 5, 6) | 0 / 9 | 35 lignes | **4** | 55 min |
| 4 | EDO holomorphe $x'=f(x)$, $x(0)=0$ : solution réelle $C^\infty$ par Cauchy–Lipschitz, coefficients de $x^k$ et de $f\circ x$ (polynômes à coefficients positifs), unicité formelle, séries majorantes, stratégie d'existence (méthode des majorantes) | 07 (Cauchy–Lipschitz) + 01/03 (séries entières, produit de Cauchy, estimations de Cauchy, interversion de sommes) — **vrai mélange AC / CD** | 7 (1, 2a–b, 3, 4, 5, 6) | 1 / 6 | 45 lignes | **4** | 50 min |

### 1.4 Contrôle 2024 — 5 exercices, 20 questions

| Ex. | Thème (1 ligne) | Chapitres mobilisés | Questions | « cours » / « recherche » | Longueur énoncé | Difficulté | Temps estimé |
|---|---|---|---|---|---|---|---|
| I | $f(z)=e^{iz}/(1+z+z^2)$ : méromorphie, pôles $j,\bar j$, résidus ; $\int_{-\infty}^{+\infty}\cos t/(1+t+t^2)\,dt$ | 02 (résidus en pôle simple, demi-cercle, $\lvert e^{iz}\rvert\le1$ sur le demi-plan supérieur) | 2 | 2 / 0 | 4 lignes | **1** | 15 min |
| II | $\varphi_\omega(z)=(z-\omega)/(1-\bar\omega z)$ : $\varphi_\omega(D)\subset D$ ; produit de Blaschke $F=\prod F_n$ avec $\sum(1-\lvert y_n\rvert)<\infty$ : convergence, zéros, $F(D)\subset D$ | 01 (principe du maximum, deux fois) + 03 (produit infini de fonctions holomorphes : critère $\sum\lvert F_n-1\rvert$ normalement convergent, zéros du produit) | 4 | 1 / 3 | 12 lignes | **3** | 30 min |
| III | Suite d'automorphismes $f_n$ d'un ouvert connexe borné avec $f_n(a)\to b\in\partial\Omega$ : sous-suite → constante $b$ (Montel + Hurwitz), image d'un lacet dans $D(b,\epsilon)$, sous (H) $\Omega$ simplement connexe et biholomorphe à $D$ | 03 (Montel, Hurwitz, argument « toute sous-suite a une sous-suite ») + 04 (représentation conforme de Riemann) + 02 (homotopie, simple connexité) | 3 | 0 / 3 | 14 lignes | **3** | 30 min |
| IV | $\cos(tx)+\sin(tx)=x$ pour $\lvert t\rvert<\sqrt2/2$ : unique solution $\varphi(t)$, $\varphi$ est $C^\infty$, DL à l'ordre 2 ($1+t+t^2/2$) | 05 (point fixe contractant, $\lvert u'\rvert\le\lvert t\rvert\sqrt2<1$) + 06 (fonctions implicites, $\partial_xF\ne0$, dérivation implicite) | 2 | 1 / 1 | 4 lignes | **2** | 15 min |
| V | $f\in C^2(\mathbb R^n,\mathbb R^n)$ : (propre et $df_x$ inversible) ⟺ ($C^2$-difféo). Surjectivité (ouvert-fermé), fibres finies, EDO $x'=-(df_x)^{-1}(f(x)-f(z))$, $F=\lVert f(x(t))-f(z)\rVert^2$ vérifie $F'=-2F$, lemme des bouts, bassins $A_i$ ouverts (dépendance continue), connexité ⇒ $m=1$ | 06 (inversion locale, difféo global) + 07 (Cauchy–Lipschitz, solution maximale, lemme des bouts, dépendance continue en la condition initiale, unicité ⇒ translation en temps) + topologie (propre, compacité, connexité) | 9 | 1 / 8 | 40 lignes | **4** | 60 min |

### 1.5 Part « cours » / « recherche » (synthèse)

Question « cours » = restitution ou application immédiate d'un énoncé du poly (ex. : « (Cours) Rappeler
la condition… », « rayon de convergence ? », « justifier que $f$ est méromorphe et calculer ses
résidus », « $(B)\Rightarrow(A)$ »). Question « recherche » = il faut trouver une fonction auxiliaire,
un contour, une majoration, ou assembler plusieurs résultats.

| Contrôle | Questions « cours » | Questions « recherche » | Part « recherche » |
|---|---|---|---|
| 2022 | ≈ 6 / 23 | ≈ 17 / 23 | ≈ 75 % |
| 2023 | ≈ 3 / 30 | ≈ 27 / 30 | ≈ 90 % |
| 2024 | ≈ 5 / 20 | ≈ 15 / 20 | ≈ 75 % |

**L'examen est à 75–90 % de la recherche guidée.** Les rares questions de cours servent de
« mise en route » (première question d'un exercice) ou de rappel d'un énoncé qu'on va utiliser dans la
question suivante.

---------------------------------------------------------------------------------------------------

## 2. Ce qui est typique du style

### 2.1 Formulation des questions

* Verbes dominants : **« Montrer que »** (≈ 60 % des questions), « En déduire », « Prouver qu'il existe
  $C>0$ tel que », « Justifier que », « Calculer », « Déterminer », « Conclure », « Vérifier que ».
  Quelques « Quel est… ? » et une question ouverte unique : « Imaginer une stratégie pour montrer
  l'existence… » (2023, ex. 4 q. 6).
* **Indications fréquentes** dans l'énoncé : « Indication : on pourra supposer $\xi>0$ et prendre
  $\lambda=\varepsilon\xi$ », « on cherchera à résoudre l'équation polynomiale de degré 2 en $t$ »,
  « considérer la fonction $f'/f$ », « on pourra montrer que $f(\mathbb R^n)$ est ouvert et fermé »,
  « on pourra chercher une équation différentielle simple satisfaite par $F$ », « faire un dessin ».
  L'indication donne **l'objet auxiliaire** (fonction, contour, équation), jamais la justification.
* **Rappels en préambule** de tout ce qui dépasse le poly (formule du changement de variables,
  automorphismes du disque, Laurent de $\wp$, définitions ad hoc : propre, elliptique, intégrale
  première). Le sujet définit ses propres notations ($Q_{z_0}$, $\Delta_x$, $\varphi_t$, $S_z$, $A_i$…)
  et l'élève doit s'en servir.
* Les énoncés précisent souvent le **sens d'orientation** et la **forme exacte du contour** (rectangle de
  sommets donnés, demi-cercle, parallélogramme) ; c'est à l'élève de calculer l'indice.

### 2.2 Progressivité à l'intérieur d'un exercice

Structure récurrente d'un exercice long (2022 ex. 6, 2023 ex. 1–4, 2024 ex. V) :
1. **Question d'amorce** facile (vérifier une hypothèse, un calcul direct, un rappel) — 1 à 2 questions.
2. **Lemmes intermédiaires** indépendants (une estimation, un résultat de topologie, une identité).
3. **Assemblage** : « En déduire que… », « Conclure ». La dernière question combine 2–4 des précédentes.
4. Variante : **plusieurs parties** quasi indépendantes qu'on assemble à la fin (DM 2022 A/B/C/D ; 2023
   ex. 2 : partie générale puis application à $\wp$).

Les exercices courts (2022 ex. 1, 2024 ex. I et IV) tiennent en 1–2 questions et testent le **choix
du bon outil** sans aucun guidage : c'est exactement le format du mode « Problème inconnu ».

### 2.3 Degré de rédaction attendu (d'après les corrigés)

Les corrigés sont **concis mais complets** : 5 à 15 lignes par question, calculs explicites, pas de
« il est clair que » sur un point délicat. Ils citent le poly par numéro (« proposition II.4.5 »,
« théorème III.1.4 », « théorème I.9.1 », « lemme II.8.1 », « théorème III.5.1 », « proposition II.9.3 »,
« exercice II.9.4 »). Ce que le corrigé fait **systématiquement** :

* nomme le théorème utilisé et vérifie **chaque hypothèse** avant de l'appliquer ;
* explicite les **constantes** ($\varepsilon=1/(2a)$, $\alpha=1/(1+M)$, $\rho_0=R(1-1/\sqrt2)$) ;
* calcule les **résidus** à la main (limite $(z-j)f(z)$, décomposition en éléments simples, Laurent) ;
* **majore les intégrales sur les arcs** par longueur × sup, avec la raison du sup ($\lvert e^{iRe^{it}}\rvert
  = e^{-R\sin t}\le1$ sur $[0,\pi]$ ; $\lvert e^{2i\pi z}-1\rvert\ge1$ sur les côtés verticaux) ;
* distingue **sous-suite / suite entière**, **restriction / fonction globale** ($h^{-1}$ est l'inverse de
  la restriction de $h$ à $U$ : « c'est là qu'il faut prendre garde ») ;
* conclut les raisonnements topologiques en toutes lettres (« ouvert et fermé du connexe $B^n$, non vide,
  donc $=B^n$ »).

### 2.4 Vérifications d'hypothèses faites explicitement dans les corrigés

| Outil | Hypothèse vérifiée explicitement | Où |
|---|---|---|
| Principe du maximum | $f$ continue sur $\bar D$, holomorphe sur $D$ ; **compacité du cercle** pour que le sup soit atteint ; $1/f$ holomorphe car $f$ ne s'annule pas ; **connexité** pour passer de $\lvert f\rvert$ constant à $f$ constant | 2022 ex. 1 ; 2024 ex. II ; DM 2022 A2 |
| Formule des résidus | Le lacet est dans l'ouvert, **indice de chaque pôle** ($\mathrm{Ind}_j(\gamma_R)=1$, $\mathrm{Ind}_{\bar j}=0$), orientation (« négativement orienté », « quitte à échanger $\omega_1,\omega_2$ ») ; **aucun pôle sur le contour** (choix de $z_0$ via un ensemble fini $S$) | 2024 ex. I ; 2023 ex. 1 et 2 ; DM 2023 A3 |
| Holomorphie sous le signe intégrale | Majorant $L^1$ **indépendant du paramètre** sur une bande $\lvert\Im z\rvert<M$, puis $M$ arbitraire | 2023 ex. 1 q. 1 ; DM 2023 C6 |
| Passage à la limite dans une intégrale | Convergence dominée nommée ; intégrabilité justifiée ($\lvert e^{2i\pi(t-i\varepsilon)}-1\rvert\ge c>0$ par périodicité) ; Fubini/Tonelli pour intervertir somme et intégrale | 2023 ex. 1 ; DM 2023 A5, C4 |
| Séries entières / Laurent | Rayon via la caractérisation $\sup\{r:(b_nr^n)\text{ bornée}\}$ ; interversion de doubles sommes justifiée par **convergence absolue** avec estimations de Cauchy $\lvert f_k\rvert\le M/r^k$ | 2022 ex. 2 ; 2023 ex. 4 q. 3 |
| Montel / Hurwitz | Famille **uniformément bornée** (valeurs dans $\Omega$ borné) ; les $f_n-b$ **ne s'annulent pas** et la limite s'annule ⇒ limite constante | 2024 ex. III |
| Produits infinis | $\sum\lvert F_n-1\rvert$ **normalement convergente sur tout compact** (passer par $K\subset D(0,r)$) ; zéros = réunion des zéros des facteurs avec multiplicité | 2024 ex. II ; DM 2024 1.3a |
| Cauchy–Lipschitz | Champ **$C^1$** (ou localement lipschitzien) ; **unicité** utilisée pour identifier deux solutions ($\alpha$ et $\beta=e^{i\theta}$ ; $x$ et $h$ ; $x(\cdot+T)$ et $x$) | 2022 ex. 4 ; 2023 ex. 4 q. 1 ; 2024 ex. V q. 6–7 |
| Lemme des bouts | Solution **bornée** (reste dans un compact : cercle, $f^{-1}(\bar B)$ compact par propreté) ⇒ définie sur $\mathbb R$ ou $[0,+\infty[$ | 2022 ex. 4 q. 3 ; 2024 ex. V q. 4 |
| Dépendance continue en la condition initiale | Citée pour montrer qu'un bassin d'attraction est **ouvert** | 2024 ex. V q. 8 |
| Inversion locale | $dh_0$ **inversible** : par noyau nul en dimension finie (« 2 n'est pas valeur propre d'un projecteur »), ou par **série de Neumann** ($\lvert\lvert\lvert th\rvert\rvert\rvert<1$) ; ouverts $U,W$ nommés ; **restriction** des domaines ($V_0=U\cap(p\circ h)^{-1}(W)\cap r^{-1}(U)$) | 2022 ex. 5 ; 2023 ex. 3 ; 2024 ex. V q. 3, 6 |
| Inversion globale | **Injectivité** + différentielle inversible partout ⇒ difféo sur l'image | 2023 ex. 3 q. 2c |
| Fonctions implicites | $\partial F/\partial z\ne0$ **au point considéré** ($=1$ en $(x_1,0,f(x_1))$ ; $\le\lvert t\rvert\sqrt2-1<0$) ; régularité de $F$ ($C^\infty$) | 2022 ex. 6 ; 2024 ex. IV |
| Point fixe contractant | Constante **strictement** $<1$ et uniforme ; espace **complet** ; stabilité de la boule fermée | 2024 ex. IV ; DM 2024-2 3a |
| Accroissements finis | $\lVert\varphi(x)-\varphi(y)\rVert\le\sup\lvert\lvert\lvert d\varphi\rvert\rvert\rvert\,\lVert x-y\rVert$ (convexité implicite de la boule) | 2023 ex. 3 q. 2a ; DM 2024-2 3c |
| Arguments topologiques | Compact + discret ⇒ fini ; ouvert et fermé d'un connexe non vide ⇒ tout ; partition d'un connexe en ouverts disjoints ; extraction dans un compact | 2023 ex. 3 ; 2024 ex. V q. 2, 3, 9 ; DM 2022 B |

### 2.5 Outils du cours qui reviennent le plus (en termes de théorèmes)

Comptage sur les 15 exercices de contrôle (un outil peut servir plusieurs fois dans un exercice) :

| Outil (théorème du poly) | Chapitre | Occurrences (exercices) |
|---|---|---|
| Théorème de **Cauchy–Lipschitz** (existence, unicité, solution maximale) | 07 | 5 (2022-4, 2022-6, 2023-4, 2024-V + usage implicite 2022-6 q.1) |
| Formule des **résidus** / formule de Cauchy sur un lacet, calcul d'indice | 02 | 5 (2022-3, 2023-1, 2023-2, 2024-I, DM) |
| Théorème d'**inversion locale** (et globale) | 06 | 4 (2022-5, 2023-3, 2024-V, 2024-IV via implicites) |
| **Principe du maximum** | 01 | 3 (2022-1, 2024-II ×2, DM 2022) |
| Développement en **série entière / de Laurent**, rayon de convergence, estimations de Cauchy | 01–02 | 4 (2022-2, 2022-3, 2023-2, 2023-4) |
| **Lemme des bouts** (explosion en temps fini) | 07 | 2 (2022-4, 2024-V) |
| Théorème des **fonctions implicites** | 06 | 2 (2022-6, 2024-IV) |
| **Zéros isolés** / prolongement analytique | 01 | 2 (2023-2, DM 2022) + DM 2023 D4 |
| **Principe de l'argument** (lemme II.8.1) | 02 | 1 (2023-2) + DM 2024-1 |
| **Liouville** | 01 | 1 (2023-2) + DM 2024-1 (×2) |
| **Holomorphie sous le signe intégrale** (Thm I.9.1) | 01 | 1 (2023-1) + DM 2023 |
| Primitive sur un ouvert **étoilé**, homotopie de chemins | 01–02 | 1 (2022-3) + 2024-III |
| **Produits infinis** de fonctions holomorphes (Thm III.5.1) | 03 | 1 (2024-II) + DM 2023, DM 2024-1 |
| **Montel** + **Hurwitz** | 03 | 1 (2024-III) + DM 2024-1 ex. 2 |
| Théorème de **représentation conforme** de Riemann | 04 | 1 (2024-III) |
| **Point fixe** de Picard (contraction) | 05 | 1 (2024-IV) + DM 2024-2 |
| **Accroissements finis** / $\lvert\lvert\lvert df\rvert\rvert\rvert$ et constante de Lipschitz | 05 | 1 (2023-3) + DM 2024-2 |
| Différentielle d'une **composée**, d'une application bilinéaire, du déterminant | 05 | 2 (2022-5, 2023-3) |
| Dépendance **continue** en la condition initiale (flot) | 07 | 1 (2024-V) |

Jamais interrogés directement en contrôle sur 2022–2024 : calcul des variations (ch. 08), sous-variétés
en tant que telles (ch. 09, seulement effleuré en 2022-5), fonctions harmoniques (ch. 04), Rouché, lemme
de Schwarz, transformée conforme explicite. Ils apparaissent en TD (§ 5) : **le site ne doit pas les
négliger**, les sujets changeant chaque année.

---------------------------------------------------------------------------------------------------

## 3. Guide de calibration pour les rédacteurs d'exercices du site

### 3.1 Correspondance difficulté 1–4 ↔ contrôle

| Niveau | Ce que c'est en contrôle | Exemples d'annales (référence de niveau, pas de contenu) | Nb de questions cible | Longueur de l'énoncé | Temps (chronomètre du site) | Outils |
|---|---|---|---|---|---|---|
| **1** — application directe | Première question d'un exercice, ou exercice « échauffement » : un théorème, un calcul, aucune astuce | 2024 ex. I (intégrale par résidus) ; 2024 ex. IV q. 1 ; 2022 ex. 2 q. 1 | 1 à 3 | 2 à 6 lignes | 10–15 min | 1 théorème, hypothèses à vérifier explicitement |
| **2** — standard | Exercice court avec **une astuce** (fonction auxiliaire $1/f$, $f-\alpha/(z-\xi_0)$, paramétrage $e^{i\theta(t)}$, point fixe) ; ou exercice guidé en 3–4 questions | 2022 ex. 1, 2, 4 ; 2024 ex. IV | 2 à 5 | 5 à 15 lignes | 15–25 min | 2–3 résultats du cours, un argument de compacité ou de connexité |
| **3** — contrôle difficile | Exercice de synthèse en 3–7 questions mêlant **deux chapitres**, avec une construction non évidente (contour adapté, redressement, produit infini à contrôler) ou un argument topologique délicat | 2022 ex. 3, 5 ; 2023 ex. 1 ; 2024 ex. II, III | 3 à 7 | 10 à 25 lignes | 25–40 min | 3–4 résultats, dont un « lourd » (inversion locale, Montel, holomorphie sous l'intégrale…) |
| **4** — problème long | Démonstration guidée d'un **théorème nommé** ou d'un résultat structurel ; 7–10 questions ; parties ; les dernières questions assemblent tout | 2022 ex. 6 ; 2023 ex. 2, 3, 4 ; 2024 ex. V ; tous les DM | 7 à 10 (sous-questions a, b, c comptées) | 30 à 60 lignes, préambule de définitions/rappels | 45–60 min (DM : 2–4 h, hors chronomètre) | 4 à 6 résultats de 2–3 chapitres ; définitions ad hoc introduites dans l'énoncé |

Règles de calibration déduites des annales :
* Un exercice de niveau $\ge3$ a toujours **au moins une question d'amorce** de niveau 1 (vérification
  d'hypothèse, calcul).
* Les constantes doivent être **explicites et vérifiables** (le corrigé donne la valeur).
* Un énoncé de niveau 4 **rappelle** tout ce qui n'est pas dans le poly et **définit ses notations**.
* Les indications sont admises (« on pourra… ») et donnent l'objet auxiliaire, pas l'argument. Sur le
  site, elles vont dans « Indices », pas dans l'énoncé, sauf pour les niveaux 4 où une indication dans
  l'énoncé est fidèle au style du contrôle.

### 3.2 Répartition cible pour le mode « Problème inconnu »

| Catégorie | Part observée en contrôle (15 exercices, 73 questions) | Part recommandée sur le site |
|---|---|---|
| Exercices purement AC (ch. 1–4) | 8 / 15 exercices | ≈ 40 % |
| Exercices purement CD (ch. 5–9) | 6 / 15 exercices | ≈ 40 % |
| Exercices mélangeant **AC et CD** | 1 / 15 exercices (2023 ex. 4), ≈ 10 % des questions | **≈ 20 %** (l'élève le demande explicitement et le contrôle 2023 montre que c'est posé ; le niveau 4 s'y prête) |
| Exercices mélangeant **plusieurs chapitres du même côté** | ≈ 10 / 15 (quasi systématique dès le niveau 3) | ≥ 60 % des niveaux 3–4 |
| Répartition par niveau (par exercice de contrôle) | niveau 1 : 1 ; niveau 2 : 4 ; niveau 3 : 5 ; niveau 4 : 5 | tirage : 15 % niveau 1, 30 % niveau 2, 35 % niveau 3, 20 % niveau 4 |

Les mélanges AC / CD **naturels** (à privilégier) : EDO à coefficients holomorphes ou à inconnue
holomorphe ; champs de vecteurs plans vus dans $\mathbb C$ ; fonctions implicites / inversion locale
appliquées à des fonctions de variable complexe vues comme applications de $\mathbb R^2$ (lien
$df$ réel ↔ $f'$ complexe, jacobien $=\lvert f'\rvert^2$) ; point fixe de Picard pour construire une
fonction holomorphe ; différentiabilité d'applications définies par des intégrales de contour ou des
séries ; flots et conjugaison vs dynamique holomorphe (lien avec TD2 ex. 15–18) ; calcul des
variations avec Lagrangien issu d'une fonction harmonique / conforme.

### 3.3 Types d'énoncés à privilégier pour apprendre à « attaquer un problème jamais vu »

D'après la forme réelle du contrôle, dans cet ordre de priorité :

1. **« Montrer que » sec, 1–2 questions, sans chapitre ni outil indiqué** (type 2022 ex. 1, 2024 ex. IV) :
   c'est le cœur du mode « Problème inconnu ». L'indice 1 du site doit être « quel type d'outil ? », car
   c'est précisément ce que le contrôle ne dit pas.
2. **Calcul guidé avec contour ou construction imposée** (type 2024 ex. I, 2023 ex. 1 q. 3) : l'élève
   doit exécuter proprement (indice, majoration des arcs, passage à la limite). Insister sur la rédaction
   des vérifications du § 2.4.
3. **Mini-théorème en 5–10 questions** (type 2023 ex. 2–4, 2024 ex. V) : la compétence testée est de
   comprendre une **définition nouvelle** (propre, elliptique, pseudo-orbite…) et de la manipuler
   immédiatement. Le site doit proposer des problèmes avec définitions ad hoc **inédites** (pas celles
   des annales).
4. **Énoncés ouverts** (rares en contrôle : « Imaginer une stratégie », « faire un dessin », « Quel est
   l'intervalle maximal ? », « Déterminer si… ») : utiles en entraînement pour forcer le choix de l'outil,
   à doser (≈ 10 % des questions).
5. **Questions « piège d'hypothèse »** : l'énoncé omet volontairement une hypothèse (connexité, bornitude,
   pôle sur le contour) et demande si la conclusion tient — présent indirectement dans les corrigés
   (« si $m$ est nul la conclusion est évidente », « $\ne0$ car pôle simple »). À développer sur le site.

Ce que le contrôle **ne** fait **pas** et que le site peut donc limiter : QCM, questions de pure
restitution d'énoncé (réservées aux flashcards), exercices calculatoires longs sans idée.

### 3.4 Format du corrigé attendu (niveau contrôle)

* Chaque application d'un théorème : nom + `[[id]]` + hypothèses vérifiées en une phrase chacune.
* Constantes et contours explicites ; indices calculés ; sup atteints par compacité dits.
* 5–15 lignes par question ; les calculs refaits (résidus, DL, dérivées implicites).
* Les « Pièges et variantes » doivent reprendre les points du § 2.4 pertinents (c'est là que les
  copies perdent des points : pôle sur le contour, sous-suite vs suite, restriction de $h^{-1}$, constante
  de contraction non uniforme, connexité oubliée).

---------------------------------------------------------------------------------------------------

## 4. Thèmes déjà pris par les annales — « À NE PAS RÉUTILISER tel quel »

Les rédacteurs peuvent s'en **éloigner franchement** (autre fonction, autre conclusion, autre
mécanisme) mais ne doivent **pas** reprendre ces énoncés, même reformulés.

### Contrôle 2022
* **2022-1** — À NE PAS RÉUTILISER tel quel : $\lvert f\rvert$ constant sur $C(0,1)$ ⇒ $f$ s'annule dans $D$ ou $f$ constante (principe du maximum sur $f$ et $1/f$).
* **2022-2** — À NE PAS RÉUTILISER tel quel : méromorphe avec un unique pôle simple sur le cercle de convergence ; $a_{n+1}/a_n\to\xi_0^{-1}$.
* **2022-3** — À NE PAS RÉUTILISER tel quel : primitives de $1/(1+z^2)$ sur $\mathbb C\setminus X$, $\mathbb C\setminus\{\pm i\}$, $\mathbb C\setminus[-i,i]$ ; DSE d'arctan.
* **2022-4** — À NE PAS RÉUTILISER tel quel : champ $(-y+x(x^2+y^2-1),\,x+y(x^2+y^2-1))$ puis champ tangent au cercle unité $X(e^{i\theta})=r(\theta)ie^{i\theta}$ ; périodicité.
* **2022-5** — À NE PAS RÉUTILISER tel quel : rétraction $r\circ r=r$, $p=dr_0$, $h=p+r-\mathrm{id}$, image localement redressée.
* **2022-6** — À NE PAS RÉUTILISER tel quel : intégrales premières $\langle\nabla F,X\rangle=0$ et résolution de $\sum a_i(x,u)\partial_iu=b$ ; cas $a(u)\partial_1u+\partial_2u=0$ avec $u=(1-x_1)/(1-x_2)$.

### Contrôle 2023
* **2023-1** — À NE PAS RÉUTILISER tel quel : transformée de Fourier $\hat f(z)=\int f(x)e^{-ixz}dx$ d'une entière à décroissance $e^{-x^2+ay^2}$ ; rectangles $\{-M,M,M-i\lambda,-M-i\lambda\}$ ; classe $H$ stable.
* **2023-2** — À NE PAS RÉUTILISER tel quel : fonctions elliptiques — $\sum\mathrm{res}=0$, #zéros = #pôles $\ge2$, surjectivité, zéros de $\wp'$ en $\omega_1/2,\omega_2/2,(\omega_1+\omega_2)/2$, $\wp(z)=w$.
* **2023-3** — À NE PAS RÉUTILISER tel quel : Brouwer $C^1$ via $\varphi$ (demi-droite $\Delta_x$), $\varphi_t=(1-t)x+t\varphi(x)$, $P(t)=\int_{B^n}\det d\varphi_t$ polynomiale.
* **2023-4** — À NE PAS RÉUTILISER tel quel : EDO holomorphe $x'=f(x)$, $x(0)=0$ ; polynômes $P_{k,n}$, $Q_n$, $R_n$ à coefficients positifs ; séries majorantes $f\ll g$ avec $g=a/(1-bz)$.

### Contrôle 2024
* **2024-I** — À NE PAS RÉUTILISER tel quel : $\int_{-\infty}^{+\infty}\cos t/(1+t+t^2)\,dt$ par $e^{iz}/(1+z+z^2)$ et demi-cercle.
* **2024-II** — À NE PAS RÉUTILISER tel quel : $\varphi_\omega(D)\subset D$ ; produit de Blaschke $F_n=-\frac{\lvert y_n\rvert}{y_n}\varphi_{y_n}$ avec $\sum(1-\lvert y_n\rvert)<\infty$ ; $F(D)\subset D$.
* **2024-III** — À NE PAS RÉUTILISER tel quel : suite d'automorphismes $f_n(a)\to b\in\partial\Omega$ ⇒ (sous (H)) $\Omega$ simplement connexe et biholomorphe à $D$ (= TD2 ex. 19).
* **2024-IV** — À NE PAS RÉUTILISER tel quel : $\cos(tx)+\sin(tx)=x$, unicité par contraction, $\varphi\in C^\infty$, DL $1+t+t^2/2$.
* **2024-V** — À NE PAS RÉUTILISER tel quel : (propre + $df_x$ inversible) ⟺ difféo de $\mathbb R^n$ ; EDO $x'=-(df_x)^{-1}(f(x)-f(z))$, $F'=-2F$, bassins $A_i$, connexité ⇒ injectivité.

### DM (annexe A)
* **DM 2022** — À NE PAS RÉUTILISER tel quel : théorème de l'application ouverte par l'absurde avec $g_n=1/(f-\alpha_n)$ (= TD1 ex. 13) ; lemme topologique $D(f(a),m)\subset f(\Omega)$ ; sous $\lvert f'\rvert\le2\lvert f'(0)\rvert$, $f(D(0,R))\supset D(f(0),(3-2\sqrt2)R\lvert f'(0)\rvert)$ ; via $\mu_{\alpha,\lambda}$, $f(D)$ contient un disque de rayon $(\tfrac32\sqrt2-2)\lvert f'(0)\rvert$ (type Bloch–Landau).
* **DM 2023** — À NE PAS RÉUTILISER tel quel : formule sommatoire de Poisson par résidus de $f(z)/(e^{2i\pi z}-1)$ sur des rectangles ; $\theta(t)=t^{-1/2}\theta(1/t)$ ; $\zeta$, $L(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$, prolongement méromorphe, $L(s)=L(1-s)$ ; produit eulérien ; infinité des premiers ; zéros triviaux $-2\mathbb N^*$.
* **DM 1 2024-2025, ex. 1** — À NE PAS RÉUTILISER tel quel : fonctions elliptiques (reprise de 2023-2) + $\sum m(z)z\in\Lambda$ via $zf'/f$ ; loi d'addition de $\wp$ par le déterminant $3\times3$ et la cubique $Y^2=4X^3-60E_4X-140E_6$ ; fonction $\theta$ de Weierstrass (produit $\prod(1-z/\lambda)e^{z/\lambda+z^2/2\lambda^2}$), $\theta(z+\lambda)=\theta(z)e^{\alpha_\lambda z+\beta_\lambda}$, construction d'elliptiques à zéros/pôles prescrits ; $E(\Lambda)=\{R(\wp)+\wp'S(\wp)\}$.
* **DM 1 2024-2025, ex. 2** — À NE PAS RÉUTILISER tel quel : convergence localement uniforme de méromorphes à valeurs dans $\mathbb C\cup\{\infty\}$ ; $\sigma$-dérivée (dérivée sphérique) $\lvert f'\rvert/(1+\lvert f\rvert^2)$ ; critère de Marty admis ; lemme de Zalcman ($g_k(z)=f_k(z_k+\rho_kz)$, $M_k=\sup f_k^\sigma(z)(1-\lvert z\rvert)$) ; théorème de Montel « trois valeurs omises » via racines $2^n$-ièmes.
* **DM 2 2024-2025** — À NE PAS RÉUTILISER tel quel : ensembles hyperboliques d'un difféo de $\mathbb R^n$ ($E_x^\pm$, $\theta$) ; continuité des projecteurs $P_x^\pm$ par graphe fermé ; normes adaptées $N_x$ ; $\varepsilon$-pseudo-orbites et $\delta$-filatures (shadowing lemma) par point fixe dans $\ell^\infty(\mathbb Z,\mathbb R^n)$, $\Theta=\mathrm{Id}-\Psi$ inversible ; points récurrents adhérents aux périodiques.

### Recoupements TD ↔ annales (à connaître pour ne pas « redécouvrir » un énoncé déjà pris)
* TD1 ex. 13 = DM 2022 partie A (application ouverte).
* TD1 ex. 11–12 (automorphismes de $D$) = 2024-II q. 1 et DM 2022 partie D (rappel).
* TD2 ex. 12 ($\wp$) = rappels de 2023-2 et DM 1 2024-2025.
* TD2 ex. 19 = 2024-III (mot pour mot, avec bord $C^1$ au lieu de (H)).
* TD2 ex. 1 q. 8 (Casorati–Weierstrass) et ex. 2 (automorphismes de $\mathbb C$) : thèmes voisins du DM 1 2024-2025 ex. 2 (Picard évoqué).
* TD CD ex. 12 = Lemme_de_Morse ex. 2 (théorème du rang constant), énoncé identique.
* TD EDO ex. 11 (intégrales premières, $\nabla f\perp X$) = 2022-6 q. 1 (même énoncé).

---------------------------------------------------------------------------------------------------

## 5. Catalogue des exercices de PC/TD

Citer comme source : `"PC — <fichier> ex. N"` (par ex. `"PC — TD1 Analyse complexe ex. 9"`). Les
rédacteurs qui s'en inspirent **doivent le dire** dans le champ `source`.

### 5.1 `TD1_ANA_COMP_2023__1_.txt` — « Exercices d'analyse complexe » (16 exercices, ch. 01–02)

| N° | Titre / thème | Chap. | Diff. | Une phrase |
|---|---|---|---|---|
| 1 | Conditions de Cauchy–Riemann | 01 | 1 | Holomorphe à valeurs réelles sur un connexe ⇒ constante ; retrouver $f$ de partie réelle $2xy$, $e^x\cos y$, $\sin(x+y)\cosh(x-y)$. |
| 2 | Holomorphe / analytique, prolongements | 01 | 1 | Prolonger $(e^z-1)/z$ et $\sin(\pi z)/(z^2-1)$ en entières ; $\tan$ ne se prolonge pas ; rayons de convergence en 0. |
| 3 | Estimées de Cauchy et applications | 01 | 2 | Liouville via $f^{(k)}(0)=0$ ; d'Alembert–Gauss ; image d'une entière non constante dense ; croissance $a+b\lvert z\rvert^m$ ⇒ polynôme de degré $\le m$. |
| 4 | Formule de la moyenne (sur le disque) | 01 | 2 | $f(z_0)=\frac1{\pi r^2}\iint_{D}f$ ; nouvelle preuve de Liouville. |
| 5 | Théorème de Morera | 01 | 2 | Intégrales nulles sur les triangles ⇒ primitive locale $F$ dérivable ⇒ $f$ holomorphe ; réciproque. |
| 6 | Théorème de Goursat | 01 | 2 | Dérivable au sens complexe (sans continuité de $f'$) ⇒ holomorphe, via Morera. |
| 7 | Zéros isolés, prolongement analytique | 01 | 2 | $fg=0$ sur $D$ ⇒ $f=0$ ou $g=0$ ; version « nul sur le bord » pour $f,g$ continues sur $\bar D$. |
| 8 | Principe du maximum pour un polynôme | 01 | 2 | $M(R)/R^d\le M(r)/r^d$ pour $0<r\le R$ (appliquer le maximum à $P(z)/z^d$ ou à $z^dP(1/z)$). |
| 9 | Théorème des trois cercles (Hadamard) | 01 | 3 | $\rho^pM(\rho)^q\le\max(\cdot)$ puis $\log M$ convexe en $\log\rho$ : $M(r^tR^{1-t})\le M(r)^tM(R)^{1-t}$. |
| 10 | Lemme de Schwarz | 01 | 2 | $\lvert f(z)\rvert\le\lvert z\rvert$, cas d'égalité, automorphismes fixant 0 sont des rotations, $\lvert f(z)\rvert<\lvert z\rvert$ si non bijective. |
| 11 | Automorphismes de $D$ | 01 | 2 | $f_a(z)=(z-a)/(1-\bar az)$ envoie $D$ sur $D$, bijectif ; tout automorphisme est $e^{i\theta}f_a$. |
| 12 | Groupe $\mathrm{Aut}(D)$, distance hyperbolique | 01, 04 | 3 | Loi de groupe explicite $f_{a,\theta}\circ f_{b,\omega}$ ; action transitive ; stabilisateur de 0 ; invariance de $\int\lvert\gamma'\rvert/(1-\lvert\gamma\rvert^2)$. |
| 13 | Théorème de l'application ouverte | 01 | 3 | Par l'absurde avec $g_n=1/(f-\alpha_n)$ et le principe du maximum (= DM 2022 partie A). |
| 14 | Fonctions méromorphes : reconnaître | 02 | 1 | $z^2/(z^4+1)$, $(1-\cos z)/z^2$, $\sin(1/z)$, $1/\cosh z$ : méromorphe ou non, pôles. |
| 15 | $f(1/z)$ méromorphe en 0 | 02 | 2 | Pour $f$ entière, $f(1/z)$ méromorphe en 0 ⟺ $f$ polynomiale (Laurent / Liouville). |
| 16 | Pôles et résidus (calculs) | 02 | 1 | $z^2/((z-2)(z^2+1))$, $\cot z$, $\sin z/(z+2)^2$. |

### 5.2 `TD2_ANA_COMP_2023__1_.txt` — « Exercices d'analyse complexe (suite) » (21 exercices, ch. 02–04)

| N° | Titre / thème | Chap. | Diff. | Une phrase |
|---|---|---|---|---|
| 1 | Singularité ponctuelle (Laurent, Riemann, Casorati–Weierstrass) | 02 | 3 | Indépendance en $r$ de $\oint_{C(0,r)}g$ ; formule de Cauchy sur une couronne ; série de Laurent ; effaçable ⟺ bornée ; pôle ⟺ $\lvert f\rvert\to\infty$ ; essentielle ⇒ image dense. |
| 2 | Automorphismes de $\mathbb C$ | 02 | 2 | $f$ bijective entière ⇒ $f(1/z)$ méromorphe en 0 ⇒ $f(z)=az+b$. |
| 3 | $\oint(z+1/z)^n\,dz/z$ et $\int_0^{2\pi}\cos^nx\,dx$ | 02 | 1 | Résidu en 0 d'un développement binomial ; passage réel. |
| 4 | $\int_0^{+\infty}x^n/(1+x^m)\,dx$ | 02 | 2 | Secteur angulaire d'ouverture $2\pi/m$, un seul pôle $e^{i\pi/m}$. |
| 5 | $\int_0^{2\pi}dt/(a^2\cos^2t+b^2\sin^2t)$ | 02 | 2 | Paramétrer une ellipse comme lacet et appliquer les résidus. |
| 6 | Principe de réflexion de Schwarz | 01, 02 | 3 | Continue sur $D$, holomorphe hors $]-1,1[$ ⇒ holomorphe (Morera) ; prolongement $f(\bar z)^-$ ; généralisation à $\Omega$ stable par conjugaison. |
| 7 | Théorème de Rouché (applications) | 02 | 2 | $\lvert f\rvert<1$ sur $C$ ⇒ unique point fixe dans $D$ ; racines de $z^7-2z^5+6z^3-z-1$ dans $D$ ; de $z^4-6z+3$ dans $1<\lvert z\rvert<2$. |
| 8 | Solutions de $\tan z=z$ | 02 | 3 | $\lvert\sin z\rvert<\lvert z\cos z\rvert$ sur le bord du carré $\max(\lvert x\rvert,\lvert y\rvert)=n\pi$ ⇒ toutes les solutions sont réelles (Rouché). |
| 9 | Racine carrée de $z(z-1)$ sur $\mathbb C\setminus[0,1]$ | 02 | 2 | Existence de deux déterminations holomorphes (logarithme / indice nul autour du segment). |
| 10 | Puissances $z^\alpha$ | 02 | 2 | Prolongement unique à $\mathbb C\setminus]-\infty,0]$, DSE en 1, dérivée, pour quels $\alpha$ prolongeable à $\mathbb C^*$, à $\mathbb C$. |
| 11 | Noyau de Bergman | 01, 03 | 3 | $\mathrm{Hol}^2(D)$ fermé dans $L^2$ (formule de la moyenne) ; noyau reproduisant $\frac1\pi\frac1{(1-\bar wz)^2}$ ; base hilbertienne $\sqrt{(n+1)/\pi}\,z^n$. |
| 12 | Fonction $\wp$ de Weierstrass | 03 | 3 | Entière $\Lambda$-périodique ⇒ constante ; convergence et parité de $\wp$, périodicité via $\wp'$ ; Laurent en $E_k$ ; $\wp'^2=4\wp^3-60E_4\wp-140E_6$. |
| 13 | Fonction $\Gamma$ : compléments, Gauss | 03 | 2 | $\Gamma(z)\Gamma(1-z)=\pi/\sin\pi z$ par les produits de Weierstrass et d'Euler ; $\Gamma(1/2)=\sqrt\pi$ ; $\int e^{-x^2}$. |
| 14 | Suites de fonctions holomorphes bornées sur les compacts | 03 | 2 | Convergence simple + bornes uniformes sur compacts ⇒ limite holomorphe ; bornes sur les dérivées $f_n^{(k)}$ (Cauchy + Montel/Vitali). |
| 15 | Dynamique holomorphe : point fixe | 03, 01 | 3 | $f:\Omega\to\Omega$, $f(a)=a$ : $\lvert f'(a)\rvert\le1$ ; $f'(a)=1$ ⇒ identité ; $\lvert f'(a)\rvert=1$ ⇒ automorphisme ; $<1$ ⇒ itérées → $a$. |
| 16 | Linéarisation de Kœnigs ($0<\lvert\lambda\rvert<1$) | 03 | 4 | $\lvert f^n(z)\rvert\le c^n\lvert z\rvert$, $\varphi_n=f^n/\lambda^n$ converge, $\varphi\circ f=\lambda\varphi$ ; extension au bassin d'attraction $A$. |
| 17 | Linéarisation quand $\lvert\lambda\rvert=1$ | 03 | 3 | Moyennes $\phi_n=\frac1n\sum\lambda^{-j}f^j$, $\lvert\phi_n\circ f-\lambda\phi_n\rvert\le2c/n$, $\phi$ injective près de 0. |
| 18 | Exemple de Cremer (non-linéarisable) | 03 | 4 | $f(z)=z^2+\lambda z$, $\lambda=e^{2i\pi\theta}$ lacunaire : points fixes de $f^n$, $\lvert1-\lambda^n\rvert\ge\delta^{2^n-1}$, contradiction. |
| 19 | Représentation conforme via automorphismes | 03, 04 | 3 | $\varphi_n(a)\to\eta\in\partial\Omega$ ($\partial\Omega$ de classe $C^1$) ⇒ $\Omega$ biholomorphe à $D$ (= CC 2024 ex. III). |
| 20 | Transformation de Joukovski, aérodynamique | 04 | 2 | Images des cercles par $J(z)=\frac12(z+1/z)$ (ellipses, segment $[-1,1]$) ; potentiel complexe autour d'une plaque ; vitesse infinie aux bords si $\alpha\ne0$. |
| 21 | Problème de Dirichlet sur le demi-plan | 04 | 1 | Partie imaginaire d'une holomorphe harmonique ; $T=A\,\Im\mathrm{Log}z+B$ ; isothermes = demi-droites issues de 0. |

### 5.3 `TD_CAL_DIF2022.txt` — « Exercices de calcul différentiel » (13 exercices, ch. 05–06, 08, 09)

| N° | Titre / thème | Chap. | Diff. | Une phrase |
|---|---|---|---|---|
| 1 | $\Phi(A)=A^n$ sur $M_m(\mathbb R)$ | 05 | 1 | $C^\infty$ (polynomiale) ; $d\Phi_A(H)=\sum A^kHA^{n-1-k}$ ; différentielle seconde. |
| 2 | Variante du TAF | 05 | 2 | $\lVert f(b)-f(a)-df_c(b-a)\rVert\le\sup_{[a,b]}\lVert df_u-df_c\rVert\,\lVert b-a\rVert$ sur un convexe de Banach. |
| 3 | $F:\ell^1\to\ell^1$, $(x_i)\mapsto(f(x_i))$ | 05 | 3 | Bien définie ($f(0)=0$, $f$ $C^1$), $C^1$, $dF_x(h)=(f'(x_i)h_i)$ — différentiabilité en dimension infinie. |
| 4 | $T(f)=\int_0^1\det(f,f')$ sur $C^1([0,1],\mathbb R^2)$ | 05 | 2 | $C^1$ ; $dT_f(h)=\int\det(h,f')+\det(f,h')$. |
| 5 | $F(u)=\int_0^1f(t,u(t))\,dt$ sur $C^0$ | 05 | 2 | $C^p$ et $d^kF_u(h_1..h_k)=\int\partial_y^kf\,h_1\cdots h_k$. |
| 6 | Variante du théorème de Picard | 05 | 2 | $T^n$ contractante ⇒ $T$ a un unique point fixe, limite des itérées. |
| 7 | Submersion en Banach ⇒ image voisinage | 06 | 3 | $df_a$ surjective avec $\ker df_a$ scindé ⇒ $f(U)$ voisinage de $f(a)$ (inversion locale sur un supplémentaire). |
| 8 | $\Psi(f)=f'+tf^2$ de $C^1$ dans $C^0$ | 05, 06, 07 | 3 | $C^1$, $d\Psi_0=d/dt$ surjective, supplémentaire fermé ; $f'+tf^2=g$ résoluble pour $g$ petite (via ex. 7). |
| 9 | Racines perturbées et intégrale elliptique (périhélie de Mercure) | 06 | 3 | $(x-a)(x-b)+\varepsilon x^3=0$ : trois racines, DL ; développement de $\int dx/\sqrt{(x-a)(b-x)+\varepsilon x^3}$ à $O(\varepsilon^2)$. |
| 10 | Valeurs propres simples dépendant $C^\infty$ de la matrice | 06 | 3 | $\lambda_i(A)$ et vecteurs propres $v_i(A)$ de classe $C^\infty$ près de $A_0$ (fonctions implicites sur le polynôme caractéristique / sur $(A-\lambda)v=0$). |
| 11 | $u''-\lambda f(u)=0$, $u(0)=u(1)=0$ | 06, 07 | 3 | Existence d'une solution $u_\lambda\in C^2$ pour $\lambda$ petit (fonctions implicites en Banach, inversibilité de $u\mapsto u''$). |
| 12 | Théorème du rang constant | 06, 09 | 3 | Formes normales locales d'une immersion, d'une submersion, d'une application de rang constant (= Lemme_de_Morse ex. 2). |
| 13 | Calcul des variations : Euler–Lagrange | 08, 05 | 3 | $\hat L(\gamma)=\int L(t,\gamma,\gamma')$ est $C^1$ ; lemme de du Bois-Reymond ; équation d'E-L ; Hamiltonien conservé ; équation de Newton. |

### 5.4 `TD_Equations_Differentielles.txt` — « Exercices sur les équations différentielles » (13 exercices, ch. 07, + 05–06)

| N° | Titre / thème | Chap. | Diff. | Une phrase |
|---|---|---|---|---|
| 1 | Lemme de Gronwall | 07 | 2 | $u\le b+\int_0^ta u$ ⇒ $u(t)\le b(t)+\int_0^tb(s)a(s)e^{\int_s^ta}ds$. |
| 2 | Applications de Gronwall | 07 | 2 | $\lVert u'\rVert\le k\lVert u\rVert$, $u(t_0)=0$ ⇒ $u\equiv0$ ; unicité pour $y'=f(t,y)$ lipschitzienne ; $\lVert y_1-y_2\rVert\le\lVert x_1-x_2\rVert e^{k\lvert t-t_0\rvert}$. |
| 3 | Champs complets | 07 | 3 | Croissance $\lVert X\rVert\le A\lVert x\rVert+B$ ⇒ complet ; reparamétrage $gX$ garde les trajectoires et peut rendre le champ complet. |
| 4 | Exponentielle de matrices, sous-groupes à un paramètre | 07, 05, 06 | 3 | Propriétés de $\exp$ ; morphismes continus $\mathbb R\to GL_n$ sont $t\mapsto e^{tX}$ ; $\exp$ est $C^\infty$ via le flot ; $d\exp_0=\mathrm{Id}$, $\mathrm{Log}$ local ; pas de petit sous-groupe. |
| 5 | Champs $X_a=\sum a_iX_i$, application exponentielle | 07, 06 | 3 | Homogénéité $\varphi(\lambda t,a)=\varphi(t,\lambda a)$ ; $\Phi(a)=\alpha_a(1)$ difféo local si $X_i(0)$ base. |
| 6 | $\alpha'=A(t)\alpha$ avec $A$ antisymétrique | 07 | 1 | Orthogonalité conservée (dériver $\alpha^T\alpha$ et unicité). |
| 7 | $\alpha'=-\alpha A\alpha$ | 07 | 2 | Solution $(I_n+tA)^{-1}$ sur $]-\lVert A\rVert^{-1},\lVert A\rVert^{-1}[$. |
| 8 | Différentielle du déterminant, formule de Liouville | 05, 07 | 3 | $d\det_A(H)=\det A\,\mathrm{Tr}(A^{-1}H)$ ; $(\det A(t))'=\det A\,\mathrm{Tr}(A^{-1}A')$ ; le flot préserve le volume ⟺ $\mathrm{Tr}\,dX_x=0$. |
| 9 | Transport d'un champ par un difféomorphisme | 07 | 2 | Flot de $\phi_*X$ égal à $\phi\circ F\circ(\mathrm{Id}\times\phi^{-1})$. |
| 10 | Redressement d'un champ de vecteurs (flow-box) | 07, 06 | 3 | Si $X(p_0)\ne0$, difféo local $\phi$ avec $X(\phi(x))=\partial_1\phi(x)$ (inversion locale appliquée au flot). |
| 11 | Intégrales premières ; champ $(y-y^5,x)$ | 07 | 2 | $f$ constante sur les courbes intégrales ⟺ $\nabla f\perp X$ ; $3x^2-3y^2+y^6$ ; points d'équilibre ; allure des trajectoires. |
| 12 | Équation de transport | 07 | 3 | $\partial_tf+\partial_xf\cdot A=0$ : solution $f(t,x)=f_0(\Phi_{t\to0}(x))$ via le flot ; existence et unicité $C^1$. |
| 13 | Korteweg–de Vries, ondes solitaires | 07 | 4 | $Q''-Q+Q^p=0$ : Cauchy–Lipschitz, équilibres, énergie conservée, portrait de phase, orbite homocline explicite, explosion pour $p=2$, stabilité. |

### 5.5 `Lemme_de_Morse.txt` — « Deux exercices de calcul différentiel » (énoncés **et corrigés**, ch. 05–06)

| N° | Titre / thème | Chap. | Diff. | Une phrase |
|---|---|---|---|---|
| 1 | Lemme de Morse | 05, 06 | 4 | Point critique non dégénéré de signature $(r,s)$ : réduction $d^2f_0=2I_{r,s}$, Taylor reste intégral $f=x^TB(x)x$, racine carrée lisse $\eta$ par inversion locale sur $E=\{X : I_{r,s}X\in\mathrm{Sym}\}$, $\varphi(x)=\eta(B(x))x$ difféo local ⇒ $f\circ\psi=\sum_{\le r}h_i^2-\sum_{>r}h_i^2$. |
| 2 | Théorème du rang constant | 06, 09 | 3 | Même énoncé que TD CD ex. 12, avec corrigé complet (immersion, submersion, rang constant par $\Theta=(f_1..f_r,x_{r+1}..x_n)$). |

---------------------------------------------------------------------------------------------------

## 6. Problèmes de DM de l'annexe A

| DM | Thème | Chapitres | Parties / questions | Difficulté | Temps (travail maison) | Ce qu'il teste |
|---|---|---|---|---|---|---|
| **DM 1 — 2022** (p. 186–190) | Théorème de l'application ouverte ; lemme topologique sur les disques inclus dans $f(\Omega)$ ; minoration du rayon d'un disque contenu dans $f(D)$ (type Bloch–Landau) via les automorphismes du disque | 01 (zéros isolés, maximum, formule de Cauchy pour $f'$, estimation $\lvert f'(tz)-f'(0)\rvert$, automorphismes $\mu_{\alpha,\lambda}$), topologie du plan | A (3) + B (2) + C (4) + D (6) = **15 questions** | **4** | 3–4 h | Chaîner 4 parties ; maximiser $\lvert f'(y)\rvert(1-\lvert y\rvert^2)$ sur $\bar D$ ; étude de fonction réelle $\rho\mapsto\rho-\rho^2/(R-\rho)$. |
| **DM 1 — 2023** (p. 202–211) | Fonction $\zeta$ de Riemann : formule de Poisson par résidus, fonction $\theta$ et son équation fonctionnelle, $L(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$, prolongement méromorphe et $L(s)=L(1-s)$, produit eulérien, infinité des premiers, zéros triviaux ; partie F facultative = hypothèse de Riemann | 02 (résidus de $1/(e^{2i\pi z}-1)$, rectangles), 03 (séries normalement convergentes de fonctions holomorphes Thm III.1.4, produits infinis Thm III.5.1, $\Gamma$), 01 (holomorphie sous l'intégrale Thm I.9.1, prolongement analytique) | A (7) + B (2) + C (8) + D (5) + E (2) + F (1) = **25 questions** | **4** | 5–6 h | Analyse fine (Fubini/Tonelli, convergence dominée, découpage $\int_0^1+\int_1^\infty$), lecture de notations lourdes, chaînage de six parties. |
| **DM 1 — 2024-2025, ex. 1** (p. 218–220) | Fonctions elliptiques : $\sum\mathrm{res}=0$, zéros = pôles $\ge2$, $\sum m(z)z\in\Lambda$ ; loi d'addition de $\wp$ par alignement sur la cubique ; fonction $\theta$ de Weierstrass et construction d'elliptiques à zéros/pôles prescrits ; $E(\Lambda)=\mathbb C(\wp)+\wp'\mathbb C(\wp)$ | 02 (résidus, principe de l'argument, indice via $\exp\int f'/f$), 03 (produits infinis, Log des facteurs, convergence normale, Liouville), 01 | 1 (4) + 2 (3) + 3 (4) + 4 (4) = **15 questions** | **4** | 4–5 h | Algèbre des méromorphes (corps), Laurent pour compter les pôles, récurrence sur le nombre de pôles, parité/imparité. |
| **DM 1 — 2024-2025, ex. 2** (p. 220–221) | Familles normales de fonctions méromorphes : convergence vers $\mathbb C\cup\{\infty\}$, dérivée sphérique ($\sigma$-dérivée), critère de Marty admis, lemme de Zalcman (renormalisation $f_k(z_k+\rho_kz)$), théorème de Montel « trois valeurs omises » via racines $2^n$-ièmes, Liouville | 03 (Montel, Hurwitz, Liouville, application ouverte), 02 (logarithme / racines sur un simplement connexe, prop. II.9.3) | 1 (2) + 2 (1) + 3 (1) + 4 (6) + 5 (6) = **16 questions** | **4** | 4–5 h | Procédé diagonal, domaines variables, manipulation d'un critère admis, principe de Bloch (commentaire du corrigé). |
| **DM 2 — 2024-2025** (p. 231–237) | Ensembles hyperboliques pour un difféomorphisme de $\mathbb R^n$ ; continuité des projecteurs $P_x^\pm$ (graphe fermé + compacité) ; normes adaptées $N_x$ ; $\varepsilon$-pseudo-orbites et $\delta$-filatures (lemme de pistage / shadowing) par point fixe contractant dans $\ell^\infty(\mathbb Z,\mathbb R^n)$ ; $\Theta=\mathrm{Id}-\Psi$ automorphisme ; points récurrents adhérents aux périodiques | 05 (espaces de Banach, normes équivalentes, point fixe de Picard, accroissements finis, $d(f_j)_0=0$), 06 (inversibilité de $\mathrm{Id}-\Psi$, perturbation), compacité/continuité uniforme | 1 (5) + 2 (3) + 3 (4) + 4 (1) = **13 questions** | **4** | 4–5 h | Calcul différentiel en dimension infinie « pour de vrai », choix d'une norme adaptée (le corrigé insiste : « il ne faut surtout pas ajouter ces deux majorations »), lecture d'une définition longue. |

Observations utiles pour le site :
* Les DM sont **trois à quatre fois plus longs** qu'un exercice de contrôle de niveau 4 et introduisent
  un vocabulaire nouveau en préambule ; ils ne sont pas chronométrés. Sur le site, un « niveau 4 » doit
  rester à l'échelle d'un exercice de contrôle (45–60 min), pas d'un DM.
* Deux DM sur quatre portent sur la même famille (fonctions elliptiques, $\wp$), un sur $\zeta$, un sur
  la dynamique hyperbolique : les DM aiment les **objets classiques de la littérature** (Weierstrass,
  Riemann, Montel–Zalcman, Anosov–Bowen). Pour le site, chercher d'autres objets classiques
  non encore utilisés (voir § 3.2 et § 4).
