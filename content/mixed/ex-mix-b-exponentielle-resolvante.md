---
id: ex-mix-b-exponentielle-resolvante
type: exercise
chapters: [2, 7, 5, 1]
title: L'exponentielle d'une matrice comme intégrale de Cauchy de la résolvante
source: "Classique (calcul fonctionnel holomorphe de Dunford–Riesz, cf. Rudin, *Functional Analysis*, ch. 10) — adapté en dimension finie ; progression et exemples inventés"
difficulty: 3
time: 50
tools: [ch05-serie-neumann, ch02-pole-meromorphe-def, ch01-holomorphie-sous-integrale, ch07-unicite-globale, ch01-prolongement-analytique, ch02-formule-residus, ch02-indice-cercle, ch02-residu-integrale-cercle, ch02-invariance-homotopie-integrale]
---
## Énoncé

Soit $n\ge1$ et $A\in\Mat_n(\C)$. On munit $\C^n$ d'une norme et $\Mat_n(\C)$ de la norme d'opérateur associée, notée $\norm{\cdot}$ (c'est une norme d'algèbre : $\norm{MN}\le\norm M\norm N$). On note $\mathrm{Sp}(A)$ l'ensemble des valeurs propres de $A$, $s(A)=\max\{\Re(\lambda):\lambda\in\mathrm{Sp}(A)\}$ et, pour $z\in\C\setminus\mathrm{Sp}(A)$,
$$
R(z)=(zI_n-A)^{-1}\qquad\text{(résolvante de }A\text{)}.
$$
Une fonction à valeurs dans $\Mat_n(\C)$ est dite holomorphe (resp. méromorphe) si chacun de ses coefficients l'est ; intégrales le long d'un chemin et résidus se calculent coefficient par coefficient. On rappelle que $e^{tA}=\sum_{k\ge0}\frac{t^kA^k}{k!}$ et que $t\mapsto e^{tA}$ est une solution sur $\R$ de $X'=AX$, $X(0)=I_n$.

1. a) Montrer que les coefficients de $R$ sont des fractions rationnelles dont les pôles appartiennent à $\mathrm{Sp}(A)$, et que $\mathrm{Sp}(A)\subset\bar D(0,\norm A)$.
   b) Soit $\rho>\norm A$. Montrer que, pour $|z|\ge\rho$, $R(z)=\sum_{k\ge0}A^kz^{-k-1}$ et $\norm{R(z)}\le\dfrac1{|z|-\norm A}$. En déduire que $\dfrac1{2i\pi}\displaystyle\int_{C(0,\rho)}R(z)\,dz=I_n$.
2. On fixe $\rho>\norm A$ et on pose, pour $t\in\C$,
$$
\Phi(t)=\frac1{2i\pi}\int_{C(0,\rho)}e^{tz}R(z)\,dz .
$$
   a) Montrer que $\Phi$ est holomorphe sur $\C$ et que $\Phi'(t)=\dfrac1{2i\pi}\displaystyle\int_{C(0,\rho)}z\,e^{tz}R(z)\,dz$.
   b) Montrer que $\Phi'=A\Phi$ et $\Phi(0)=I_n$. En déduire que $\Phi(t)=e^{tA}$ pour tout $t\in\R$, puis pour tout $t\in\C$.
3. Montrer que, pour tout $t\in\C$,
$$
e^{tA}=\sum_{\lambda\in\mathrm{Sp}(A)}\Res_\lambda\big(e^{tz}R(z)\big).
$$
4. Calculer $e^{tA}$ par la formule de 3 pour
   a) $A=\begin{pmatrix}0&-\omega\\ \omega&0\end{pmatrix}$ avec $\omega>0$ ;
   b) $A=\begin{pmatrix}1&1\\ -1&3\end{pmatrix}$.
5. a) Montrer que pour tout $\eps>0$ il existe $C_\eps\ge0$ tel que $\norm{e^{tA}}\le C_\eps\,e^{(s(A)+\eps)t}$ pour tout $t\ge0$.
   b) En déduire que si $s(A)<0$, toute solution de $x'=Ax$ tend vers $0$ exponentiellement vite quand $t\to+\infty$.
   c) Montrer sur l'exemple 4 b) qu'on ne peut pas prendre $\eps=0$ en général.

## Indices

### Indice 1
On ne calcule pas l'intégrale de la question 2 : on montre qu'elle vérifie la même équation différentielle linéaire que $e^{tA}$, avec la même condition initiale. Le reste (questions 3 à 5) consiste à déformer le grand cercle en petits cercles autour des valeurs propres.

### Indice 2
1 a) : formule de la comatrice. 1 b) : $zI_n-A=z(I_n-A/z)$ et série de Neumann ; puis intégration terme à terme, avec $\int_{C(0,\rho)}z^{-k-1}dz=2i\pi$ si $k=0$ et $0$ sinon.

### Indice 3
2 a) : paramétrer le cercle et utiliser l'holomorphie des intégrales à paramètre. 2 b) : $(zI_n-A)R(z)=I_n$ s'écrit $zR(z)=I_n+AR(z)$, et $\int_{C(0,\rho)}e^{tz}dz=0$. 3 : théorème des résidus coefficient par coefficient sur $\Omega=\C$. Pour 4 b), résidu en un pôle double : si $f=h/(z-\lambda)^2$ avec $h$ holomorphe près de $\lambda$, $\Res_\lambda f=h'(\lambda)$.

### Indice 4
5 a) : chaque résidu est l'intégrale sur un petit cercle $C(\lambda,\delta)$ ; sur ce cercle $|e^{tz}|\le e^{t(\Re\lambda+\delta)}$ pour $t\ge0$, et $\norm{R}$ est borné (continuité sur un compact).

## Corrigé

**1. a)** $\chi_A(z)=\det(zI_n-A)$ est un polynôme de degré $n$ dont l'ensemble des zéros est $\mathrm{Sp}(A)$. Pour $z\notin\mathrm{Sp}(A)$, la formule de la comatrice donne
$$
R(z)=\frac{1}{\chi_A(z)}\,{}^t\mathrm{com}(zI_n-A),
$$
et les coefficients de la comatrice sont des déterminants extraits, donc des polynômes en $z$. Chaque coefficient $R_{ij}=P_{ij}/\chi_A$ est une fraction rationnelle, holomorphe sur $\C\setminus\mathrm{Sp}(A)$ ([[ch01-polynomes-fractions-rationnelles]]), méromorphe sur $\C$ avec des pôles dans $\mathrm{Sp}(A)$ ([[ch02-pole-meromorphe-def]]). Si $Av=\lambda v$ avec $v\neq0$, alors $|\lambda|\,\norm v=\norm{Av}\le\norm A\norm v$, donc $|\lambda|\le\norm A$.

**b)** Pour $|z|\ge\rho$, $h=A/z$ vérifie $\norm h\le\norm A/\rho<1$. Dans l'algèbre de Banach $\Mat_n(\C)=\mathcal L(\C^n)$, la série de Neumann ([[ch05-serie-neumann]]) donne l'inversibilité de $I_n-h$ et $(I_n-h)^{-1}=\sum_{k\ge0}h^k$. Comme $zI_n-A=z(I_n-h)$,
$$
R(z)=\frac1z\sum_{k\ge0}\frac{A^k}{z^k}=\sum_{k\ge0}A^kz^{-k-1},\qquad \norm{R(z)}\le\sum_{k\ge0}\frac{\norm A^k}{|z|^{k+1}}=\frac1{|z|-\norm A}.
$$
Sur $C(0,\rho)$, $\norm{A^kz^{-k-1}}\le\norm A^k\rho^{-k-1}$, terme général d'une série convergente : la série converge normalement, donc uniformément sur le chemin, et l'on peut intégrer terme à terme (majoration $\abs{\int_\gamma f}\le L(\gamma)\sup_\gamma|f|$ appliquée coefficient par coefficient, [[ch01-longueur-majoration-integrale]]). Or ([[ch01-integrale-sur-cercle]])
$$
\int_{C(0,\rho)}z^{-k-1}\,dz=i\rho^{-k}\int_0^{2\pi}e^{-ik\theta}\,d\theta=\begin{cases}2i\pi&\text{si }k=0,\\ 0&\text{si }k\ge1,\end{cases}
$$
d'où $\frac1{2i\pi}\int_{C(0,\rho)}R(z)\,dz=A^0=I_n$.

**2. a)** En paramétrant $z=\rho e^{i\theta}$, $\theta\in[0,2\pi]$ :
$$
\Phi(t)=\int_0^{2\pi}H(t,\theta)\,d\theta,\qquad H(t,\theta)=\frac{1}{2\pi}e^{t\rho e^{i\theta}}R(\rho e^{i\theta})\,\rho e^{i\theta}.
$$
Chaque coefficient de $H$ est continu sur $\C\times[0,2\pi]$ ($R$ est continue sur le cercle, qui évite $\mathrm{Sp}(A)$ d'après 1 a)) et holomorphe en $t$. Domination : pour $t\in D(t_0,1)$, $|H_{ij}(t,\theta)|\le\frac{\rho}{2\pi}e^{(|t_0|+1)\rho}K$ avec $K=\max_{C(0,\rho)}|R_{ij}|<\infty$ (compacité), constante intégrable sur $[0,2\pi]$. Le théorème d'holomorphie sous l'intégrale ([[ch01-holomorphie-sous-integrale]]) montre que $\Phi$ est holomorphe sur $\C$ avec $\Phi'(t)=\int_0^{2\pi}\partial_tH(t,\theta)\,d\theta=\frac1{2i\pi}\int_{C(0,\rho)}z\,e^{tz}R(z)\,dz$.

**b)** De $(zI_n-A)R(z)=I_n$ on tire $zR(z)=I_n+AR(z)$, donc
$$
\Phi'(t)=\frac1{2i\pi}\int_{C(0,\rho)}e^{tz}\,dz\;I_n+A\,\frac1{2i\pi}\int_{C(0,\rho)}e^{tz}R(z)\,dz=A\,\Phi(t),
$$
car $z\mapsto e^{tz}$ admet une primitive holomorphe sur $\C$ ($e^{tz}/t$ si $t\neq0$, $z$ si $t=0$), donc son intégrale sur un lacet est nulle ([[ch01-integrale-primitive]]). Et $\Phi(0)=\frac1{2i\pi}\int_{C(0,\rho)}R=I_n$ par 1 b).

Restreinte à $t\in\R$, $\Phi$ est $C^1$ et vérifie $\Phi'=A\Phi$, $\Phi(0)=I_n$. Le champ $(t,X)\mapsto AX$ sur $\R\times\Mat_n(\C)$ ($\Mat_n(\C)$ espace de Banach) est continu et $\norm A$-lipschitzien en $X$. $t\mapsto e^{tA}$ est solution du même problème (poly, Exercice VII.4.3, p. 138). Par l'unicité globale ([[ch07-unicite-globale]]), $\Phi(t)=e^{tA}$ pour tout $t\in\R$.

Pour $t\in\C$ : chaque coefficient de $t\mapsto e^{tA}$ est la somme d'une série entière en $t$ de rayon infini ($\norm{t^kA^k/k!}\le(|t|\norm A)^k/k!$), donc est holomorphe sur $\C$ ([[ch01-serie-entiere-holomorphe]]). Les coefficients de $\Phi$ et de $e^{tA}$ sont holomorphes sur le connexe $\C$ et coïncident sur $\R$, qui a des points d'accumulation : ils sont égaux sur $\C$ ([[ch01-prolongement-analytique]]).

**3.** Fixons $t\in\C$. Chaque coefficient $f_{ij}(z)=e^{tz}R_{ij}(z)=e^{tz}P_{ij}(z)/\chi_A(z)$ est méromorphe sur $\C$ (produit d'une fonction entière et d'une fraction rationnelle, [[ch02-meromorphes-operations]]), avec des pôles contenus dans $\mathrm{Sp}(A)$. L'ouvert $\Omega=\C$ est étoilé donc simplement connexe ([[ch02-etoile-simplement-connexe]]), et le lacet $C(0,\rho)$ évite les pôles puisque $|\lambda|\le\norm A<\rho$ pour $\lambda\in\mathrm{Sp}(A)$. La formule des résidus ([[ch02-formule-residus]]) donne
$$
\frac1{2i\pi}\int_{C(0,\rho)}f_{ij}(z)\,dz=\sum_{s\text{ pôle de }f_{ij}}\Res_s(f_{ij})\,\Ind_{C(0,\rho)}(s)=\sum_{\lambda\in\mathrm{Sp}(A)}\Res_\lambda(f_{ij}),
$$
car l'indice vaut $1$ en tout point de $D(0,\rho)$ ([[ch02-indice-cercle]]) et le résidu est nul en un point de $\mathrm{Sp}(A)$ où $f_{ij}$ est holomorphe. Avec 2 b), on obtient la formule annoncée.

**4. a)** $zI_2-A=\begin{pmatrix}z&\omega\\-\omega&z\end{pmatrix}$, $\chi_A(z)=z^2+\omega^2=(z-i\omega)(z+i\omega)$, et
$$
e^{tz}R(z)=\frac{e^{tz}}{(z-i\omega)(z+i\omega)}N(z),\qquad N(z)=\begin{pmatrix}z&-\omega\\ \omega&z\end{pmatrix}.
$$
Les pôles $\pm i\omega$ sont simples ; le résidu d'un produit $h/(z-\lambda)$, $h$ holomorphe, vaut $h(\lambda)$ ([[ch02-residu-pole-simple]]) :
$$
\Res_{i\omega}=\frac{e^{i\omega t}}{2i\omega}N(i\omega)=\frac{e^{i\omega t}}2\begin{pmatrix}1&i\\-i&1\end{pmatrix},\qquad \Res_{-i\omega}=\frac{e^{-i\omega t}}{-2i\omega}N(-i\omega)=\frac{e^{-i\omega t}}2\begin{pmatrix}1&-i\\ i&1\end{pmatrix}.
$$
En sommant, $\frac{e^{i\omega t}+e^{-i\omega t}}2=\cos\omega t$ et $\frac{i(e^{i\omega t}-e^{-i\omega t})}2=-\sin\omega t$ :
$$
e^{tA}=\begin{pmatrix}\cos\omega t&-\sin\omega t\\ \sin\omega t&\cos\omega t\end{pmatrix}\quad\text{(rotation d'angle }\omega t\text{)}.
$$

**b)** $zI_2-A=\begin{pmatrix}z-1&-1\\ 1&z-3\end{pmatrix}$, $\chi_A(z)=(z-1)(z-3)+1=(z-2)^2$ : $\mathrm{Sp}(A)=\{2\}$ et
$$
e^{tz}R(z)=\frac{h(z)}{(z-2)^2},\qquad h(z)=e^{tz}\begin{pmatrix}z-3&1\\-1&z-1\end{pmatrix}.
$$
$h$ est entière, $h(z)=h(2)+h'(2)(z-2)+O((z-2)^2)$, donc le coefficient de $(z-2)^{-1}$ du développement de Laurent ([[ch02-laurent-developpement]], [[ch02-residu-def]]) est $h'(2)$ :
$$
h'(z)=te^{tz}\begin{pmatrix}z-3&1\\-1&z-1\end{pmatrix}+e^{tz}I_2,\qquad e^{tA}=h'(2)=e^{2t}\begin{pmatrix}1-t&t\\-t&1+t\end{pmatrix}.
$$
*Contrôle.* $N=A-2I_2=\begin{pmatrix}-1&1\\-1&1\end{pmatrix}$ vérifie $N^2=0$, donc $e^{tA}=e^{2t}e^{tN}=e^{2t}(I_2+tN)$ : même résultat. (Vérifié aussi en calcul formel, et numériquement en discrétisant l'intégrale de la question 2 pour $t=0{,}7$, $\rho=5>\norm A$.)

**5. a)** Notons $\lambda_1,\dots,\lambda_p$ les valeurs propres distinctes, $\delta_0=\frac12\min_{j\neq k}|\lambda_j-\lambda_k|$ ($\delta_0=+\infty$ si $p=1$) et fixons $\delta\in\,]0,\eps]$ avec $\delta<\delta_0$. Le disque $D(\lambda_j,2\delta_0)$ ne contient aucune autre valeur propre, donc chaque coefficient de $e^{tz}R(z)$ est holomorphe sur $D(\lambda_j,2\delta_0)\setminus\{\lambda_j\}$. Le résidu est l'intégrale sur un petit cercle ([[ch02-residu-integrale-cercle]]) ; de plus, pour $0<r<r'<2\delta_0$, les cercles $C(\lambda_j,r)$ et $C(\lambda_j,r')$ sont homotopes dans ce disque épointé (par $\big((1-u)r+ur'\big)e^{i\theta}+\lambda_j$), donc les intégrales coïncident ([[ch02-invariance-homotopie-integrale]]) : on peut prendre le rayon $\delta$,
$$
\Res_{\lambda_j}\big(e^{tz}R(z)\big)=\frac1{2i\pi}\int_{C(\lambda_j,\delta)}e^{tz}R(z)\,dz .
$$
Soit $K=\max_j\max_{z\in C(\lambda_j,\delta)}\norm{R(z)}$, fini car $R$ est continue sur ces cercles compacts qui évitent $\mathrm{Sp}(A)$. Pour $t\ge0$ et $z\in C(\lambda_j,\delta)$, $|e^{tz}|=e^{t\Re z}\le e^{t(\Re\lambda_j+\delta)}\le e^{t(s(A)+\eps)}$. Avec la majoration $\norm{\int_\gamma M(z)dz}\le L(\gamma)\sup_\gamma\norm M$ (intégrale d'une fonction continue à valeurs dans un Banach, [[ch05-integrale-fonctions-reglees]]), la question 3 donne
$$
\norm{e^{tA}}\le\sum_{j=1}^p\frac{2\pi\delta}{2\pi}\,K\,e^{t(s(A)+\eps)}=p\,\delta\,K\,e^{(s(A)+\eps)t}\qquad(t\ge0),
$$
d'où le résultat avec $C_\eps=p\delta K$.

**b)** Si $x'=Ax$ et $x(0)=x_0$, alors $t\mapsto e^{tA}x_0$ est solution (dériver) avec la même condition initiale, donc $x(t)=e^{tA}x_0$ ([[ch07-unicite-globale]]). Si $s(A)<0$, on prend $\eps=-s(A)/2$ : $\norm{x(t)}\le C_\eps\norm{x_0}e^{s(A)t/2}\to0$.

**c)** Pour $A=\begin{pmatrix}1&1\\-1&3\end{pmatrix}$, $s(A)=2$ et $e^{-2t}e^{tA}=I_2+tN$ avec $N\neq0$, donc $\norm{e^{-2t}e^{tA}}\ge t\norm N-1\to+\infty$ : aucune constante $C$ ne vérifie $\norm{e^{tA}}\le Ce^{2t}$ pour tout $t\ge0$. Le facteur polynomial $t$ provient du pôle **double** de $R$ en $2$ (bloc de Jordan de taille $2$).

## Pièges et variantes

* **L'intégrale sur le cercle n'est pas nulle** : la formule de Cauchy pour les fonctions holomorphes ne s'applique pas à $R$, qui a des pôles dans le disque. C'est au contraire la formule des résidus qui travaille.
* $\rho>\norm A$ n'est utile que pour la série de Neumann (question 1 b)) ; la question 3 montre que tout lacet d'indice $1$ autour de chaque valeur propre donne le même résultat. Ne pas confondre $\norm A$ et le rayon spectral $\max|\lambda|$.
* En 5 a), $\eps$ est indispensable en présence de blocs de Jordan non triviaux (pôles d'ordre $\ge2$ de la résolvante) ; si $A$ est diagonalisable, les pôles sont simples et l'on peut prendre $\eps=0$.
* Variante (Cayley–Hamilton en une ligne) : pour un polynôme $P$, la même intégration terme à terme donne $\frac1{2i\pi}\int_{C(0,\rho)}P(z)R(z)\,dz=P(A)$. Avec $P=\chi_A$, l'intégrande est ${}^t\mathrm{com}(zI_n-A)$, à coefficients polynomiaux, d'intégrale nulle : $\chi_A(A)=0$.
* Variante (calcul fonctionnel) : pour $f$ holomorphe sur un disque contenant $\mathrm{Sp}(A)$, on définit $f(A)=\frac1{2i\pi}\int_\gamma f(z)R(z)\,dz$ ; par exemple, si $\mathrm{Sp}(A)\subset\C\setminus\R_-$, $f=\mathrm{Log}$ fournit un logarithme de $A$ (à condition de choisir un lacet convenable dans $\C\setminus\R_-$).
