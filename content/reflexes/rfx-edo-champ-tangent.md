---
id: rfx-edo-champ-tangent
type: reflexe
situation: Étudier un champ de vecteurs tangent à une sous-variété (montrer que les courbes intégrales y restent, qu'elles sont globales, que le flot est un groupe de difféomorphismes de la sous-variété)
chapters: [9, 7]
---
## Situation

On a un champ $X$ sur un ouvert $U$ de $\R^N$ (ou sur $\Mat_n(\R)$) et une sous-variété $S\subset U$ : sphère avec $\langle X(x),x\rangle=0$ sur $\mathbb S^{n}$, niveau $\{H=c\}$ d'un hamiltonien, cercle, tore, groupe $\mathrm{O}(n)$ avec $M'=A(t)M$ et $A(t)$ antisymétrique, équation $M'=\Omega\wedge M$. L'énoncé demande : « montrer que $X$ est tangent à $S$ », « montrer qu'une solution issue de $S$ reste dans $S$ », « en déduire qu'elle est définie sur $\R$ », « montrer que $F_t$ induit un difféomorphisme de $S$ », « décrire les trajectoires sur $S$ ». Parfois le champ n'est défini **que sur $S$** ($X:S\to\R^N$ avec $X(x)\in T_xS$).

## Options

### [x] Une courbe intégrale d'un champ tangent à une sous-variété fermée y reste — [[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]
**Quand.** $S$ est une sous-variété **fermée** de $\R^N$, $X:I\times U\to\R^N$ est continu et localement lipschitzien en $x$ sur un ouvert $U\supset S$, et $X(t,x)\in T_xS$ **pour $x\in S$** (tangence seulement sur $S$). Alors toute courbe intégrale $\gamma$ avec $\gamma(0)\in S$ reste dans $S$ sur tout son intervalle (poly, Proposition IX.8.1, p. 172). Tester la tangence : si $S=\{F=0\}$ avec $0$ valeur régulière, $X(x)\in T_xS\iff dF_x(X(x))=0$ ([[ch09-espace-tangent-graphe-equation]]) ; pour la sphère, $\langle X(x),x\rangle=0$.
**Justification.** Le Théorème IX.8.5 donne une courbe intégrale **dans $S$** ; par unicité dans $U$, elle coïncide avec $\gamma$ ; la fermeture de $S$ permet de recommencer jusqu'au bout de l'intervalle.
**Pièges.** Ne pas oublier « **fermée** » : pour $S$ un arc ouvert de cercle, la courbe peut sortir par l'extrémité manquante. Vérifier la tangence **en tout point de $S$**, pas seulement en un point.

### [x] Intégrale première : la contrainte est conservée sur tout l'ouvert — [[ch09-ex-champs-tangents-physique]]
**Quand.** $S=\{F=c\}$ et $dF_x(X(x))=0$ pour **tout $x\in U$** (pas seulement sur $S$) : alors $\frac{d}{dt}F(\gamma(t))=0$, $F(\gamma(t))=F(\gamma(0))=c$, et $\gamma$ reste dans $S$ sans hypothèse de fermeture. Exemples : champ hamiltonien $X_H=(\partial_pH,-\partial_qH)$ et niveaux de $H$ (poly, Exemples IX.8.2, p. 172) ; $M'=\Omega\wedge M$ conserve $\norm M^2$ ; $M'=A(t)M$ avec ${}^tA=-A$ conserve ${}^tMM$. Variante quand $dF_x(X(x))$ ne s'annule que sur $S$ : écrire $u=F(\gamma)-c$ et obtenir une **EDO linéaire** $u'=a(t)u$ avec $u(0)=0$, d'où $u\equiv0$.
**Justification.** Règle de la chaîne, ou unicité pour l'équation linéaire scalaire $u'=a(t)u$.
**Pièges.** Bien distinguer « tangent sur $S$ » et « conservé partout » : $X(x)=a-\langle a,x\rangle x$ est tangent à $\mathbb S^2$ mais ne conserve pas $\norm x^2$ hors de $\mathbb S^2$.

### [x] Flot complet sur une sous-variété compacte — [[ch09-flot-complet-compacte]]
**Quand.** $S$ est **compacte** (sphère, tore, $\mathrm{SO}(n)$, niveau compact d'un hamiltonien), $X$ autonome tangent et lipschitzien (par exemple restriction d'un champ $C^1$ ambiant). Alors toutes les courbes intégrales issues de $S$ sont définies sur $\R$ (poly, Théorème IX.8.9, p. 175), et si $X$ est $C^r$, $t\mapsto F_t$ est un morphisme de groupes de $\R$ dans $\mathrm{Diff}^r(S)$, avec $F_t^{-1}=F_{-t}$ ([[ch09-flot-morphisme-groupes-diffeos]]).
**Justification.** Lemme des bouts dans le compact $S$ ([[ch07-lemme-des-bouts]]).
**Pièges.** Il faut d'abord savoir que la solution **reste dans $S$** (option précédente) ; et le champ doit être autonome (sinon version non autonome du lemme des bouts).

### [x] Cauchy–Lipschitz directement sur la sous-variété — [[ch09-flot-local-sous-variete]]
**Quand.** Le champ n'est défini que **sur $S$** : $X:I\times S\to\R^N$ continu, tangent, localement lipschitzien en $x$ ; aucune extension ambiante n'est donnée. Alors flot local, unicité, courbe intégrale maximale et flot global sur $S$ existent comme au chapitre VII (poly, Théorème IX.8.5, p. 174 ; [[ch09-courbe-integrale-maximale-sous-variete]]), et le domaine du flot est ouvert avec $F$ de classe $C^p$ ([[ch09-flot-global-ouvert-regulier]]).
**Justification.** Dans un paramétrage local $x:U\to S$, l'équation devient $u'=dx_u^{-1}X(t,x(u))$ sur l'ouvert $U\subset\R^m$.
**Pièges.** Écrire l'équation **lue dans une carte** (ex. : sur le cercle, $\gamma=e^{i\theta}$ donne $\theta'=r(\theta)$) est souvent le plus efficace ; mais une seule carte ne couvre pas toujours $S$.

### [ ] Inversion locale sur les sous-variétés pour montrer que $F_t$ est un difféomorphisme — [[ch09-inversion-locale-sous-varietes]]
**Pourquoi ce n'est pas l'outil ici.** Elle ne donne qu'un difféomorphisme **local** et demande de calculer $d(F_t)_p$ ; pour un flot, la propriété de groupe $F_{-t}\circ F_t=F_0=\id_S$ ([[ch09-flot-propriete-groupe]]) fournit directement l'inverse, $C^r$ comme $F_t$.
**Quand il le serait.** Pour une application construite à partir du flot qui **n'est pas** elle-même un $F_t$ : par exemple $a\mapsto\alpha_a(1)$ (courbe intégrale au temps $1$ du champ $\sum a_iX_i$), difféomorphisme local en $0$ quand sa différentielle est inversible (poly, Exercice VII.4.5, p. 139).

## Démarche

1. **Identifier $S$** comme sous-variété : $S=\{F=c\}$ avec $c$ valeur régulière ([[rfx-edo-sous-variete-tangent]]) ; noter si $S$ est **fermée**, **compacte**.
2. **Tangence** : calculer $dF_x(X(x))$ pour $x\in S$. Si c'est $0$ sur tout $U$, alors intégrale première (pas besoin de fermeture). Si c'est $0$ seulement sur $S$, alors Proposition IX.8.1 ($S$ fermée) ou EDO linéaire pour $u=F(\gamma)-c$.
3. **Globalité** : si $S$ est compacte, alors Théorème IX.8.9 : solutions définies sur $\R$, $F_t\in\mathrm{Diff}(S)$.
4. **Dynamique sur $S$** : choisir une fonction naturelle sur $S$ (hauteur $\langle a,x\rangle$, angle) et calculer sa dérivée le long des trajectoires ; trouver les équilibres de $X_{|S}$ (où $X(x)=0$) et appliquer [[rfx-edo-etude-qualitative]].
5. **Lecture en carte** : si $S$ est une courbe, alors paramétrer ($\gamma(t)=x(\theta(t))$) et ramener à une EDO scalaire $\theta'=g(\theta)$ ; une solution sans équilibre sur le cercle est **périodique**.

## Pièges

* Confondre $X(x)\in S$ (absurde en général) et $X(x)\in T_xS$.
* Appliquer IX.8.1 à une sous-variété non fermée.
* Conclure « la solution reste sur $S$ » à partir de la tangence en le seul point initial.
* Oublier de vérifier la régularité (localement lipschitzien) du champ avant d'invoquer l'unicité.
* Dire que $F_t$ est un difféomorphisme de $S$ sans avoir montré que $F_t(S)\subset S$ et que $F_t$ est défini sur tout $S$.

## Mini-exemple

*Énoncé.* Soit $a\in\R^3$ unitaire et $X(x)=a-\langle a,x\rangle x$ sur $\R^3$. Montrer que les solutions issues de $\mathbb S^2$ restent sur $\mathbb S^2$, sont définies sur $\R$, et décrire leur comportement.

*Solution.* $X$ est polynomial, donc $C^\infty$. Pour $x\in\mathbb S^2$, $\langle X(x),x\rangle=\langle a,x\rangle(1-\norm x^2)=0$ : $X$ est tangent à $\mathbb S^2$, fermée, donc les solutions issues de $\mathbb S^2$ y restent (IX.8.1). Directement : $u=1-\norm{\gamma}^2$ vérifie $u'=-2\langle\gamma,X(\gamma)\rangle=-2\langle a,\gamma\rangle u$ et $u(0)=0$, donc $u\equiv0$. $\mathbb S^2$ est compacte : solutions définies sur $\R$ (IX.8.9). La hauteur $h=\langle a,\gamma\rangle$ vérifie $h'=\langle a,a\rangle-h\langle a,\gamma\rangle=1-h^2$ : équilibres $\pm a$ ; si $h(0)\in\,]-1,1[$, par unicité pour cette EDO scalaire, $h(t)=\tanh(t+c)$ avec $c=\operatorname{artanh}h(0)$. Donc $\norm{\gamma(t)-a}^2=2-2h(t)\to0$ quand $t\to+\infty$ : toute trajectoire autre que $-a$ converge vers le pôle $a$.
