---
id: ex-mix-a-courbe-cubique-complexe
type: exercise
chapters: [9, 6, 1, 5]
title: "La courbe complexe w² = z³ − z vue comme surface de R⁴"
source: "Inventé (exemple classique de courbe algébrique complexe lisse)"
difficulty: 2
time: 25
tools: [ch09-sous-variete-equation-valeur-reguliere, ch06-fonctions-implicites, ch01-c-derivable-ssi-df-c-lineaire, ch09-espace-tangent-graphe-equation, ch09-inversion-locale-sous-varietes, ch09-differentielle-diffeomorphisme-isomorphisme]
---
## Énoncé

On identifie $\C^2$ à $\R^4$ et l'on considère
$$
S=\{(z,w)\in\C^2 : w^2=z^3-z\}.
$$

1. Montrer que $S$ est une sous-variété de $\R^4$ de classe $C^\infty$ et de dimension $2$.
2. Soit $p_0=(z_0,w_0)\in S$ avec $w_0\neq0$. Montrer qu'il existe des ouverts $U\ni z_0$ et $V\ni w_0$ de $\C$ et une fonction **holomorphe** $\varphi:U\to V$ tels que $S\cap(U\times V)=\{(z,\varphi(z)) : z\in U\}$, et exprimer $\varphi'$ en fonction de $z$ et de $\varphi(z)$.
3. Montrer qu'au voisinage de $(0,0)$, $S$ est le graphe $\{(\psi(w),w)\}$ d'une fonction holomorphe $\psi$ définie près de $0$, avec $\psi(0)=0$, et donner le développement limité de $\psi$ en $0$ à l'ordre $6$.
4. On note $\pi:S\to\C$, $(z,w)\mapsto z$.
   * (a) Montrer qu'il n'existe pas d'ouverts $U\ni0$, $V\ni0$ de $\C$ et d'application $\varphi:U\to V$ tels que $S\cap(U\times V)$ soit le graphe $\{(z,\varphi(z)) : z\in U\}$.
   * (b) Déterminer l'ensemble des points $p\in S$ en lesquels $\pi$ est un difféomorphisme local (c'est-à-dire réalise un difféomorphisme d'un voisinage ouvert de $p$ dans $S$ sur un ouvert de $\C$).

## Indices

### Indice 1
Tout se ramène à l'étude de $F(z,w)=w^2-z^3+z$, vue comme application de $\R^4$ dans $\R^2$ : valeur régulière, fonctions implicites, espace tangent $=\ker dF_p$. Les différentielles partielles de $F$ sont des multiplications par des nombres complexes.

### Indice 2
$dF_{(z,w)}(h,k)=(1-3z^2)\,h+2w\,k$ pour $(h,k)\in\C^2$. Une application $\R$-linéaire $\C\to\C$ de la forme $h\mapsto ah$ est bijective si et seulement si $a\neq0$. Pour l'holomorphie de la fonction implicite : sa différentielle donnée par le théorème est-elle $\C$-linéaire ?

### Indice 3
Question 3 : de $\psi=\psi^3-w^2$ on tire d'abord $\psi(w)=O(w^2)$, puis on réinjecte. Question 4(a) : pour $t\in\,]0,1[$ petit, $z=t$ donne $z^3-z<0$, donc **deux** valeurs de $w$. Question 4(b) : calculer $T_pS$ quand $w=0$.

## Corrigé

**Préliminaire.** Posons $F(z,w)=w^2-z^3+z$, de sorte que $S=F^{-1}(\{0\})$. En coordonnées réelles, $F:\R^4\to\R^2$ est polynomiale, donc de classe $C^\infty$. À $w$ fixé, $z\mapsto F(z,w)$ est holomorphe de dérivée $1-3z^2$ ; à $z$ fixé, $w\mapsto F(z,w)$ est holomorphe de dérivée $2w$. Par [[ch01-c-derivable-ssi-df-c-lineaire]], les différentielles partielles réelles sont les multiplications par ces nombres, et par [[ch05-differentielles-partielles]]
$$
dF_{(z,w)}(h,k)=(1-3z^2)\,h+2w\,k\qquad(h,k\in\C).
$$

**1.** Montrons que $0$ est valeur régulière de $F$ ([[ch09-point-critique-valeur-reguliere-def]]), c'est-à-dire que $dF_p:\R^4\to\R^2$ est surjective en tout $p\in S$. Si $1-3z^2\neq0$, l'application $h\mapsto(1-3z^2)h$ est déjà surjective de $\C$ sur $\C$ ; si $w\neq0$, $k\mapsto 2wk$ l'est. Il suffit donc d'exclure, sur $S$, le cas $w=0$ et $3z^2=1$ : dans ce cas $z^3-z=z(z^2-1)=-\tfrac23 z$ doit être nul (car $w^2=0$), donc $z=0$, ce qui contredit $3z^2=1$. Ainsi $dF_p$ est surjective pour tout $p\in S$ et, par [[ch09-sous-variete-equation-valeur-reguliere]] (avec $N=4$, $N-m=2$), $S$ est une sous-variété $C^\infty$ de dimension $m=2$ de $\R^4$.

**2.** Soit $p_0=(z_0,w_0)\in S$, $w_0\neq0$. La différentielle partielle $\frac{\partial F}{\partial w}(z_0,w_0)$ est $k\mapsto 2w_0k$, isomorphisme de $\R^2$ (d'inverse $k\mapsto k/(2w_0)$) puisque $w_0\ne0$. Le théorème des fonctions implicites ([[ch06-fonctions-implicites]], avec $E=F=G=\R^2$) fournit des ouverts $U\ni z_0$, $V\ni w_0$ et $\varphi:U\to V$ de classe $C^\infty$ avec $\varphi(z_0)=w_0$ et
$$
\forall (z,w)\in U\times V,\quad F(z,w)=0\iff w=\varphi(z),
$$
ce qui est exactement $S\cap(U\times V)=\{(z,\varphi(z))\}$. Quitte à rétrécir $U$ (continuité de $\varphi$), $\varphi$ ne s'annule pas sur $U$. La formule du théorème donne, pour $z\in U$ et $h\in\C$,
$$
d\varphi_z(h)=-\Big(\frac{\partial F}{\partial w}(z,\varphi(z))\Big)^{-1}\Big(\frac{\partial F}{\partial z}(z,\varphi(z))\,h\Big)=\frac{3z^2-1}{2\varphi(z)}\,h .
$$
$d\varphi_z$ est donc $\C$-linéaire : par [[ch01-c-derivable-ssi-df-c-lineaire]], $\varphi$ est $\C$-dérivable en tout point de $U$, de dérivée $\varphi'(z)=\dfrac{3z^2-1}{2\varphi(z)}$, qui est continue : $\varphi\in\Hol(U)$ ([[ch01-def-holomorphe]]). (Contrôle : dériver $\varphi^2=z^3-z$ donne bien $2\varphi\varphi'=3z^2-1$.)

**3.** En $(0,0)\in S$, $\frac{\partial F}{\partial z}(0,0)$ est la multiplication par $1-0=1$, inversible. Exactement comme en 2 (en échangeant les rôles de $z$ et $w$), il existe des ouverts $W\ni0$, $Z\ni0$ et $\psi:W\to Z$ de classe $C^\infty$, $\psi(0)=0$, avec $S\cap(Z\times W)=\{(\psi(w),w) : w\in W\}$, et
$$
d\psi_w(k)=-\frac{2w}{1-3\psi(w)^2}\,k,
$$
$\C$-linéaire : $\psi$ est holomorphe, $\psi'(w)=\dfrac{2w}{3\psi(w)^2-1}$ (dénominateur non nul près de $0$).

*Développement.* L'équation s'écrit $\psi=\psi^3-w^2$. Comme $\psi(w)\to0$, pour $w$ assez petit $|\psi(w)|^2\le\tfrac12$ et $|\psi|\,(1-|\psi|^2)\le|w|^2$, donc $|\psi(w)|\le2|w|^2$ : $\psi(w)=O(w^2)$. Alors $\psi^3=O(w^6)$ et $\psi=-w^2+O(w^6)$ ; en réinjectant, $\psi^3=(-w^2+O(w^6))^3=-w^6+O(w^{10})$, d'où
$$
\psi(w)=-w^2-w^6+O(w^{10}),
$$
et en particulier, à l'ordre $6$ : $\psi(w)=-w^2-w^6+o(w^6)$. (Vérification par calcul formel : $\psi(w)=-w^2-w^6-3w^{10}-12w^{14}+\dots$, et $\psi^3-\psi-w^2=O(w^{15})$.)

**4. (a)** Supposons qu'il existe de tels $U$, $V$, $\varphi$. Pour $t\in\,]0,1[$, on a $t^3-t<0$, donc les deux points
$$
p_\pm(t)=\big(t,\ \pm i\sqrt{t-t^3}\big)
$$
sont dans $S$ et **distincts**. Quand $t\to0^+$, $p_\pm(t)\to(0,0)$, donc pour $t$ assez petit $p_+(t)$ et $p_-(t)$ sont tous deux dans l'ouvert $U\times V$. Ils devraient alors être égaux à $(t,\varphi(t))$ : contradiction. (Aucune régularité de $\varphi$ n'est utilisée.)

**(b)** $\pi$ est la restriction à $S$ d'une application linéaire de $\R^4$ dans $\R^2$, donc de classe $C^\infty$, et $d\pi_p$ est la restriction à $T_pS$ de $(h,k)\mapsto h$ ([[ch09-remarques-differentielle-cas-euclidien]]). Par [[ch09-espace-tangent-graphe-equation]],
$$
T_pS=\ker dF_p=\{(h,k)\in\C^2 : (1-3z^2)h+2wk=0\},\qquad p=(z,w),
$$
de dimension réelle $2$ ; $\C$, ouvert de $\R^2$, est une sous-variété de dimension $2$ ([[ch09-ex-ouvert-sous-variete]]).

* Si $w\neq0$ : $d\pi_p(h,k)=0\Rightarrow h=0\Rightarrow 2wk=0\Rightarrow k=0$. Donc $d\pi_p:T_pS\to\C$ est injective entre espaces de dimension $2$, c'est un isomorphisme, et par l'inversion locale sur les sous-variétés ([[ch09-inversion-locale-sous-varietes]]) $\pi$ est un difféomorphisme local en $p$. (C'est la question 2 : la réciproque locale est $z\mapsto(z,\varphi(z))$.)
* Si $w=0$ : alors $z^3-z=0$, $z\in\{0,1,-1\}$ et $1-3z^2\in\{1,-2\}$ est non nul, donc $T_pS=\{0\}\times\C$ et $d\pi_p=0$. Si $\pi$ était un difféomorphisme d'un voisinage de $p$ dans $S$ sur un ouvert de $\C$, sa différentielle en $p$ serait un isomorphisme ([[ch09-differentielle-diffeomorphisme-isomorphisme]]) : impossible.

Conclusion : $\pi$ est un difféomorphisme local exactement aux points de $S\setminus\{(0,0),(1,0),(-1,0)\}$. En $(0,0)$ c'est cohérent avec (a), et la tangente $T_{(0,0)}S=\{0\}\times\C$ est « verticale », ce que confirme $\psi(w)=-w^2+\dots$ de la question 3.

## Pièges et variantes

* **Surjectivité de $dF_p$ au sens réel.** $dF_p$ va de $\R^4$ dans $\R^2$ ; dire « $(1-3z^2,2w)\ne(0,0)$ » suffit ici parce que chaque différentielle partielle est la multiplication par un complexe, donc nulle ou bijective. Pour une fonction non holomorphe (par exemple $|w|^2-z$), ce raccourci est faux.
* **Holomorphie de la fonction implicite.** Le théorème des fonctions implicites est un théorème **réel** : il donne $\varphi\in C^\infty$, pas l'holomorphie. C'est la formule de $d\varphi_z$, composée de multiplications complexes, qui donne la $\C$-linéarité, puis l'holomorphie via [[ch01-c-derivable-ssi-df-c-lineaire]].
* **Ne pas confondre** « $S$ est une sous-variété en $(0,0)$ » (vrai) et « $S$ est un graphe au-dessus de l'axe des $z$ en $(0,0)$ » (faux) : une sous-variété est localement un graphe au-dessus d'**un** plan de coordonnées bien choisi, ici celui des $w$.
* Variante : pour $w^2=z^3$, le point $(0,0)$ est un point critique de $F$ ($dF_{(0,0)}=0$) ; la courbe est paramétrée par $t\mapsto(t^2,t^3)$, qui n'est pas une immersion en $0$, et $S$ n'est pas une sous-variété en $(0,0)$ (pointe).
* Variante : pour $w^2=P(z)$ avec $P$ polynôme non nul, $S$ est une sous-variété de dimension $2$ si et seulement si $P$ n'a que des racines simples, et les points où $\pi$ n'est pas un difféomorphisme local sont les $(a,0)$, $P(a)=0$.
