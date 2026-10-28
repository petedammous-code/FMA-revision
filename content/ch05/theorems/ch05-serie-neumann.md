---
id: ch05-serie-neumann
type: lemma
chapter: 5
title: "Série de Neumann : $\mathrm{Id}_E-h$ est inversible si $\|h\|<1$"
ref: non numéroté, section V.5.4, p. 109
page: 109
importance: 2
depends: [ch05-banach-series-absolument-convergentes, ch05-lef-banach-norme-algebre, ch05-norme-operateur-def]
tags: [neumann, inversion, banach, serie-geometrique, operateurs]
---
## Intuition

> 💡 C'est la série géométrique $\frac1{1-q}=1+q+q^2+\cdots$ ($|q|<1$), mais pour des **opérateurs** : si $h$ est « petit » (de norme $<1$), alors $\mathrm{Id}_E-h$ est une perturbation de l'identité, et elle reste inversible, d'inverse $\mathrm{Id}_E+h+h^2+\cdots$. Toute application linéaire continue assez proche de l'identité est donc inversible.

Le calcul est le même qu'en dimension $1$ ($(1-q)(1+q+\dots+q^N)=1-q^{N+1}$) ; la seule difficulté est de donner un sens à la somme infinie $\sum h^n$, et c'est là qu'intervient la **complétude** : dans un Banach, une série absolument convergente converge ([[ch05-banach-series-absolument-convergentes]]).

Notations. $\mathcal L(E)=\mathcal L(E;E)$ est l'espace des endomorphismes continus de $E$, muni de la norme d'opérateur ([[ch05-norme-operateur-def]]) ; c'est une **norme d'algèbre** : $\|AB\|\le\|A\|\,\|B\|$, et $\mathcal L(E)$ est un Banach si $E$ en est un ([[ch05-lef-banach-norme-algebre]]). $h^n=h\circ\cdots\circ h$ ($n$ fois), $h^0=\mathrm{Id}_E$. « Inversible dans $\mathcal L(E)$ » signifie : il existe $S\in\mathcal L(E)$ (donc **continue**) avec $(\mathrm{Id}_E-h)S=S(\mathrm{Id}_E-h)=\mathrm{Id}_E$.

## Énoncé

**Lemme (poly, section V.5.4, p. 109, non numéroté — dans la preuve du théorème V.5.7).** Soit $E$ un espace de Banach et $h\in\mathcal L(E)$ avec $\|h\|<1$. Alors $\mathrm{Id}_E-h$ est inversible dans $\mathcal L(E)$, d'inverse donné par la série normalement convergente
$$
(\mathrm{Id}_E-h)^{-1}=\sum_{n=0}^{+\infty}h^n,
$$
et
$$
\big\|(\mathrm{Id}_E-h)^{-1}\big\|\le\frac1{1-\|h\|},\qquad\big\|(\mathrm{Id}_E-h)^{-1}-\mathrm{Id}_E\big\|\le\sum_{n\ge1}\|h\|^n=\frac{\|h\|}{1-\|h\|}.
$$

## Hypothèses

### H1 — $E$ est un espace de Banach

**Rôle.** Elle rend $\mathcal L(E)$ complet ([[ch05-lef-banach-norme-algebre]]), ce qui fait converger la série $\sum h^n$, absolument convergente ([[ch05-banach-series-absolument-convergentes]]). Le poly le souligne : « on utilise ici l'hypothèse de complétude de l'espace ».

**Si on la retire.** Le résultat est faux. Soit $E=c_{00}$ l'espace des suites réelles $(x_0,x_1,\dots)$ nulles à partir d'un certain rang, muni de $\|x\|_1=\sum_n|x_n|$ (non complet), $S(x_0,x_1,\dots)=(0,x_0,x_1,\dots)$ le décalage et $h=\frac12S$. Comme $\|Sx\|_1=\|x\|_1$, on a $\|h\|=\frac12<1$. Mais $\mathrm{Id}_E-h$ n'est pas surjective : si $(\mathrm{Id}_E-h)x=e_0$ (où $e_0=(1,0,0,\dots)$), alors $x_0=1$ et $x_n-\frac12x_{n-1}=0$ pour $n\ge1$, donc $x_n=2^{-n}$ pour tout $n$, suite qui n'est pas à support fini. Donc $\mathrm{Id}_E-h$ n'est pas inversible (le candidat $\sum_nh^n(e_0)=\sum_n2^{-n}e_n$ « sort » de $E$).

### H2 — $\|h\|<1$, pour la norme d'opérateur (norme d'algèbre)

**Rôle.** Avec $\|h^n\|\le\|h\|^n$ (norme d'algèbre), la série $\sum\|h^n\|$ est majorée par une série géométrique de raison $\|h\|<1$, donc converge ; et $h^{N+1}\to0$.

**Si on la retire.** Pour $\|h\|=1$ : $h=\mathrm{Id}_E$ donne $\mathrm{Id}_E-h=0$, non inversible. Pour $\|h\|\ge1$ la conclusion peut subsister ou non : $h=2\,\mathrm{Id}_E$ donne $\mathrm{Id}_E-h=-\mathrm{Id}_E$ inversible, mais la série $\sum 2^n\mathrm{Id}_E$ diverge. L'hypothèse peut être affaiblie en « il existe $N\ge1$ tel que $\|h^N\|<1$ » : en écrivant $n=qN+r$ ($0\le r<N$), $\|h^n\|\le\|h^N\|^q\max_{r<N}\|h^r\|$, donc $\sum\|h^n\|<\infty$ et la preuve est la même (par exemple pour $h$ nilpotente, $h^N=0$, de norme quelconque).

Enfin, la norme doit être une **norme d'algèbre** : sur $\mathrm M_2(\R)$ avec $\|A\|_{\max}=\max_{i,j}|a_{ij}|$ (qui n'est pas une norme d'algèbre), $h=\frac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$ vérifie $\|h\|_{\max}=\frac12$, mais $h^2=h$ et $\mathrm{Id}-h$ annule le vecteur $(1,1)$ : elle n'est pas inversible.

## Idée de la preuve

$\mathcal L(E)$ est complet et $\sum\|h^n\|\le\sum\|h\|^n<\infty$ : la série $S=\sum h^n$ converge. Le télescopage $(\mathrm{Id}_E-h)S_N=S_N(\mathrm{Id}_E-h)=\mathrm{Id}_E-h^{N+1}$ et $h^{N+1}\to0$ donnent, à la limite, $(\mathrm{Id}_E-h)S=S(\mathrm{Id}_E-h)=\mathrm{Id}_E$.

## Preuve

*Le poly esquisse cet argument dans la preuve du théorème V.5.7 ; en voici les détails.*

**Convergence.** Comme $E$ est un Banach, $\mathcal L(E)$ est un Banach ([[ch05-lef-banach-norme-algebre]]). La norme d'opérateur étant une norme d'algèbre, $\|h^n\|\le\|h\|^n$ par récurrence (avec $\|h^0\|=\|\mathrm{Id}_E\|=1$ si $E\ne\{0\}$ ; le cas $E=\{0\}$ est trivial). La série réelle $\sum\|h\|^n$ converge car $0\le\|h\|<1$, donc la série $\sum h^n$ est absolument (normalement) convergente dans le Banach $\mathcal L(E)$, donc convergente ([[ch05-banach-series-absolument-convergentes]]). Notons $S=\sum_{n=0}^{+\infty}h^n\in\mathcal L(E)$ et $S_N=\sum_{n=0}^Nh^n$.

**Inverse.** Par télescopage,
$$
(\mathrm{Id}_E-h)S_N=S_N(\mathrm{Id}_E-h)=\sum_{n=0}^Nh^n-\sum_{n=1}^{N+1}h^n=\mathrm{Id}_E-h^{N+1}.
$$
Quand $N\to\infty$ : $\|h^{N+1}\|\le\|h\|^{N+1}\to0$, et
$$
\big\|(\mathrm{Id}_E-h)S_N-(\mathrm{Id}_E-h)S\big\|\le\|\mathrm{Id}_E-h\|\,\|S_N-S\|\to0,
$$
de même pour $S_N(\mathrm{Id}_E-h)$. Par unicité de la limite, $(\mathrm{Id}_E-h)S=S(\mathrm{Id}_E-h)=\mathrm{Id}_E$. Comme $S\in\mathcal L(E)$ est continue, $\mathrm{Id}_E-h$ est inversible dans $\mathcal L(E)$, d'inverse $S$.

**Estimations.** Par l'inégalité triangulaire (passée à la limite, la norme étant continue),
$$
\|S\|\le\sum_{n\ge0}\|h\|^n=\frac1{1-\|h\|},\qquad\|S-\mathrm{Id}_E\|=\Big\|\sum_{n\ge1}h^n\Big\|\le\sum_{n\ge1}\|h\|^n=\frac{\|h\|}{1-\|h\|}.\qquad\square
$$

## Preuve à trous

Comme $E$ est complet, <trou indice="que dire de l'espace L(E) ?">$\mathcal L(E)$ est un espace de Banach</trou>. Par la propriété de norme d'algèbre, <trou>$\|h^n\|\le\|h\|^n$</trou>, et $\sum\|h\|^n<\infty$ car $\|h\|<1$ : la série $\sum h^n$ est normalement convergente, donc convergente dans $\mathcal L(E)$ ; soit $S$ sa somme et $S_N$ ses sommes partielles.

Par télescopage, <trou indice="calculer (Id - h) S_N">$(\mathrm{Id}_E-h)S_N=S_N(\mathrm{Id}_E-h)=\mathrm{Id}_E-h^{N+1}$</trou>. Quand $N\to\infty$, $h^{N+1}\to0$ et, la composition étant continue, $(\mathrm{Id}_E-h)S=S(\mathrm{Id}_E-h)=\mathrm{Id}_E$. Enfin <trou>$\|S-\mathrm{Id}_E\|\le\sum_{n\ge1}\|h\|^n=\frac{\|h\|}{1-\|h\|}$</trou>. $\square$

## Exemples

* **Matrice diagonale.** $h=\begin{pmatrix}1/2&0\\0&1/3\end{pmatrix}$ ($\|h\|=\frac12$ pour la norme d'opérateur euclidienne) : $\sum_nh^n=\begin{pmatrix}\sum2^{-n}&0\\0&\sum3^{-n}\end{pmatrix}=\begin{pmatrix}2&0\\0&3/2\end{pmatrix}$, et l'on vérifie $(I-h)\begin{pmatrix}2&0\\0&3/2\end{pmatrix}=\begin{pmatrix}\frac12\cdot2&0\\0&\frac23\cdot\frac32\end{pmatrix}=I$.
* **Une équation intégrale.** $E=C([0,1];\R)$ muni de $\|\cdot\|_\infty$ (Banach), $(K\varphi)(x)=\frac{x}{2}\int_0^1y\,\varphi(y)\,dy$. On a $|K\varphi(x)|\le\frac12\int_0^1y\,dy\,\|\varphi\|_\infty=\frac14\|\varphi\|_\infty$, donc $\|K\|\le\frac14<1$ : pour tout $\psi\in E$, l'équation $\varphi-K\varphi=\psi$ a une unique solution $\varphi=\sum_nK^n\psi$. Ici $K(\mathrm{id})=\frac x2\int_0^1y^2dy=\frac x6$ (où $\mathrm{id}:y\mapsto y$), donc $K^n\psi=6^{-(n-1)}K\psi$ pour $n\ge1$, et
$$
\varphi=\psi+\sum_{n\ge1}6^{-(n-1)}K\psi=\psi+\frac65K\psi,\quad\text{i.e.}\quad\varphi(x)=\psi(x)+\frac{3x}5\int_0^1y\,\psi(y)\,dy .
$$
Vérification : $(\mathrm{Id}-K)(\psi+\frac65K\psi)=\psi+\frac65K\psi-K\psi-\frac65\cdot\frac16K\psi=\psi$.
* **Ouverture des inversibles.** Si $f_0\in\mathcal L(E;F)$ est un isomorphisme bicontinu ($E$, $F$ Banach) et $\|g\|<1/\|f_0^{-1}\|$, alors $f_0+g=f_0(\mathrm{Id}_E+f_0^{-1}g)$ avec $\|f_0^{-1}g\|<1$ : $f_0+g$ est inversible, d'inverse $\sum_n(-f_0^{-1}g)^nf_0^{-1}$. C'est le cœur du théorème V.5.7 ([[ch05-inversion-c-infini]]).

## Pièges

* > ⚠️ La complétude est indispensable (contre-exemple $c_{00}$ ci-dessus) : ne pas l'oublier quand on cite le lemme.
* La norme doit être la **norme d'opérateur** (ou une norme d'algèbre) : la condition « $|h_{ij}|<1$ pour tous les coefficients » ne suffit pas.
* $\|h\|<1$ est **suffisant, pas nécessaire** : $h$ nilpotente de grande norme, ou plus généralement $\|h^N\|<1$ pour un $N$, convient aussi ; en dimension finie, la condition optimale pour la convergence de $\sum h^n$ porte sur le rayon spectral.
* L'inverse obtenu est automatiquement **continu** (c'est un élément de $\mathcal L(E)$) ; on n'a pas besoin du théorème d'isomorphisme de Banach ici.
* Ne pas écrire $(\mathrm{Id}_E-h)^{-1}=\frac{1}{\mathrm{Id}_E-h}$ ni manipuler $h$ comme un nombre : les $h^n$ commutent entre eux, mais pas avec un autre opérateur quelconque (dans l'exemple d'ouverture, l'ordre $f_0^{-1}g$ compte).
