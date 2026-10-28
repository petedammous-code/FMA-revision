---
id: rfx-holo-suites-familles
type: reflexe
situation: Étudier une suite ou une famille de fonctions holomorphes (convergence, extraction, zéros et injectivité de la limite, extrémaux)
chapters: [1, 3]
---
## Situation

On a une suite $(f_n)$ ou une famille $\mathcal F\subset\Hol(\Omega)$ : itérées $f^{\circ n}$ d'une fonction $D\to D$, sommes partielles d'une série ou d'un produit infini, famille $\{f\in\Hol(D):|f|\le1,\ f(0)=a\}$, suite d'automorphismes, suite de solutions d'un problème. On veut : montrer que la suite **converge** localement uniformément (et identifier la limite) ; montrer que la limite est **holomorphe** et que les dérivées convergent ; **extraire** une sous-suite convergente ; montrer que la limite **ne s'annule pas**, est **injective**, ou est **constante** ; montrer qu'un **sup** sur la famille est **atteint** (problème extrémal, type preuve de Riemann) ; étudier les zéros d'un produit infini. Mots-clés : *localement uniformément*, *uniformément sur tout compact*, *bornée*, *sous-suite*, *famille normale*, *ne s'annule pas*, *sup atteint*.

## Options

### [x] Théorème de Weierstraß (suite et série) — [[ch03-weierstrass]]
**Quand.** $(f_n)$ converge **localement uniformément** (= uniformément sur tout compact, [[ch03-convergence-uniforme-compacts]]), ou est localement uniformément de Cauchy ; ou $\sum f_n$ converge localement normalement ([[ch03-weierstrass-series]]). Conclusion : limite holomorphe, $f_n^{(k)}\to f^{(k)}$ localement uniformément pour tout $k$ (donc $f_n'(z_0)\to f'(z_0)$, utile pour les extrémaux).
**Justification.** Formule de Cauchy : $f_n^{(k)}(z)=\frac{k!}{2i\pi}\int_{C}\frac{f_n(\omega)}{(\omega-z)^{k+1}}d\omega$ passe à la limite uniforme sur le cercle, avec perte de rayon ([[ch03-weierstrass-estimation-derivees]]).
**Pièges.** La convergence **simple** ou **$L^2$** ne suffit pas pour l'énoncé ; si l'on n'a que la convergence simple et une borne locale uniforme, passer par Montel + unicité de la limite (voir Démarche). Ne pas confondre « uniforme sur $\Omega$ » (rarement vrai) et « uniforme sur tout compact » (ce qu'on démontre et ce qui suffit).

### [x] Théorème de Montel (extraction) — [[ch03-montel]]
**Quand.** La famille est **localement uniformément bornée** ([[ch03-famille-localement-uniformement-bornee]]) : $|f|\le C_K$ sur chaque compact $K$ pour tout $f\in\mathcal F$ ; cas fréquent : toutes les $f$ prennent leurs valeurs dans un ouvert **borné** ($f(\Omega)\subset D$). Conclusion : de toute suite on extrait une sous-suite convergeant localement uniformément ([[ch03-famille-normale]]). C'est l'outil d'**existence** : un sup est atteint, une sous-suite converge, un argument par l'absurde démarre.
**Justification.** Les estimées de Cauchy donnent l'équicontinuité locale ([[ch03-montel-equilipschitz]]) ; Ascoli et le procédé diagonal sur une suite exhaustive de compacts font le reste.
**Pièges.** La limite d'une sous-suite n'appartient pas forcément à la famille : vérifier **à la main** les contraintes fermées (valeurs dans $\bar D$ seulement, $f(0)=a$ conservé, injectivité par Hurwitz). Montel donne une **sous-suite**, pas la convergence de la suite ; pour la suite entière, montrer que toutes les sous-suites convergentes ont la même limite. Une famille à valeurs dans $\C$ non bornée (ex. $f_n(z)=nz$) n'est pas normale.

### [x] Théorème de Hurwitz (zéros et injectivité de la limite) — [[ch03-hurwitz]]
**Quand.** $f_n\to f$ localement uniformément sur $\Omega$ **connexe**. Si les $f_n$ ne s'annulent pas : $f$ ne s'annule pas **ou** $f\equiv0$. Si les $f_n$ sont injectives : $f$ injective **ou** constante. Forme forte ([[ch03-hurwitz-zeros-locaux]]) : le nombre de zéros de $f_n$ dans un petit disque autour d'un zéro de $f$ tend vers la multiplicité de ce zéro — permet de montrer qu'une **valeur** $b$ est prise par $f_n$ pour $n$ grand dès qu'elle est prise par $f$, à condition que $f\not\equiv b$ (appliquer à $f_n-b$). Déclencheur : « montrer que $f$ ne s'annule pas », « montrer que la limite est injective », « montrer que $f_n(z)=b$ a une solution pour $n$ assez grand ».
**Justification.** Rouché [[ch02-rouche]] sur un petit cercle $C$ autour d'un zéro isolé $a$ de $f$ : $|f_n-f|<|f|$ sur $C$ pour $n$ grand, donc $f_n$ et $f$ ont le même nombre de zéros dans le disque.
**Pièges.** Le cas dégénéré ($f\equiv0$, $f$ constante) **se produit** ([[ch03-hurwitz-contre-exemple]] : $z^n\to0$ sur $D^\times$) : il faut l'exclure par une information ponctuelle ($f(z_0)\ne0$, $f'(z_0)\ne0$, normalisation). Connexité indispensable.

### [x] Produits infinis — [[ch03-produits-infinis]]
**Quand.** $G_n=\prod_{j\le n}(1+f_j)$ avec $\sum|f_j|$ **localement normalement** convergente (sur chaque compact $K$, $\sum\sup_K|f_j|<\infty$). Conclusion : $G_n\to G$ localement uniformément, $G$ holomorphe, $G(z)=0$ si et seulement si un facteur s'annule en $z$ (nombre fini de facteurs), ordre = somme des ordres, et, avec $g_j=1+f_j$, $G'/G=\sum g_j'/g_j$ uniformément sur tout compact (à partir d'un rang $n_0$ où les $g_j$ ne s'annulent plus sur le compact). Déclencheur : « montrer que le produit converge et définit une fonction holomorphe dont les zéros sont exactement... », construction d'une fonction entière à zéros prescrits, produit eulérien.
**Justification.** $\mathrm{Log}(1+f_j)$ est bien défini pour $j$ grand sur $K$ et $|\mathrm{Log}(1+\omega)|\le C|\omega|$ ([[ch03-log-estimation]]) ; la série des logarithmes converge normalement, on exponentie.
**Pièges.** La convergence localement normale de $\sum f_j$ est **l'hypothèse** à vérifier (pas celle de $\sum|f_j|$ ponctuelle), et elle sert à ce que le produit **ne s'annule pas** là où aucun facteur ne s'annule ([[ch03-produits-infinis-remarque]]). Facteurs de convergence $e^{z/\lambda+\dots}$ nécessaires quand $\sum1/|\lambda_n|$ diverge.

### [ ] Théorème d'Ascoli — [[ch03-ascoli]]
**Pourquoi ce n'est pas l'outil ici.** Ascoli demande l'**équicontinuité**, qui n'est pas donnée par l'énoncé ; c'est justement le contenu complexe de Montel que de la déduire de la bornitude locale via les estimées de Cauchy ([[ch03-montel-vs-ascoli]]). Citer Ascoli sans justifier l'équicontinuité est une faute ; le refaire à la main est une perte de temps quand Montel est au programme.
**Quand il le serait.** Pour des familles de fonctions **non holomorphes** (solutions d'équations différentielles, fonctions lipschitziennes) ou si l'énoncé demande de redémontrer Montel.

### [ ] Théorème de Rouché — [[ch02-rouche]]
**Pourquoi ce n'est pas l'outil ici.** Rouché compare deux fonctions **fixées** sur un bord ; pour une suite, il faudrait le réappliquer à chaque $n$ avec un rang à partir duquel l'inégalité est vraie : c'est exactement ce que Hurwitz a déjà fait. L'invoquer directement sans la convergence uniforme sur le cercle est incomplet.
**Quand il le serait.** Pour redémontrer Hurwitz ou sa forme forte dans un cas précis (l'énoncé le demande parfois : « en utilisant le théorème de Rouché sur un cercle convenable »), ou pour compter les zéros d'une fonction fixée.

## Démarche

1. **A-t-on la convergence ?** Si oui (localement uniforme ou localement normale) : Weierstraß donne l'holomorphie de la limite et des dérivées ; aller en 3. Si on n'a que la convergence simple : chercher une borne locale uniforme, puis Montel : toute sous-suite a une sous-suite convergeant localement uniformément vers la limite simple (unique), donc la suite entière converge localement uniformément (raisonnement par l'absurde sur une sous-suite restant à distance $\ge\eps$ sur un compact). Si on n'a rien : aller en 2.
2. **A-t-on une borne ?** Famille à valeurs dans un borné, ou $|f_n|\le C_K$ sur tout compact (Cauchy, maximum sur le bord, lemme de Schwarz) : Montel, extraire. Puis identifier les propriétés **fermées** de la limite (valeurs dans $\bar D$, $f(0)=a$, $f'(0)$ = limite). Pour un **problème extrémal** (maximiser $|f'(0)|$, $|f(z_1)|$, minimiser $\sup|f|$) : borner la quantité (estimées de Cauchy, Schwarz), prendre une suite réalisant le sup, extraire, conclure par Weierstraß que la limite réalise le sup, et vérifier qu'elle est dans la famille.
3. **Propriétés de la limite.** Ne s'annule pas / injective : Hurwitz, puis exclure le cas dégénéré. Valeur $b$ atteinte par $f_n$ : forme forte de Hurwitz sur $f_n-b$. Limite constante ou nulle : souvent par Liouville, Schwarz ou un argument de point fixe (itérées $f^{\circ n}$ avec $|f'(a)|<1$). Identification de la limite : coïncidence sur un ensemble à point d'accumulation ([[rfx-holo-identifier]]).
4. **Produit infini.** Vérifier $\sum\sup_K|f_j|<\infty$ pour tout compact (passer par $K\subset\bar D(0,r)$), appliquer le théorème ; lire les zéros avec multiplicité sur les facteurs ; pour la dérivée logarithmique, préciser le compact et le rang $n_0$.
5. **Rédiger** avec les mots exacts : « uniformément sur tout compact », « extraction $(f_{\varphi(n)})$ », « $\Omega$ connexe », « la limite vérifie ... car ... (passage à la limite ponctuel) ».

## Pièges

* Confondre **suite** et **sous-suite** : après Montel, toute propriété obtenue concerne $f_{\varphi(n)}$ ; pour la suite entière, l'argument d'unicité de la limite est obligatoire (et il est noté).
* Appliquer Montel à une famille non bornée ($f_n(z)=z+n$), ou à une famille bornée seulement en un point.
* Oublier le cas $f\equiv0$ ou $f$ constante dans Hurwitz.
* Limite d'une famille à valeurs dans $D$ : elle est à valeurs dans $\bar D$ ; pour revenir dans $D$, utiliser le principe du maximum (si $|f(z_0)|=1$ en un point intérieur, $f$ est constante de module $1$).
* Dériver la limite sans Weierstraß ; intervertir limite et intégrale sans convergence uniforme sur le chemin (compact : c'est gratuit, mais à dire).
* Produit infini : conclure « ne s'annule pas » sans la convergence normale, ou oublier les facteurs de convergence.
* Pour les itérées d'une fonction $D\to D$ : $f^{\circ n}$ est à valeurs dans $D$ donc la famille est normale, mais la convergence de **toute** la suite demande un argument (point fixe attractif, Schwarz).

## Mini-exemple

*Énoncé.* Soit $\mathcal F=\{f\in\Hol(D):\ |f|\le1\text{ sur }D,\ f(0)=\tfrac12\}$. Montrer que $s=\sup_{f\in\mathcal F}|f'(0)|$ est fini et atteint.

*Solution.* $\mathcal F\ne\varnothing$ (la constante $\tfrac12$). Pour $f\in\mathcal F$ et $0<r<1$, les estimées de Cauchy [[ch01-estimees-cauchy]] sur $C(0,r)$ donnent $|f'(0)|\le1/r$, puis $r\to1$ : $|f'(0)|\le1$, donc $s\le1$. Soit $(f_n)$ dans $\mathcal F$ avec $|f_n'(0)|\to s$. La famille $\mathcal F$ est uniformément bornée par $1$, donc normale par le théorème de Montel [[ch03-montel]] : il existe une extraction $f_{\varphi(n)}\to f$ uniformément sur tout compact de $D$. Par le théorème de Weierstraß [[ch03-weierstrass]], $f\in\Hol(D)$ et $f_{\varphi(n)}'(0)\to f'(0)$, donc $|f'(0)|=s$. Par passage à la limite ponctuel, $|f(z)|\le1$ pour tout $z\in D$ et $f(0)=\tfrac12$ : $f\in\mathcal F$, et le sup est atteint.
*Complément.* En composant par l'automorphisme $\psi(w)=\dfrac{w-1/2}{1-w/2}$ du disque ([[ch01-automorphismes-disque]]), qui envoie $\bar D$ dans $\bar D$, $g=\psi\circ f$ vérifie $g(0)=0$, $|g|\le1$, donc, comme $\psi'(w)=\dfrac{3/4}{(1-w/2)^2}$ et $\psi'(\tfrac12)=\tfrac43$, $|g'(0)|=\psi'(\tfrac12)\,|f'(0)|=\tfrac43|f'(0)|\le1$ par le lemme de Schwarz [[ch01-lemme-schwarz]] : $s\le\tfrac34$, valeur atteinte par $f=\psi^{-1}$, c'est-à-dire $f(z)=\dfrac{z+1/2}{1+z/2}$.
