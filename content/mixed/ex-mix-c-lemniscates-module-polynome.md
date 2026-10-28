---
id: ex-mix-c-lemniscates-module-polynome
type: exercise
chapters: [1, 9, 4]
title: "Lemniscates : les courbes |P(z)| = c d'un polynôme"
source: "Inventé, autour d'un thème classique (lemniscates polynomiales, lemniscate de Bernoulli)"
difficulty: 3
time: 45
tools: [ch01-operateurs-dz-dzbar, ch01-formulaire-dz-dzbar, ch09-sous-variete-equation-valeur-reguliere, ch09-espace-tangent-graphe-equation, ch04-lignes-niveau-orthogonales, ch09-sous-variete-def, ch09-vecteur-tangent-espace-tangent-def, ch01-maximum-sur-le-bord]
---
## Énoncé

Soit $P\in\C[z]$ un polynôme non constant. Pour $c>0$ on pose
$$
\Gamma_c=\{z\in\C : |P(z)|=c\},\qquad U_c=\{z\in\C : |P(z)|<c\},
$$
et l'on identifie $\C$ à $\R^2$ ($z=x+iy$).

1. On pose $u(x,y)=|P(x+iy)|^2$. Montrer que
$$
\frac{\partial u}{\partial x}+i\,\frac{\partial u}{\partial y}=2\,P(z)\,\overline{P'(z)}\qquad(z=x+iy),
$$
et déterminer les points critiques de $u$.
2. Montrer que $\Gamma_c$ est compact et que, sauf peut-être pour un nombre fini de valeurs de $c>0$ que l'on décrira, $\Gamma_c$ est une sous-variété de dimension $1$ de $\R^2$. En un point $z_0\in\Gamma_c$ tel que $P'(z_0)\neq0$, déterminer la droite tangente $T_{z_0}\Gamma_c$, et montrer qu'elle est orthogonale à la tangente en $z_0$ à la ligne de niveau de $\arg P$ passant par $z_0$ (on précisera le sens de cette expression).
3. Désormais $P(z)=z^2-1$. Quelles sont les valeurs exceptionnelles de la question 2 ? Donner une équation cartésienne de $\Gamma_1$.
4. Montrer que $\Gamma_1\setminus\{0\}$ est une sous-variété de dimension $1$ de $\R^2$, mais que $\Gamma_1$ n'est pas une sous-variété de $\R^2$. On pourra vérifier que la courbe
$$
\gamma(t)=\frac{\sqrt2\,\cos t}{1+\sin^2 t}\,(1+i\sin t)\qquad(t\in\R)
$$
est tracée sur $\Gamma_1$.
5. On revient à $P$ quelconque. Montrer que toute composante connexe de $U_c$ contient au moins un zéro de $P$. En déduire, pour $P(z)=z^2-1$, le nombre de composantes connexes de $U_c$ en fonction de $c>0$.
6. Pour $P(z)=z^2-1$ et $0<c<1$, montrer que $\Gamma_c$ n'est pas connexe.

## Indices

### Indice 1
Questions 1-2 : $u=P\bar P$ ; calculer $\partial u/\partial\bar z$ avec les règles de calcul de $\partial/\partial z$, $\partial/\partial\bar z$. Un ensemble défini par une équation $u=c^2$ est une sous-variété dès que $c^2$ est une valeur régulière. Question 5 : un principe du maximum, appliqué à la bonne fonction.

### Indice 2
$\partial/\partial\bar z=\frac12(\partial_x+i\partial_y)$ et $\partial\bar P/\partial\bar z=\overline{P'}$. Sur $\Gamma_c$ on a $P\neq0$, donc les seuls points critiques de $u$ qui posent problème sont les zéros de $P'$, en nombre fini. Pour l'orthogonalité : près de $z_0$, $P$ admet un logarithme holomorphe $g$, et $\Re g=\ln|P|$, $\Im g$ est « un argument de $P$ ».

### Indice 3
Question 4 : si $\Gamma_1$ était une sous-variété de dimension $1$ près de $0$, son espace tangent en $0$ serait une droite ; or $\gamma(\pm\pi/2)=0$ et $\gamma'(\pi/2)$, $\gamma'(-\pi/2)$ sont non colinéaires. Ne pas oublier d'exclure les dimensions $0$ et $2$. Question 5 : si une composante $V$ ne contient aucun zéro, comparer $|1/P|$ dans $V$ et sur $\partial V$.

### Indice 4
Questions 5-6 : pour $P=z^2-1$, regarder l'axe imaginaire : $|(iy)^2-1|=1+y^2$. Il sépare $1$ de $-1$ quand $c\le1$ ; quand $c>1$, le segment $[-1,1]$ est contenu dans $U_c$.

## Corrigé

**1.** $P$ est holomorphe sur $\C$, donc $u=P\,\bar P$ est de classe $C^\infty$ (polynomiale en $x,y$). Par les règles de calcul ([[ch01-formulaire-dz-dzbar]]) : $\dfrac{\partial u}{\partial\bar z}=\dfrac{\partial P}{\partial\bar z}\,\bar P+P\,\dfrac{\partial\bar P}{\partial\bar z}$, avec $\dfrac{\partial P}{\partial\bar z}=0$ ($P$ holomorphe) et $\dfrac{\partial\bar P}{\partial\bar z}=\overline{\dfrac{\partial P}{\partial z}}=\overline{P'}$. Donc $\dfrac{\partial u}{\partial\bar z}=P\,\overline{P'}$. Comme $\dfrac{\partial}{\partial\bar z}=\dfrac12\big(\dfrac{\partial}{\partial x}+i\dfrac{\partial}{\partial y}\big)$ ([[ch01-operateurs-dz-dzbar]]),
$$
\frac{\partial u}{\partial x}+i\,\frac{\partial u}{\partial y}=2\,\frac{\partial u}{\partial\bar z}=2\,P(z)\,\overline{P'(z)} .
$$
Notons $G(z)=2P(z)\overline{P'(z)}$. Pour $h=h_1+ih_2\in\C$, $du_z(h)=\partial_xu\,h_1+\partial_yu\,h_2=\Re\big(\overline{G(z)}\,h\big)$ : $G(z)$ est le gradient de $u$ ([[ch05-gradient-hilbert]], pour le produit scalaire $\langle a,b\rangle=\Re(a\bar b)$ de $\R^2$). Donc $z$ est point critique de $u$ si et seulement si $P(z)\overline{P'(z)}=0$, c'est-à-dire **$P(z)=0$ ou $P'(z)=0$**.

**2.** *Compacité.* $\Gamma_c$ est fermé (image réciproque de $\{c\}$ par la fonction continue $|P|$). Si $P(z)=a_nz^n+\dots+a_0$ avec $n\ge1$, $a_n\neq0$, alors $|P(z)|\ge|z|^n\big(|a_n|-\sum_{k<n}|a_k|\,|z|^{k-n}\big)\to+\infty$ quand $|z|\to\infty$, donc $\Gamma_c$ est borné : il est compact.

*Sous-variété.* $\Gamma_c=u^{-1}(\{c^2\})$ avec $u:\R^2\to\R$ de classe $C^\infty$. En un point $z\in\Gamma_c$ on a $P(z)\neq0$ (car $c>0$), donc d'après 1, $du_z\neq0$ (c'est-à-dire $du_z:\R^2\to\R$ surjective) si et seulement si $P'(z)\neq0$. Soit $Z'=\{\zeta\in\C : P'(\zeta)=0\}$, ensemble fini (au plus $n-1$ éléments, $P'$ étant un polynôme non nul de degré $n-1$ ; vide si $n=1$), et
$$
\mathcal C=\{|P(\zeta)| : \zeta\in Z',\ P(\zeta)\neq0\}\subset\,]0,+\infty[,
$$
ensemble fini. Si $c\notin\mathcal C$, aucun point de $\Gamma_c$ n'est dans $Z'$, donc $c^2$ est une valeur régulière de $u$ ([[ch09-point-critique-valeur-reguliere-def]]) et par [[ch09-sous-variete-equation-valeur-reguliere]] (avec $N=2$, $N-m=1$), $\Gamma_c$ est une sous-variété de classe $C^\infty$ de dimension $1$ de $\R^2$. (Elle est non vide : sur le chemin $t\mapsto z_0+t$, $t\ge0$, issu d'un zéro $z_0$ de $P$, $|P|$ passe continûment de $0$ à $+\infty$.)

*Tangente.* Si $z_0\in\Gamma_c$ et $P'(z_0)\neq0$, la proposition [[ch09-sous-variete-equation-valeur-reguliere]] (point 1, version locale) montre que $\Gamma_c$ est une sous-variété de dimension $1$ près de $z_0$, et [[ch09-espace-tangent-graphe-equation]] donne $T_{z_0}\Gamma_c=\ker du_{z_0}$ (la preuve est locale). Avec $w=P(z_0)\overline{P'(z_0)}\neq0$ :
$$
h\in\ker du_{z_0}\iff\Re(2\bar w h)=0\iff \bar w h\in i\R\iff h\in i\,\frac{\R}{\bar w}=i\,w\,\R ,
$$
car $1/\bar w=w/|w|^2$. Donc $T_{z_0}\Gamma_c=i\,P(z_0)\overline{P'(z_0)}\,\R$, et la normale est dirigée par $P(z_0)\overline{P'(z_0)}$.

*Orthogonalité.* Comme $P'(z_0)\neq0$, $P$ réalise un biholomorphisme d'un voisinage ouvert $\Omega_1$ de $z_0$ sur un ouvert $\Omega_2\not\ni0$, que l'on peut prendre égal à un disque $D(P(z_0),r)$ avec $r<|P(z_0)|$ (quitte à rétrécir $\Omega_1$). Sur ce disque, qui ne contient pas $0$, il existe une détermination holomorphe $\ell$ du logarithme ([[ch02-logarithme-existence]], le disque étant simplement connexe), et $g=\ell\circ P\in\Hol(\Omega_1)$ vérifie $e^g=P$, $g'=P'/P\neq0$, $\Re g=\ln|P|$ ; $\Im g$ est une fonction argument continue de $P$ sur $\Omega_1$. « La ligne de niveau de $\arg P$ passant par $z_0$ » désigne $\{z\in\Omega_1 : \Im g(z)=\Im g(z_0)\}$ ; changer de détermination ajoute une constante $2k\pi$ à $\Im g$ et ne change pas cette courbe. D'après [[ch04-lignes-niveau-orthogonales]] appliqué à $g$ en $z_0$ (car $g'(z_0)\neq0$), les lignes de niveau $\{\Re g=\ln c\}=\Gamma_c\cap\Omega_1$ et $\{\Im g=\Im g(z_0)\}$ sont des arcs réguliers à tangentes orthogonales en $z_0$.

*Vérification directe.* La ligne $\{\Im g=\Im g(z_0)\}$ est l'image réciproque par $P$ du rayon $\{sP(z_0) : s>0\}$, paramétrée près de $z_0$ par $s\mapsto (P_{|\Omega_1})^{-1}(sP(z_0))$, de vecteur vitesse en $s=1$ égal à $P(z_0)/P'(z_0)=P(z_0)\overline{P'(z_0)}/|P'(z_0)|^2$ : c'est bien la direction normale $P(z_0)\overline{P'(z_0)}$, orthogonale à $T_{z_0}\Gamma_c=iP(z_0)\overline{P'(z_0)}\R$.

**3.** $P'(z)=2z$ s'annule seulement en $0$, et $P(0)=-1\neq0$ : $\mathcal C=\{|P(0)|\}=\{1\}$. Pour $c\neq1$, $\Gamma_c$ est une sous-variété compacte de dimension $1$. Pour $z=x+iy$, $z^2-1=(x^2-y^2-1)+2ixy$, donc
$$
u-1=(x^2-y^2-1)^2+4x^2y^2-1=(x^2+y^2)^2-2(x^2-y^2),
$$
et $\Gamma_1$ est la **lemniscate de Bernoulli** $(x^2+y^2)^2=2(x^2-y^2)$.

**4.** *Hors de $0$.* Sur l'ouvert $V=\C\setminus\{0\}$, $u_{|V}$ n'a pas de point critique dans $\Gamma_1\setminus\{0\}$ (les points critiques de $u$ sont $\pm1$, où $u=0$, et $0$, exclu). Donc $1$ est valeur régulière de $u_{|V}$ et $\Gamma_1\setminus\{0\}=(u_{|V})^{-1}(\{1\})$ est une sous-variété de dimension $1$ ([[ch09-sous-variete-equation-valeur-reguliere]]).

*La courbe $\gamma$.* Posons $\rho=\dfrac{\sqrt2\cos t}{1+\sin^2t}$ et $s=\sin t$, de sorte que $\gamma=\rho(1+is)$, $\rho^2(1+s^2)^2=2\cos^2t=2(1-s^2)$. Alors $x^2+y^2=\rho^2(1+s^2)$ et $x^2-y^2=\rho^2(1-s^2)$, d'où
$$
(x^2+y^2)^2=\rho^4(1+s^2)^2=\rho^2\cdot2(1-s^2)=2(x^2-y^2) :
$$
$\gamma(\R)\subset\Gamma_1$, et $\gamma$ est $C^\infty$ (dénominateur $\ge1$). On a $\gamma(\pm\pi/2)=0$ et, en dérivant ($\cos t$ s'annule en $\pm\pi/2$, donc seul le terme où l'on dérive $\cos t$ subsiste) :
$$
\gamma'(t_0)=\frac{-\sqrt2\sin t_0}{1+\sin^2t_0}(1+i\sin t_0)\quad(t_0=\pm\tfrac\pi2),\qquad \gamma'(\tfrac\pi2)=-\frac{1+i}{\sqrt2},\qquad\gamma'(-\tfrac\pi2)=\frac{1-i}{\sqrt2}.
$$
Ces deux vecteurs ne sont pas colinéaires sur $\R$ (leur quotient vaut $-(1+i)/(1-i)=-i\notin\R$).

*$\Gamma_1$ n'est pas une sous-variété.* Supposons que $\Gamma_1$ soit une sous-variété de dimension $m$ ; d'après [[ch09-sous-variete-def]], il existe un ouvert $U\subset\R^m$, un voisinage ouvert $V_0$ de $0$ et un paramétrage $x:U\to V_0\cap\Gamma_1$, homéomorphisme, immersion. Nécessairement $m\le2$.
* $m=0$ : alors $V_0\cap\Gamma_1$ serait homéomorphe à un ouvert de $\R^0$, c'est-à-dire réduit au point $0$ ; or $\gamma(t)\in\Gamma_1$, $\gamma(t)\neq0$ pour $t\neq\pi/2$ proche de $\pi/2$, et $\gamma(t)\to0$. Impossible.
* $m=2$ : $x$ est une immersion d'un ouvert de $\R^2$ dans $\R^2$, donc un difféomorphisme local ([[ch06-inversion-locale]]) et $V_0\cap\Gamma_1=x(U)$ est un ouvert de $\R^2$ contenant $0$. Or pour $y\neq0$, $|(iy)^2-1|=1+y^2\neq1$ : $iy\notin\Gamma_1$, et $\Gamma_1$ ne contient aucun voisinage de $0$. Impossible.
* $m=1$ : $T_0\Gamma_1$ est alors un sous-espace vectoriel de dimension $1$ ([[ch09-espace-tangent-image-dx]]). Mais $\alpha_\pm(s)=\gamma(\pm\pi/2+s)$ ($s\in\R$) sont des courbes $C^1$ tracées sur $\Gamma_1$, avec $\alpha_\pm(0)=0$ et $\alpha_\pm'(0)=\gamma'(\pm\pi/2)$ ; par la définition [[ch09-vecteur-tangent-espace-tangent-def]], $\gamma'(\pi/2)$ et $\gamma'(-\pi/2)$ sont dans $T_0\Gamma_1$ : deux vecteurs non colinéaires dans une droite, contradiction.

Donc $\Gamma_1$ n'est pas une sous-variété : en $0$, la lemniscate se croise elle-même, avec les deux tangentes $y=x$ et $y=-x$.

**5.** *Lemme.* $U_c$ est ouvert (continuité de $|P|$) et borné (question 2). Soit $V$ une composante connexe de $U_c$ : c'est un ouvert connexe non vide (dans $\R^2$, les composantes connexes d'un ouvert sont ouvertes, les disques étant connexes), et $\bar V\subset\bar U_c$ est compact.

*Bord de $V$.* Soit $p\in\partial V=\bar V\setminus V$. Si l'on avait $p\in U_c$, il existerait un disque $D(p,r)\subset U_c$ ; ce disque, connexe, rencontre $V$ (car $p\in\bar V$), donc $V\cup D(p,r)$ est un connexe de $U_c$ contenant $V$, d'où $D(p,r)\subset V$ et $p\in V$ : absurde. Donc $|P(p)|\ge c$ ; et $|P(p)|\le c$ par continuité ($p$ est limite de points de $V$). Ainsi $|P|=c$ sur $\partial V$, et $\partial V\neq\emptyset$ (sinon $V$ serait ouvert et fermé dans $\C$ connexe, donc $V=\C$, non borné).

*Raisonnement par l'absurde.* Supposons que $P$ ne s'annule pas sur $V$. Comme $|P|=c>0$ sur $\partial V$, $P$ ne s'annule pas sur $\bar V$, et $h=1/P$ est continue sur $\bar V$, holomorphe sur $V$ ouvert connexe borné. Le corollaire [[ch01-maximum-sur-le-bord]] donne $\sup_{\bar V}|h|=\sup_{\partial V}|h|=1/c$. Mais pour $z\in V$, $|P(z)|<c$ donc $|h(z)|>1/c$ : contradiction. Toute composante connexe de $U_c$ contient donc un zéro de $P$ ; en particulier $U_c$ a **au plus $\deg P$ composantes connexes** (les composantes sont disjointes).

*Application à $P=z^2-1$* (zéros $\pm1$, qui sont dans $U_c$ pour tout $c>0$).
* Si $c\le1$ : $U_c$ ne rencontre pas l'axe imaginaire, car $|(iy)^2-1|=1+y^2\ge1\ge c$. Si $1$ et $-1$ étaient dans la même composante $V$, l'image de $V$ par la fonction continue $\Re$ serait un connexe de $\R$, donc un intervalle, contenant $-1$ et $1$, donc $0$ : $V$ rencontrerait $i\R$, absurde. Il y a donc au moins deux composantes, et au plus deux par le lemme : **exactement deux** (l'une dans $\{\Re z>0\}$ contenant $1$, l'autre symétrique contenant $-1$).
* Si $c>1$ : pour $x\in[-1,1]$, $|x^2-1|=1-x^2\le1<c$, donc le segment $[-1,1]$, connexe, est inclus dans $U_c$ et relie les deux zéros. Toute composante contenant un zéro, elle contient celle de $1$ qui est aussi celle de $-1$ : **une seule composante**, $U_c$ est connexe.

**6.** Soit $0<c<1$. On a vu que $\Gamma_c\cap i\R=\emptyset$ ($1+y^2>c$). Sur $[1,+\infty[$, $x\mapsto x^2-1$ passe continûment de $0$ à $+\infty$, donc il existe $x_c>1$ avec $x_c^2-1=c$ : $x_c\in\Gamma_c$, et de même $-x_c\in\Gamma_c$. Les ensembles $\Gamma_c\cap\{\Re z>0\}$ et $\Gamma_c\cap\{\Re z<0\}$ sont deux ouverts de $\Gamma_c$, disjoints, non vides, de réunion $\Gamma_c$ : $\Gamma_c$ n'est pas connexe. (On peut montrer qu'il a exactement deux composantes, deux « ovales » entourant $1$ et $-1$, qui se recollent en un « huit » pour $c=1$ puis en une seule courbe pour $c>1$.)

## Pièges et variantes

* **Oublier que $c>0$.** Pour $c=0$, $\Gamma_0$ est l'ensemble fini des zéros de $P$ : sous-variété de dimension $0$, pas $1$ ; les zéros de $P$ sont des points critiques de $u$ (minimums), mais ce ne sont pas eux qui gênent pour $c>0$.
* **Valeur régulière** : il faut que $du_z$ soit surjective en **tout** point de $\Gamma_c$ ; un seul point critique sur la courbe suffit à invalider l'argument global (et ici, à détruire la structure de sous-variété). La version locale de [[ch09-sous-variete-equation-valeur-reguliere]] reste utilisable sur $\Gamma_1\setminus\{0\}$.
* **Non-sous-variété** : exhiber deux vitesses non colinéaires ne suffit que si l'on a d'abord réglé la dimension ; ne pas oublier les cas $m=0$ et $m=2$.
* **Principe du maximum** : il s'applique à $1/P$ sur une composante $V$ (ouvert **connexe borné**), pas à $P$ ; sans zéro, $|P|$ aurait un minimum intérieur, ce que le principe du maximum interdit.
* Variante : pour $P(z)=z^n-1$, la seule valeur exceptionnelle est $c=1$ ; $\Gamma_1$ a un point multiple en $0$ avec $n$ branches, et $U_c$ a $n$ composantes pour $c\le1$, une seule pour $c>1$.
* Variante : la même preuve montre que si $f$ est holomorphe non constante sur un ouvert connexe $\Omega$, toute composante connexe $V$ de $\{|f|<c\}$ telle que $\bar V$ soit compact et contenu dans $\Omega$ contient un zéro de $f$. Sans l'hypothèse « $\bar V$ compact dans $\Omega$ », c'est faux : $f=e^z$ sur $\C$, $\{|e^z|<1\}=\{\Re z<0\}$ est connexe et sans zéro.
