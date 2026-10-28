---
id: ex-ch01-gaussienne-prolongement
type: exercise
chapters: [1]
title: Transformée de Fourier de la gaussienne par prolongement analytique
source: "Classique (calcul de la transformée de Fourier de la gaussienne sans contour, cf. Rudin, Real and Complex Analysis, ch. 9 et Amar–Matheron ; q. 6 inventée)"
difficulty: 3
time: 45
tools: [ch01-holomorphie-sous-integrale, ch01-prolongement-analytique, ch01-exp-trigo-hyperboliques, ch01-holomorphe-analytique, ch01-serie-entiere-derivees-tout-ordre, ch01-polynomes-fractions-rationnelles]
---
## Énoncé

On admet que $\displaystyle\int_{-\infty}^{+\infty}e^{-t^2}\,dt=\sqrt\pi$. Pour $z\in\C$, on pose
$$
F(z)=\int_{-\infty}^{+\infty}e^{-t^2+zt}\,dt .
$$
1. Montrer que l'intégrale définissant $F(z)$ converge absolument pour tout $z\in\C$, que $F$ est holomorphe sur $\C$, et exprimer $F^{(n)}(0)$ ($n\in\N$) comme une intégrale.
2. Calculer $F(x)$ pour $x$ réel.
3. En déduire que $F(z)=\sqrt\pi\,e^{z^2/4}$ pour tout $z\in\C$.
4. En déduire, pour $\xi\in\R$, les valeurs de $\displaystyle\int_{-\infty}^{+\infty}e^{-t^2}\cos(\xi t)\,dt$ et $\displaystyle\int_{-\infty}^{+\infty}e^{-t^2}\sin(\xi t)\,dt$, puis, pour $a>0$, celle de $\displaystyle\int_{-\infty}^{+\infty}e^{-at^2}e^{-i\xi t}\,dt$. Que remarque-t-on pour $a=\frac12$ ?
5. Calculer, pour tout $n\in\N$, $\displaystyle\int_{-\infty}^{+\infty}t^{n}e^{-t^2}\,dt$.
6. On pose maintenant $G(z)=\displaystyle\int_{-\infty}^{+\infty}e^{-|t|+zt}\,dt$.
   * (a) Montrer que $G$ est définie et holomorphe sur la bande $B=\{z\in\C : |\Re z|<1\}$, et que l'intégrale diverge si $|\Re z|\ge1$.
   * (b) Calculer $G(x)$ pour $x\in\,]-1,1[$, en déduire $G$ sur $B$, puis $\displaystyle\int_{-\infty}^{+\infty}e^{-|t|}\cos(\xi t)\,dt$ pour $\xi\in\R$.
   * (c) La formule obtenue pour $G$ a un sens sur un ouvert plus grand que $B$. Est-ce une contradiction ?

## Indices

### Indice 1
Une fonction définie par une intégrale dépendant d'un paramètre complexe : il y a un théorème du cours qui donne son holomorphie, à condition d'exhiber une **domination locale** (indépendante de $z$ dans un petit disque). Ensuite, deux fonctions holomorphes qui coïncident sur $\R$...

### Indice 2
Théorème I.9.1 : il faut, pour chaque $z_0$, un disque $D(z_0,r_0)$ et une fonction intégrable $g_{z_0}(t)$ avec $|e^{-t^2+zt}|\le g_{z_0}(t)$ pour tout $z$ du disque. Utiliser $|e^{-t^2+zt}|=e^{-t^2+t\Re z}\le e^{-t^2+R|t|}$ dès que $|z|\le R$. Pour 3, appliquer le principe du prolongement analytique sur l'ouvert connexe $\C$ avec $X=\R$.

### Indice 3
Pour 2 : $-t^2+xt=-\left(t-\frac x2\right)^2+\frac{x^2}{4}$, puis changement de variable $s=t-\frac x2$. Pour 5 : identifier les coefficients de la série de Taylor de $F$ en $0$, d'une part $F^{(n)}(0)/n!$, d'autre part ceux de $\sqrt\pi\sum_k\frac{z^{2k}}{4^kk!}$. Pour 6 (b) : couper l'intégrale en $0$.

## Corrigé

**1.** Posons $\Phi(z,t)=e^{-t^2+zt}$ sur $\C\times\R$. On vérifie les hypothèses du théorème d'holomorphie sous le signe intégrale (poly, Théorème I.9.1, p. 24, [[ch01-holomorphie-sous-integrale]]) avec $\Omega=\C$ et $X=\R$.

* *(i) Mesurabilité et holomorphie en $z$.* $\Phi$ est continue sur $\C\times\R$, donc mesurable ; pour $t$ fixé, $z\mapsto e^{-t^2}e^{zt}$ est holomorphe sur $\C$ (composée de $z\mapsto zt$ et de $\exp$, [[ch01-exp-trigo-hyperboliques]]).
* *(ii) Domination locale.* Soit $z_0\in\C$ ; prenons $r_0=1$ et $R=|z_0|+1$. Pour $z\in D(z_0,1)$, on a $|\Re z|\le|z|<R$, donc
$$
|\Phi(z,t)|=e^{-t^2+t\Re z}\le e^{-t^2+R|t|}=:g_{z_0}(t).
$$
La fonction $g_{z_0}$ est continue et intégrable sur $\R$ : pour $|t|\ge2R$, $R|t|\le t^2/2$, donc $g_{z_0}(t)\le e^{-t^2/2}$, qui est intégrable ; sur le compact $[-2R,2R]$, $g_{z_0}$ est continue donc intégrable.

Le théorème I.9.1 donne : $F(z)$ est bien définie (l'intégrale converge absolument), $F$ est holomorphe sur $\C$, et pour tout $n\in\N$, $F^{(n)}(z)=\int_\R\frac{\partial^n\Phi}{\partial z^n}(z,t)\,dt=\int_\R t^ne^{-t^2+zt}\,dt$. En particulier
$$
F^{(n)}(0)=\int_{-\infty}^{+\infty}t^ne^{-t^2}\,dt .
$$

**2.** Pour $x\in\R$, $-t^2+xt=-\left(t-\frac x2\right)^2+\frac{x^2}{4}$. Le changement de variable $s=t-\frac x2$ (translation, qui préserve la mesure de Lebesgue) donne
$$
F(x)=e^{x^2/4}\int_{-\infty}^{+\infty}e^{-(t-x/2)^2}\,dt=e^{x^2/4}\int_{-\infty}^{+\infty}e^{-s^2}\,ds=\sqrt\pi\,e^{x^2/4}.
$$

**3.** La fonction $\Psi(z)=\sqrt\pi\,e^{z^2/4}$ est entière (composée du polynôme $z^2/4$ et de $\exp$). Les fonctions $F$ et $\Psi$ sont holomorphes sur l'ouvert **connexe** $\C$ et coïncident sur $X=\R$ d'après 2 ; $X$ a un point d'accumulation dans $\C$ (par exemple $0$, limite de $1/n\in X\setminus\{0\}$). Par le principe du prolongement analytique (poly, Corollaire I.11.6, p. 28, [[ch01-prolongement-analytique]]), $F=\Psi$ sur $\C$ :
$$
\int_{-\infty}^{+\infty}e^{-t^2+zt}\,dt=\sqrt\pi\,e^{z^2/4}\qquad(z\in\C).
$$

**4.** Prenons $z=i\xi$ avec $\xi\in\R$ : $\int_\R e^{-t^2}e^{i\xi t}\,dt=\sqrt\pi\,e^{(i\xi)^2/4}=\sqrt\pi\,e^{-\xi^2/4}$. En séparant parties réelle et imaginaire ($e^{i\xi t}=\cos(\xi t)+i\sin(\xi t)$, et le second membre est réel) :
$$
\int_{-\infty}^{+\infty}e^{-t^2}\cos(\xi t)\,dt=\sqrt\pi\,e^{-\xi^2/4},\qquad \int_{-\infty}^{+\infty}e^{-t^2}\sin(\xi t)\,dt=0
$$
(le second résultat se voit aussi par imparité). Pour $a>0$, le changement de variable $t=s/\sqrt a$ donne
$$
\int_{-\infty}^{+\infty}e^{-at^2}e^{-i\xi t}\,dt=\frac{1}{\sqrt a}\int_{-\infty}^{+\infty}e^{-s^2}e^{-i(\xi/\sqrt a)s}\,ds=\frac{1}{\sqrt a}F\!\left(-\frac{i\xi}{\sqrt a}\right)=\sqrt{\frac\pi a}\,e^{-\xi^2/(4a)} .
$$
Pour $a=\frac12$ : $\int_\R e^{-t^2/2}e^{-i\xi t}\,dt=\sqrt{2\pi}\,e^{-\xi^2/2}$. **La gaussienne $e^{-t^2/2}$ est, au facteur $\sqrt{2\pi}$ près, sa propre transformée de Fourier.**

**5.** $F$ est entière, donc analytique sur $\C$ ([[ch01-holomorphe-analytique]]) : sa série de Taylor en $0$ converge vers $F$ sur tout disque $D(0,R)$ (estimées de Cauchy, rayon $\ge R$ pour tout $R$), et ses coefficients sont $F^{(n)}(0)/n!$. D'autre part, d'après 3 et le développement de l'exponentielle,
$$
F(z)=\sqrt\pi\sum_{k\ge0}\frac{z^{2k}}{4^kk!}\qquad(z\in\C).
$$
Une série entière de rayon $>0$ a ses coefficients donnés par $a_n=f^{(n)}(0)/n!$ ([[ch01-serie-entiere-derivees-tout-ordre]]), donc ils sont déterminés par la fonction : on peut identifier. On obtient $F^{(2k+1)}(0)=0$ et $F^{(2k)}(0)/(2k)!=\sqrt\pi/(4^kk!)$, c'est-à-dire, avec 1 :
$$
\int_{-\infty}^{+\infty}t^{2k+1}e^{-t^2}\,dt=0,\qquad \int_{-\infty}^{+\infty}t^{2k}e^{-t^2}\,dt=\frac{(2k)!}{4^k\,k!}\sqrt\pi .
$$
Contrôle : $k=1$ donne $\frac{2}{4}\sqrt\pi=\frac{\sqrt\pi}{2}$, $k=2$ donne $\frac{24}{32}\sqrt\pi=\frac{3\sqrt\pi}{4}$ (valeurs classiques, obtenues aussi par intégration par parties).

**6. (a)** *Divergence pour $|\Re z|\ge1$.* $|e^{-|t|+zt}|=e^{-|t|+t\Re z}$. Si $\Re z\ge1$, pour $t\ge0$ cet exposant vaut $t(\Re z-1)\ge0$, donc le module de l'intégrande est $\ge1$ sur $[0,+\infty[$ : l'intégrale diverge (absolument, et elle n'a pas non plus de sens au sens de Lebesgue). De même si $\Re z\le-1$ avec $t\le0$.

*Holomorphie sur $B$.* $B$ est un ouvert (image réciproque de $]-1,1[$ par la fonction continue $\Re$). On applique le théorème I.9.1 avec $\Omega=B$, $X=\R$, $\Phi(z,t)=e^{-|t|+zt}$ : $\Phi$ est continue, et holomorphe en $z$ à $t$ fixé. Soit $z_0\in B$ ; posons $r_0=\frac{1-|\Re z_0|}{2}>0$ et $c=\frac{1+|\Re z_0|}{2}<1$. Pour $z\in D(z_0,r_0)$, $|\Re z|\le|\Re z_0|+r_0=c$, donc $D(z_0,r_0)\subset B$ et
$$
|\Phi(z,t)|=e^{-|t|+t\Re z}\le e^{-|t|+c|t|}=e^{-(1-c)|t|}=:g_{z_0}(t),
$$
intégrable sur $\R$ car $1-c>0$. Donc $G$ est définie et holomorphe sur $B$.

**(b)** Pour $x\in\,]-1,1[$ :
$$
G(x)=\int_0^{+\infty}e^{-(1-x)t}\,dt+\int_{-\infty}^0e^{(1+x)t}\,dt=\frac{1}{1-x}+\frac{1}{1+x}=\frac{2}{1-x^2}.
$$
La fraction rationnelle $\rho(z)=\frac{2}{1-z^2}$ est holomorphe sur $\C\setminus\{-1,1\}\supset B$ ([[ch01-polynomes-fractions-rationnelles]]). $G$ et $\rho$ sont holomorphes sur $B$, qui est **connexe** (convexe : c'est une bande), et coïncident sur $]-1,1[$, qui a des points d'accumulation dans $B$. Par prolongement analytique, $G(z)=\frac{2}{1-z^2}$ sur $B$. En $z=i\xi\in B$ :
$$
\int_{-\infty}^{+\infty}e^{-|t|}e^{i\xi t}\,dt=\frac{2}{1+\xi^2},\qquad\text{d'où}\qquad \int_{-\infty}^{+\infty}e^{-|t|}\cos(\xi t)\,dt=\frac{2}{1+\xi^2}
$$
(la partie imaginaire, $\int e^{-|t|}\sin(\xi t)\,dt$, est nulle par imparité). On peut aussi calculer directement $G(z)$ pour $z\in B$ par la même primitive, ce qui confirme le résultat.

**(c)** Non. Le principe du prolongement analytique est un résultat d'**unicité** : il dit que $\rho$ est la **seule** fonction holomorphe sur un ouvert connexe contenant $B$ qui prolonge $G$. Il ne dit pas que l'**intégrale** a un sens hors de $B$ : d'après (a), elle diverge pour $|\Re z|\ge1$, alors que $\rho$ est holomorphe sur $\C\setminus\{\pm1\}$. La fonction $\rho$ est le prolongement analytique de $G$, pas une nouvelle expression intégrale valable partout (même phénomène que $\sum z^n$ et $\frac1{1-z}$ : [[ch01-exemple-prolongement-serie-geometrique]]).

## Pièges et variantes

* La domination doit être **indépendante de $z$** dans un disque autour de chaque $z_0$ : on ne peut pas majorer par $e^{-t^2+t\Re z}$, qui dépend de $z$. Prendre un disque de rayon fixé et majorer $|\Re z|$ par une constante.
* En 3, il ne suffit pas que $F$ et $\Psi$ coïncident « en beaucoup de points » : il faut un ensemble avec point d'accumulation **dans** l'ouvert, et l'ouvert **connexe** — dire les deux.
* Erreur fréquente en 2 : faire le changement de variable « complexe » $s=t-\frac z2$ directement pour $z\notin\R$ ; c'est un déplacement du chemin d'intégration hors de $\R$, qui demande un argument de contour (formule de Cauchy sur un rectangle). Le prolongement analytique évite précisément ce calcul.
* En 6, $B$ n'est pas tout $\C$ : vérifier que les disques $D(z_0,r_0)$ restent **dans** $B$ (c'est exigé par le théorème I.9.1).
* Variante : $H(z)=\int_0^{+\infty}e^{-t}t^{z-1}\,dt$ (fonction $\Gamma$) ; le même schéma montre l'holomorphie sur $\{\Re z>0\}$ ([[ch01-fonction-gamma]]).
* Variante : $\int_0^{+\infty}e^{-t^2}\cos(\xi t)\,dt=\frac{\sqrt\pi}{2}e^{-\xi^2/4}$ par parité, et $\int_{-\infty}^{+\infty}e^{-t^2}\cosh(xt)\,dt=\sqrt\pi\,e^{x^2/4}$.
