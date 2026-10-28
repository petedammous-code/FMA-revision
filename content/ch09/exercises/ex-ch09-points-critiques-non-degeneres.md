---
id: ex-ch09-points-critiques-non-degeneres
type: exercise
chapters: [9, 6]
title: Points critiques non dégénérés sur une sous-variété compacte
source: Inventé
difficulty: 3
time: 45
tools: [ch06-inversion-locale, ch06-point-critique-non-degenere-def, ch09-ex-point-critique-parametrage, ch09-hessienne-def, ch09-hessienne-extrema-ordre-deux, ch09-multiplicateurs-lagrange, ch09-ex-sphere]
---
## Énoncé

Rappel : si $g$ est une fonction de classe $C^2$ sur un ouvert $U$ de $\R^m$ et $q\in U$ un point critique de $g$ ($dg_q=0$), on dit que $q$ est **non dégénéré** si la forme bilinéaire symétrique $d^2g_q$ est non dégénérée, c'est-à-dire si la matrice hessienne $\big(\partial_i\partial_jg(q)\big)_{i,j}$ est inversible. De même, si $S$ est une sous-variété de classe $C^\infty$ de $\R^N$ et $f:S\to\R$ une fonction de classe $C^2$, un point critique $p$ de $f$ est dit non dégénéré si la hessienne $d^2f_p$ (forme bilinéaire symétrique sur $T_pS$) est non dégénérée.

1. Soit $g:U\to\R$ de classe $C^2$ sur un ouvert $U$ de $\R^m$, et $q$ un point critique non dégénéré de $g$. Montrer qu'il existe un voisinage ouvert $V$ de $q$ dans $U$ tel que $q$ soit le seul point critique de $g$ dans $V$.
2. Soit $S$ une sous-variété de $\R^N$ de classe $C^\infty$ et $f:S\to\R$ de classe $C^2$. Montrer qu'un point critique non dégénéré $p$ de $f$ est **isolé** : il existe un voisinage ouvert $W$ de $p$ dans $S$ ne contenant aucun autre point critique de $f$.
3. On suppose de plus $S$ compacte et tous les points critiques de $f$ non dégénérés. Montrer que $f$ n'a qu'un nombre fini de points critiques.
4. Application : $S=\mathbb S^2\subset\R^3$ et $f$ la restriction à $\mathbb S^2$ de $g(x,y,z)=xy+z^2$.
   a. Déterminer les points critiques de $f$.
   b. Soit $p$ un point critique de $f$ et $\lambda$ le réel tel que $\nabla g(p)=2\lambda p$. Montrer que pour tout $v\in T_p\mathbb S^2$,
   $$
   d^2f_p(v,v)=d^2g_p(v,v)-2\lambda\norm v^2 .
   $$
   c. En déduire que tous les points critiques de $f$ sont non dégénérés, et préciser pour chacun s'il s'agit d'un maximum local, d'un minimum local ou d'aucun des deux.
5. La conclusion de la question 3 subsiste-t-elle si l'on retire l'hypothèse « $S$ compacte » ? l'hypothèse « non dégénérés » ?

## Indices

### Indice 1
Question 1 : les points critiques de $g$ sont les zéros de l'application $\nabla g:U\to\R^m$. Que dit sur $\nabla g$ le fait que sa différentielle en $q$ soit inversible ? Question 2 : tout se lit dans un paramétrage local.

### Indice 2
Question 1 : $\nabla g$ est de classe $C^1$ et $d(\nabla g)_q$ a pour matrice la hessienne de $g$ en $q$ ; le théorème d'inversion locale rend $\nabla g$ injective près de $q$. Question 2 : si $x$ est un paramétrage local en $p$, $q=x^{-1}(p)$, alors les points critiques de $f$ dans $x(U)$ correspondent à ceux de $f\circ x$, et $d^2(f\circ x)_q(h,k)=d^2f_p(dx_q h,dx_q k)$. Question 3 : compact + points isolés.

### Indice 3
Question 4a : multiplicateurs de Lagrange, $(y,x,2z)=2\lambda(x,y,z)$ ; distinguer $z\ne0$ et $z=0$. Question 4b : utiliser le grand cercle $\alpha(t)=\cos(t)\,p+\sin(t)\,v$ (avec $\norm v=1$), calculer $\frac{d^2}{dt^2}g(\alpha(t))$ en $0$ de deux façons : dans $\R^3$, et à travers un paramétrage local de $\mathbb S^2$ en $p$.

## Corrigé

**1.** Les points critiques de $g$ sont les zéros de $G=\nabla g=(\partial_1g,\dots,\partial_mg):U\to\R^m$. Comme $g$ est $C^2$, $G$ est de classe $C^1$ et sa matrice jacobienne en $q$ est la matrice hessienne $\big(\partial_j\partial_ig(q)\big)_{i,j}$, inversible par hypothèse : $dG_q$ est un isomorphisme de $\R^m$. Le théorème d'inversion locale ([[ch06-inversion-locale]]) fournit un voisinage ouvert $V$ de $q$ dans $U$ tel que $G_{|V}$ soit un difféomorphisme de $V$ sur un ouvert de $\R^m$ ; en particulier $G$ est **injective** sur $V$. Si $q'\in V$ est critique, $G(q')=0=G(q)$, donc $q'=q$.

**2.** Soit $x:U\to S$ un paramétrage local de $S$ en $p$ (avec $U$ ouvert de $\R^m$, $x(U)=V_0\cap S$ pour un ouvert $V_0$ de $\R^N$), et $q=x^{-1}(p)$. La fonction $g=f\circ x$ est de classe $C^2$ sur $U$ (définition des fonctions $C^2$ sur $S$).

* Pour $q'\in U$, $x(q')$ est un point critique de $f$ si et seulement si $dg_{q'}=0$ (exemple IX.7.34, [[ch09-ex-point-critique-parametrage]]). En particulier $q$ est critique pour $g$.
* Par définition de la hessienne (définition IX.7.38, [[ch09-hessienne-def]]), pour $h,k\in\R^m$, $d^2g_q(h,k)=d^2f_p(dx_qh,dx_qk)$. Comme $dx_q:\R^m\to T_pS$ est un isomorphisme ([[ch09-espace-tangent-image-dx]]), si $d^2g_q(h,\cdot)=0$ alors $d^2f_p(dx_qh,\cdot)=0$ sur $T_pS$, donc $dx_qh=0$ (non-dégénérescence de $d^2f_p$), donc $h=0$ : $q$ est un point critique **non dégénéré** de $g$.

La question 1 donne un ouvert $V\subset U$ contenant $q$ où $q$ est le seul point critique de $g$. Comme $x$ est un homéomorphisme de $U$ sur l'ouvert $x(U)$ de $S$, $W=x(V)$ est un ouvert de $S$ contenant $p$, et si $p'\in W$ est critique pour $f$, alors $x^{-1}(p')\in V$ est critique pour $g$, donc $x^{-1}(p')=q$ et $p'=p$.

**3.** Notons $\mathcal C\subset S$ l'ensemble des points critiques de $f$.

*$\mathcal C$ est fermé dans $S$.* Soit $p\notin\mathcal C$ et $x$, $q$, $g$ comme en 2. ; $dg_q\ne0$ et $q'\mapsto dg_{q'}$ est continue ($g$ est $C^1$), donc $dg_{q'}\ne0$ sur un voisinage ouvert $V'$ de $q$ ; alors $x(V')$ est un voisinage ouvert de $p$ dans $S$ sans point critique. Le complémentaire de $\mathcal C$ est donc ouvert dans $S$.

*Finitude.* $\mathcal C$ est un fermé du compact $S$, donc compact. Par 2., chaque $p\in\mathcal C$ possède un ouvert $W_p$ de $S$ avec $W_p\cap\mathcal C=\{p\}$. Les $W_p$ recouvrent $\mathcal C$ ; on en extrait un sous-recouvrement fini $W_{p_1},\dots,W_{p_k}$. Alors $\mathcal C\subset\bigcup_i(W_{p_i}\cap\mathcal C)=\{p_1,\dots,p_k\}$ : $\mathcal C$ est fini.

**4a.** $\mathbb S^2=\Phi^{-1}(\{0\})$ avec $\Phi(x,y,z)=x^2+y^2+z^2-1$, et $0$ est valeur régulière (exemple IX.4.2, [[ch09-ex-sphere]] : $d\Phi_p(v)=2\langle p,v\rangle\ne0$ pour $v=p$). $g$ est $C^\infty$ et $\nabla g=(y,x,2z)$. Par les multiplicateurs de Lagrange ([[ch09-multiplicateurs-lagrange]]), $p=(x,y,z)\in\mathbb S^2$ est critique si et seulement s'il existe $\lambda\in\R$ avec $\nabla g(p)=\lambda\nabla\Phi(p)=2\lambda p$ :
$$
y=2\lambda x,\qquad x=2\lambda y,\qquad 2z=2\lambda z .
$$
* *Si $z\ne0$* : $\lambda=1$, puis $y=2x$ et $x=2y$, donc $x=4x$, $x=y=0$, $z=\pm1$ : les points $\pm e_3=(0,0,\pm1)$ (avec $\lambda=1$, $f=1$).
* *Si $z=0$* : $x^2+y^2=1$. Les deux premières équations donnent $x=4\lambda^2x$ et $y=4\lambda^2y$ ; comme $(x,y)\ne(0,0)$, $4\lambda^2=1$. Si $\lambda=\frac12$ : $y=x$, d'où $p=\pm\frac1{\sqrt2}(1,1,0)$, $f=\frac12$. Si $\lambda=-\frac12$ : $y=-x$, d'où $p=\pm\frac1{\sqrt2}(1,-1,0)$, $f=-\frac12$.

Réciproquement ces six points vérifient le système. **$f$ a exactement six points critiques.**

**4b.** Soit $p$ critique, $v\in T_p\mathbb S^2=p^\perp$. Si $v=0$ il n'y a rien à montrer ; par homogénéité des deux membres (quadratiques en $v$) on peut supposer $\norm v=1$. La courbe $\alpha(t)=\cos(t)\,p+\sin(t)\,v$ est tracée sur $\mathbb S^2$ (car $\norm{\alpha(t)}^2=\cos^2t+\sin^2t=1$), de classe $C^\infty$, avec $\alpha(0)=p$, $\alpha'(0)=v$, $\alpha''(0)=-p$.

*Calcul dans $\R^3$.* $g\circ\alpha$ est $C^2$ et
$$
(g\circ\alpha)''(0)=d^2g_p(\alpha'(0),\alpha'(0))+dg_p(\alpha''(0))=d^2g_p(v,v)-\langle\nabla g(p),p\rangle=d^2g_p(v,v)-2\lambda,
$$
car $\langle\nabla g(p),p\rangle=2\lambda\norm p^2=2\lambda$.

*Calcul dans un paramétrage.* Soit $x:U\to\mathbb S^2$ un paramétrage local en $p$, $q=x^{-1}(p)$. Pour $t$ petit, $\alpha(t)\in x(U)$ et $\beta=x^{-1}\circ\alpha$ est de classe $C^2$ ([[ch09-ex-parametrages-cartes-cr]] : la carte $x^{-1}$ est $C^\infty$, et $\alpha$ est une courbe $C^\infty$ tracée sur $\mathbb S^2$), avec $\beta(0)=q$ et $dx_q(\beta'(0))=\alpha'(0)=v$. Alors $g\circ\alpha=(f\circ x)\circ\beta$ et
$$
(g\circ\alpha)''(0)=d^2(f\circ x)_q(\beta'(0),\beta'(0))+d(f\circ x)_q(\beta''(0))=d^2f_p(v,v)+0,
$$
car $d(f\circ x)_q=0$ ($p$ critique) et par définition de $d^2f_p$ avec $\beta'(0)=dx_q^{-1}(v)$. En comparant : $d^2f_p(v,v)=d^2g_p(v,v)-2\lambda\norm v^2$.

**4c.** Ici $d^2g_p(v,v)=2v_1v_2+2v_3^2$ (dérivées secondes constantes : $\partial_x\partial_yg=1$, $\partial_z^2g=2$, les autres nulles). Par polarisation, la forme bilinéaire $d^2f_p$ sur $T_p\mathbb S^2$ est la restriction de $(v,w)\mapsto v_1w_2+v_2w_1+2v_3w_3-2\lambda\langle v,w\rangle$.

* *En $\pm e_3$* ($\lambda=1$), $T_p\mathbb S^2=\{v_3=0\}$, base $(e_1,e_2)$ : $d^2f_p(v,v)=2v_1v_2-2v_1^2-2v_2^2$, de matrice $\begin{pmatrix}-2&1\\1&-2\end{pmatrix}$, de trace $-4$ et de déterminant $3$ : **définie négative**. Non dégénérée, maximum local strict (proposition sur l'ordre deux, [[ch09-hessienne-extrema-ordre-deux]]) ; c'est d'ailleurs le maximum global ($f\le\frac{x^2+y^2}2+z^2\le1$).
* *En $\pm\frac1{\sqrt2}(1,1,0)$* ($\lambda=\frac12$), base orthonormée de $T_p\mathbb S^2$ : $u=\frac1{\sqrt2}(1,-1,0)$, $e_3$. On a $d^2g_p(u,u)=2\cdot\frac{1}{\sqrt2}\cdot\frac{-1}{\sqrt2}=-1$, $d^2g_p(e_3,e_3)=2$, et le terme croisé $u_1(e_3)_2+u_2(e_3)_1+2u_3(e_3)_3=0$. Matrice de $d^2f_p$ : $\begin{pmatrix}-1-1&0\\0&2-1\end{pmatrix}=\begin{pmatrix}-2&0\\0&1\end{pmatrix}$, **non dégénérée de signature $(1,1)$** : ni maximum ni minimum local (en un maximum, resp. minimum, local la hessienne serait négative, resp. positive). Ce sont des **cols**.
* *En $\pm\frac1{\sqrt2}(1,-1,0)$* ($\lambda=-\frac12$), base $u'=\frac1{\sqrt2}(1,1,0)$, $e_3$ : $d^2g_p(u',u')=1$, $d^2g_p(e_3,e_3)=2$, terme croisé nul. Matrice $\begin{pmatrix}1+1&0\\0&2+1\end{pmatrix}=\begin{pmatrix}2&0\\0&3\end{pmatrix}$, **définie positive** : minimum local strict (c'est le minimum global, $f\ge-\frac{x^2+y^2}2\ge-\frac12$).

Tous les points critiques sont non dégénérés, et il y en a bien un nombre fini (six), conformément à la question 3.

**5.** *Sans compacité*, c'est faux : sur la sous-variété $S=\R$ (ouvert de $\R$), $f=\sin$ a pour points critiques $\frac\pi2+\pi\Z$, tous non dégénérés ($\sin''=-\sin=\mp1\ne0$ en ces points), en nombre infini. *Sans non-dégénérescence*, c'est faux aussi : une fonction constante sur $\mathbb S^2$ a tous ses points critiques (dégénérés). La non-dégénérescence ne sert d'ailleurs qu'à l'isolement : un point critique dégénéré peut être isolé ($t\mapsto t^4$ en $0$, ou $z\mapsto z^3-3z$ restreinte à $\mathbb S^2$, dont les seuls points critiques sont les pôles, dégénérés).

## Pièges et variantes

* La hessienne de $f=g_{|S}$ **n'est pas** la restriction de $d^2g_p$ à $T_pS$ : il manque le terme de courbure $-2\lambda\norm v^2$ (question 4b). Ici, sans lui, on trouverait en $\pm e_3$ la forme $2v_1v_2$, indéfinie : conclusion fausse (« col ») pour ce qui est en fait le maximum !
* La hessienne n'a de sens qu'en un point critique : la formule 4b utilise $d(f\circ x)_q=0$.
* Question 3 : il faut l'isolement **et** la fermeture de l'ensemble des points critiques ; un ensemble discret non fermé d'un compact peut être infini (par exemple $\{1/n\}$ dans $[0,1]$).
* Variante (théorie de Morse) : sur cet exemple, $\#\{\max\}-\#\{\text{cols}\}+\#\{\min\}=2-2+2=2$ ; ce nombre, la caractéristique d'Euler de la sphère, est le même pour toute fonction de Morse sur $\mathbb S^2$ (par exemple $xyz$ : $4$ maxima, $6$ cols, $4$ minima). Sur le tore, on trouve $0$.
* Variante : le même raisonnement montre que pour $A$ symétrique à valeurs propres distinctes, $v\mapsto\langle Av,v\rangle$ sur $\mathbb S^{n-1}$ a exactement $2n$ points critiques, tous non dégénérés.
