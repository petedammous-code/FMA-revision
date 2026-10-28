---
id: rfx-holo-constante
type: reflexe
situation: Montrer qu'une fonction holomorphe est constante, nulle ou un polynôme
chapters: [1, 2, 3]
---
## Situation

On a $f\in\Hol(\Omega)$ et une information **globale** sur $f$ : une borne (« $|f|\le M$ », « $|f(z)|\le a+b|z|^m$ », « $f$ bornée sur $\C$ ») ; une contrainte sur l'**image** (« $f$ à valeurs réelles », « $|f|$ constant », « $f(\Omega)$ évite un disque », « $f(\Omega)\subset$ une droite ou un cercle ») ; un **maximum** de $|f|$ atteint en un point intérieur ; une **périodicité** ou une équation fonctionnelle ; ou encore une suite de zéros qui s'accumule. On veut conclure « $f$ est constante », « $f\equiv0$ » ou « $f$ est un polynôme de degré $\le m$ ».

Mots-clés déclencheurs dans l'énoncé : *entière*, *bornée*, *$O(|z|^m)$*, *maximum local*, *$|f|$ constant*, *à valeurs dans*, *ne prend pas la valeur*, *$f(z+\omega)=f(z)$*, *s'annule sur*.

## Options

### [x] Théorème de Liouville — [[ch01-liouville]]
**Quand.** $f$ est holomorphe sur $\C$ **tout entier** (« entière ») et bornée ; ou on peut fabriquer à partir de $f$ une fonction entière bornée : $1/(f-a)$ si $f$ évite $D(a,r)$ (alors $|1/(f-a)|\le1/r$), $e^{\pm f}$ ou $e^{\pm if}$ si $\Re f$ ou $\Im f$ est bornée d'un côté, $f\circ\varphi$ avec $\varphi$ un biholomorphisme, ou $f$ restreinte à un compact fondamental si $f$ est périodique dans deux directions.
**Justification.** Estimées de Cauchy ([[ch01-estimees-cauchy]]) sur $C(0,R)$ : $|f'(z_0)|\le\sup|f|/R\to0$ quand $R\to+\infty$, donc $f'\equiv0$ sur $\C$ connexe.
**Pièges.** Liouville est **faux sur un ouvert strict** : $z\mapsto e^{iz}$ est bornée sur le demi-plan $\{\Im z>0\}$ et non constante. Le correcteur attend « $g$ est bien définie et holomorphe sur $\C$ (dénominateur ne s'annule pas), bornée par ... ».

### [x] Croissance polynomiale et estimées de Cauchy — [[ch01-liouville-consequences-image-dense-croissance-polynomiale]]
**Quand.** $f$ entière avec $|f(z)|\le a+b|z|^m$ (ou $|f(z)|\le C|z|^\alpha$ pour $|z|\ge R_0$, $\alpha$ réel) : conclusion « polynôme de degré $\le\lfloor\alpha\rfloor$ ». Variante : $f(z)/z^k\to0$ à l'infini.
**Justification.** $f$ entière est égale à sa série de Taylor en $0$ sur $\C$ ([[ch01-estimees-cauchy]], rayon $\rho(0)=+\infty$) et $|a_n|\le(a+bR^m)/R^n\to0$ pour $n>m$ : tous les coefficients de rang $>m$ sont nuls.
**Pièges.** La borne doit valoir sur des cercles de rayon **arbitrairement grand** (pas seulement sur un disque). Une borne sur $\Re f$ seule ne donne rien directement : passer par $e^{f}$ (voir Démarche).

### [x] Principe du maximum — [[ch01-principe-maximum]]
**Quand.** $\Omega$ **connexe** et $|f|$ admet un **maximum local** en un point intérieur $z_0\in\Omega$ ; ou $|f|$ est constante sur $\Omega$ ; ou $f$ continue sur $\bar\Omega$ compact, holomorphe sur $\Omega$, et $|f|$ atteint $\sup_{\partial\Omega}|f|$ à l'intérieur ([[ch01-maximum-sur-le-bord]]). Pour un **minimum** de $|f|$ : appliquer à $1/f$ après avoir vérifié que $f$ ne s'annule pas.
**Justification.** Formule de la moyenne ([[ch01-formule-moyenne]]) : $f(z_0)$ est la moyenne de $f$ sur les petits cercles ; un module maximal au centre force $|f|$ constant près de $z_0$, puis $f$ constante (Cauchy réelles sur $|f|^2$), puis partout par connexité.
**Pièges.** Un sup atteint **sur le bord** ne dit rien. Sans connexité la conclusion est fausse ($f=0$ sur un disque, $1$ sur un autre). « $|f|$ constant $\Rightarrow f$ constant » utilise aussi la connexité.

### [x] Théorème de l'application ouverte — [[ch01-application-ouverte]]
**Quand.** $\Omega$ connexe et $f(\Omega)$ est contenu dans un ensemble **d'intérieur vide** : $\R$, $i\R$, un cercle, une courbe, un segment ; ou $f(\Omega)$ n'est pas ouvert (contient un point isolé, est fermé et borné...).
**Justification.** Si $f$ n'était pas constante, $f(\Omega)$ serait un ouvert non vide de $\C$, donc contiendrait un disque, impossible dans un ensemble d'intérieur vide.
**Pièges.** Connexité de $\Omega$ indispensable. Alternative de rédaction attendue en contrôle : les conditions de Cauchy réelles ([[ch01-cauchy-riemann]]) — si $f=P+iQ$ est réelle, $Q=0$ donne $\partial P/\partial x=\partial P/\partial y=0$, donc $f'=0$.

### [ ] Théorème de Rouché — [[ch02-rouche]]
**Pourquoi ce n'est pas l'outil ici.** Rouché compare le **nombre de zéros** de deux fonctions à l'intérieur d'un lacet ; il ne dit jamais qu'une fonction est constante. Une fonction constante non nulle n'a d'ailleurs aucun zéro, ce qui ne la caractérise pas.
**Quand il le serait.** Pour montrer que $f-c$ a exactement $k$ solutions dans un disque, ou qu'une perturbation $f+\eps g$ garde le même nombre de zéros.

### [ ] Théorème de Weierstraß — [[ch03-weierstrass]]
**Pourquoi ce n'est pas l'outil ici.** Weierstraß donne l'**holomorphie** d'une limite localement uniforme et la convergence des dérivées, pas la constance ; les limites de fonctions non constantes peuvent être constantes ou non.
**Quand il le serait.** Si $f$ est donnée comme limite $f=\lim f_n$ avec $f_n'\to0$ localement uniformément : alors $f'=\lim f_n'=0$ et $f$ est constante sur chaque composante connexe. C'est aussi lui qui justifie « $f'=\lim f_n'$ » avant d'appliquer Liouville à une limite.

## Démarche

1. **Où vit $f$ ?** Si $\Omega=\C$ (« entière ») : aller en 2. Sinon : aller en 3 (ou se ramener à $\C$ en composant avec un biholomorphisme explicite, par exemple Cayley $D\to H$ [[ch01-cayley-disque-demi-plan]], uniquement si l'énoncé le suggère).
2. **$f$ entière.** Si $|f|\le M$ : Liouville. Si $|f(z)|\le a+b|z|^m$ : polynôme de degré $\le m$ par les estimées de Cauchy. Si l'image évite un disque $D(a,r)$ : Liouville sur $1/(f-a)$. Si $\Re f\le M$ (ou $\ge$, ou $\Im f$ bornée d'un côté) : Liouville sur $e^{f}$ (resp. $e^{-f}$, $e^{\mp if}$), puis $f'e^{f}=0\Rightarrow f'=0$. Si $f$ est périodique de deux périodes $\R$-indépendantes : $f$ bornée sur le parallélogramme fondamental compact, donc sur $\C$, donc Liouville. Si $f$ ne prend pas deux valeurs : hors programme (Picard) — chercher plutôt une composition qui borne $f$.
3. **$\Omega$ connexe quelconque.** Vérifier la **connexité** (l'écrire). Si $|f|$ a un max local intérieur, ou $|f|$ constant : principe du maximum. Si $f(\Omega)\subset\R$, $\subset$ un cercle, $\subset$ une courbe : application ouverte ou Cauchy réelles. Si $f'=0$ sur $\Omega$ : $f$ est constante **sur chaque composante connexe** seulement.
4. **Montrer $f\equiv0$.** Si $f$ s'annule sur un ensemble ayant un point d'accumulation **dans $\Omega$** : zéros isolés [[ch01-zeros-isoles]]. Si $f$ est entière, bornée et s'annule en un point : Liouville donne $f$ constante, puis $f\equiv0$. Si toutes les dérivées en un point sont nulles : série de Taylor nulle sur un disque, puis prolongement analytique [[ch01-prolongement-analytique]].
5. **Si $\Omega$ n'est pas connexe** : conclure seulement « constante sur chaque composante connexe » et le dire explicitement.

## Pièges

* Appliquer Liouville à une fonction holomorphe sur un demi-plan, un disque ou $\C^\times$ : il faut $\Hol(\C)$. Sur $\C^\times$, $z\mapsto e^{1/z}$ n'est pas bornée, et $z\mapsto 1/z$ non plus : penser au théorème de Riemann [[ch02-singularite-effacable-riemann]] si $f$ est bornée près du point manquant, puis Liouville.
* Oublier de vérifier que la fonction auxiliaire est bien **définie et holomorphe** sur $\C$ : $1/(f-a)$ exige $f\ne a$ partout, $e^{f}$ est toujours entière, $\log f$ exige un ouvert simplement connexe et $f\ne0$ ([[ch02-logarithme-existence]]).
* Conclure « constante » à partir de « $f'=0$ » ou « $|f|$ constant » sur un ouvert non connexe.
* Confondre « $|f|$ borné par $|z|^{m}$ pour $|z|$ grand » (polynôme) et « pour $|z|$ petit » (zéro d'ordre $\ge m$ en $0$ : c'est un énoncé local, outil [[ch01-def-multiplicite-zero]]).
* « $f$ réelle sur $\R$ » ne signifie **pas** « $f$ constante » : $\sin$ est réel sur $\R$. Il faut que l'image de tout $\Omega$ soit dans $\R$.

## Mini-exemple

*Énoncé.* $f$ entière et $|f(z)|\le A+B|z|^{3/2}$ pour tout $z$. Montrer que $f$ est un polynôme de degré $\le1$.

*Solution.* $f$ est entière donc égale sur $\C$ à sa série de Taylor en $0$, $f(z)=\sum a_nz^n$ ([[ch01-estimees-cauchy]], $\rho(0)=+\infty$). Pour tout $R>0$, les estimées de Cauchy sur $C(0,R)$ donnent
$$|a_n|\le\frac{\sup_{C(0,R)}|f|}{R^n}\le\frac{A+BR^{3/2}}{R^n}=\frac{A}{R^n}+\frac{B}{R^{\,n-3/2}}.$$
Pour $n\ge2$, $n-3/2>0$ et le majorant tend vers $0$ quand $R\to+\infty$ : $a_n=0$. Donc $f(z)=a_0+a_1z$. On ne peut pas faire mieux : $f(z)=z$ vérifie $|z|\le1+|z|^{3/2}$ pour tout $z$ (distinguer $|z|\le1$ et $|z|\ge1$), et n'est pas constante.
