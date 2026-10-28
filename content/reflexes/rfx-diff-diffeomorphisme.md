---
id: rfx-diff-diffeomorphisme
type: reflexe
situation: Montrer qu'une application est un difféomorphisme local, ou un difféomorphisme global (sur son image ou sur tout l'espace)
chapters: [5, 6]
---
## Situation

On a $f:U\to F$ de classe $C^k$ ($k\ge1$) sur un ouvert $U$ d'un Banach $E$ (souvent $\R^n$, $\mathrm M_n(\R)$, ou un espace de fonctions). L'énoncé demande : « montrer que $f$ induit un difféomorphisme d'un voisinage de $a$ sur un voisinage de $f(a)$ », « montrer que $f(U)$ est ouvert », « montrer que $f$ est un $C^\infty$-difféomorphisme de $U$ sur $f(U)$ », « de $\R^n$ sur $\R^n$ », « calculer $d(f^{-1})_{f(a)}$ », « montrer que $g$ (inconnue) existe et est $C^1$ ». Trois niveaux à distinguer : **local** (près de $a$), **global sur l'image** (injectivité), **global sur $F$** (surjectivité en plus).

## Options

### [x] Théorème d'inversion locale — [[ch06-inversion-locale]]
**Quand.** $f$ est $C^k$, $k\ge1$, et $df_{x_0}$ est un **isomorphisme bicontinu** de $E$ sur $F$ : alors $f$ se restreint en un $C^k$-difféomorphisme d'un voisinage ouvert $U_0$ de $x_0$ sur un voisinage ouvert $V_0$ de $f(x_0)$, et $d(f^{-1})_{f(x)}=(df_x)^{-1}$ (poly, Théorème VI.3.2, p. 120). En dimension finie : $\mathrm{Jac}(f)(x_0)\ne0$ ; en dimension infinie : voir [[rfx-diff-isomorphisme-bicontinu]].
**Justification.** Point fixe de Banach appliqué à $x\mapsto x-(df_{x_0})^{-1}(f(x)-y)$, contractante près de $x_0$ grâce à la continuité de $df$.
**Pièges.** **$C^1$ indispensable** : $f(x)=x+2x^2\sin(1/x)$ ($f(0)=0$) a $f'(0)=1$ mais n'est injective sur aucun voisinage de $0$ ($f'(\tfrac1{2\pi n})=-1<0$ alors que $f'(\tfrac1{2\pi n+\pi})=3>0$ : $f$ n'est monotone sur aucun intervalle autour de $0$). Le résultat est **local** : nommer les ouverts $U_0$, $V_0$, et parler de l'inverse de la **restriction** $f|_{U_0}$.

### [x] Inversion globale : injectivité + différentielle inversible partout — [[ch06-inversion-globale]]
**Quand.** On veut un difféomorphisme de $U$ **sur $f(U)$** : il suffit que $f$ soit **injective** sur $U$ et que $df_x$ soit un isomorphisme bicontinu **en tout** $x\in U$ ; alors $f(U)$ est ouvert et $f^{-1}:f(U)\to U$ est $C^k$ (poly, Corollaire VI.3.3, p. 120).
**Justification.** Inversion locale en chaque point ; l'injectivité recolle les inverses locaux.
**Pièges.** L'injectivité est la vraie difficulté. Techniques : monotonie stricte en dimension $1$ ; **forte monotonie** $\langle f(x)-f(y),x-y\rangle\ge c\|x-y\|^2$ sur un convexe d'un Hilbert (implique $\|f(x)-f(y)\|\ge c\|x-y\|$) ; écriture $f=\mathrm{Id}+g$ avec $g$ $k$-lipschitzienne, $k<1$ (option suivante) ; résolution explicite de $f(x)=y$ ; dans un exercice sur les **courbes intégrales**, l'unicité de Cauchy–Lipschitz.

### [x] Perturbation de l'identité : $f=\mathrm{Id}+g$ avec $g$ contractante — [[ch05-serie-neumann]]
**Quand.** $E=F$ Banach et $f(x)=x+g(x)$ (ou $f=L+g$ avec $L$ isomorphisme, en composant par $L^{-1}$) avec $\|dg_x\|\le k<1$ sur $E$ entier (convexe). Alors $f$ est un $C^k$-difféomorphisme **de $E$ sur $E$**.
**Justification.** (i) Injectivité et minoration : $\|f(x)-f(y)\|\ge(1-k)\|x-y\|$ (TAF sur $g$, [[ch05-accroissements-finis]]). (ii) Surjectivité : $f(x)=y$ ⇔ $x=y-g(x)$, point fixe d'une contraction de $E$ complet ([[ch06-point-fixe-banach]]). (iii) $df_x=\mathrm{Id}+dg_x$ inversible par la série de Neumann car $\|dg_x\|<1$. On conclut par l'inversion globale.
**Pièges.** Il faut $k<1$ **uniforme** sur tout $E$ pour la surjectivité globale ; sur une boule seulement, on n'obtient la surjectivité que sur une boule plus petite (avec $g(0)=0$ : $f(B(0,r))\supset B(0,(1-k)r)$).

### [ ] « Jacobien non nul partout ⇒ difféomorphisme global » — [[ch05-matrice-jacobienne]]
**Pourquoi ce n'est pas l'outil ici.** Faux : $f(x,y)=(e^x\cos y,e^x\sin y)$ a pour jacobien $e^{2x}\ne0$ partout mais n'est pas injective ($2\pi$-périodique en $y$), et n'atteint pas $(0,0)$. Le jacobien ne donne que du **local**.
**Quand il le serait.** Combiné à l'**injectivité** (inversion globale), et à la surjectivité si l'on veut l'image entière. En dimension $1$, $f'$ ne s'annulant pas sur un **intervalle** donne la stricte monotonie, donc l'injectivité.

### [ ] Théorème des fonctions implicites — [[ch06-fonctions-implicites]]
**Pourquoi ce n'est pas l'outil ici.** Pour inverser $y=f(x)$ on applique directement l'inversion locale à $f$ ; passer par $F(x,y)=f(x)-y$ revient au même avec plus d'écriture.
**Quand il le serait.** L'équation contient un **paramètre** ou on ne résout que pour **une partie** des inconnues ($F(x,y)=0$ résolue en $y$), voir [[rfx-diff-fonctions-implicites]].

## Démarche

1. **Régularité** : vérifier que $f$ est $C^k$, $k\ge1$ ([[rfx-diff-differentiabilite]]).
2. **Local** : calculer $df_{x_0}$ ; si c'est un isomorphisme bicontinu (jacobien $\ne0$ en dimension finie) alors inversion locale ; donner $d(f^{-1})_{f(x_0)}=(df_{x_0})^{-1}$ si demandé. Sinon ($df_{x_0}$ non injective), $f$ n'est pas un difféomorphisme local (un difféomorphisme a une différentielle inversible : différentier $f^{-1}\circ f=\mathrm{Id}$).
3. **Global sur l'image** : vérifier $df_x$ inversible **pour tout** $x\in U$, puis prouver l'**injectivité** (monotonie, minoration $\|f(x)-f(y)\|\ge c\|x-y\|$, forme $\mathrm{Id}+$contraction, unicité d'EDO) ; conclure par l'inversion globale.
4. **Global sur $F$** (surjectivité) : $f(U)$ est ouvert (par 2) ; si $F$ est connexe, il suffit que $f(U)$ soit **fermé**. Fermeture : via une minoration $\|f(x)-f(y)\|\ge c\|x-y\|$ (une suite $f(x_n)$ de Cauchy force $x_n$ de Cauchy), ou via la **propreté** (image réciproque d'un compact compacte) en dimension finie. Sinon résoudre $f(x)=y$ par un point fixe.
5. Si l'énoncé introduit une hypothèse inhabituelle (« propre », « coercive », $\|f(x)\|\to\infty$), elle sert presque toujours à la **fermeture** de l'image en 4.

## Pièges

* Annoncer un difféomorphisme global à partir de la seule inversibilité de $df$ partout (contre-exemple exponentielle complexe).
* Oublier de vérifier $C^1$ (et pas seulement différentiable).
* En dimension infinie, oublier la **bicontinuité** de $df_{x_0}$ (inverse continu) et la complétude des espaces.
* Confondre $f^{-1}$ (inverse de la restriction $f|_{U_0}$) et un inverse global.
* Surjectivité : « ouvert » ne suffit pas, il faut aussi « fermé » et la connexité de l'espace d'arrivée.

## Mini-exemple

*Énoncé.* $f(x,y)=\big(x+\tfrac12\sin y,\ y+\tfrac12\sin x\big)$. Montrer que $f$ est un $C^\infty$-difféomorphisme de $\R^2$ sur $\R^2$ et calculer $d(f^{-1})_{(0,0)}$.

*Solution.* $f=\mathrm{Id}+g$ avec $g(x,y)=\tfrac12(\sin y,\sin x)$, $C^\infty$, et $dg_{(x,y)}=\tfrac12\begin{pmatrix}0&\cos y\\\cos x&0\end{pmatrix}$, de norme d'opérateur euclidienne $\tfrac12\max(|\cos x|,|\cos y|)\le\tfrac12$. Par le TAF sur le convexe $\R^2$, $g$ est $\tfrac12$-lipschitzienne, donc $\|f(p)-f(q)\|\ge\tfrac12\|p-q\|$ : $f$ est injective. Pour $(a,b)$ donné, $p=(a,b)-g(p)$ a une unique solution (contraction de rapport $\tfrac12$ sur $\R^2$ complet) : $f$ est surjective. $\det df=1-\tfrac14\cos x\cos y\ge\tfrac34>0$ : $df$ inversible partout. Par l'inversion globale, $f$ est un $C^\infty$-difféomorphisme de $\R^2$ sur $\R^2$. Enfin $f(0,0)=(0,0)$ et $df_0=\begin{pmatrix}1&1/2\\1/2&1\end{pmatrix}$, donc $d(f^{-1})_0=(df_0)^{-1}=\begin{pmatrix}4/3&-2/3\\-2/3&4/3\end{pmatrix}$.
