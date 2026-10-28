---
id: ex-ch01-trigo-coefficients-exponentielle
type: exercise
chapters: [1]
title: Intégrales trigonométriques cachées dans l'exponentielle
source: "Classique (coefficients de Taylor par la formule de Cauchy), formulation adaptée"
difficulty: 1
time: 15
tools: [ch01-estimees-cauchy, ch01-integrale-sur-cercle, ch01-exp-trigo-hyperboliques, ch01-primitive-locale, ch01-integrale-primitive]
---
## Énoncé

Pour $n\in\Z$ et $r>0$, on pose
$$
I_n(r)=\int_0^{2\pi} e^{r\cos\theta}\cos(n\theta-r\sin\theta)\,d\theta,\qquad
J_n(r)=\int_0^{2\pi} e^{r\cos\theta}\sin(n\theta-r\sin\theta)\,d\theta .
$$

1. Montrer que $I_n(r)-i\,J_n(r)=\displaystyle\int_0^{2\pi}e^{re^{i\theta}}\,e^{-in\theta}\,d\theta$.
2. Calculer $I_n(r)$ et $J_n(r)$ pour $n\in\N$.
3. Calculer $I_n(r)$ et $J_n(r)$ pour $n\in\Z$ avec $n\le -1$.
4. En déduire, pour tout entier $n\ge1$, la valeur de $\displaystyle\int_0^{2\pi}e^{\cos\theta}\cos(\sin\theta)\cos(n\theta)\,d\theta$.

## Indices

### Indice 1
Une intégrale sur $[0,2\pi]$ d'une expression en $e^{i\theta}$ est une intégrale sur un cercle déguisée. Quelle formule du cours exprime $f^{(n)}(0)$ comme une intégrale sur un cercle ?

### Indice 2
La formule (I.7.1) des dérivées successives, appliquée à $f=\exp$ (holomorphe sur $\C$ tout entier) sur le cercle $C(0,r)$, avec le paramétrage $\omega=re^{i\theta}$, $d\omega=ire^{i\theta}\,d\theta$.

### Indice 3
Pour $n=-m$ avec $m\ge1$, l'intégrale vaut, à une constante près, $\int_{C(0,r)}e^{\omega}\omega^{m-1}\,d\omega$ : la fonction $\omega\mapsto e^\omega\omega^{m-1}$ a-t-elle une primitive sur un disque contenant le cercle ?

## Corrigé

**1.** Pour $\theta\in[0,2\pi]$, avec $e^{x+iy}=e^xe^{iy}$ ([[ch01-exp-trigo-hyperboliques]]),
$$
e^{re^{i\theta}}e^{-in\theta}=e^{r\cos\theta+ir\sin\theta}e^{-in\theta}=e^{r\cos\theta}\,e^{i(r\sin\theta-n\theta)} .
$$
Sa partie réelle est $e^{r\cos\theta}\cos(r\sin\theta-n\theta)=e^{r\cos\theta}\cos(n\theta-r\sin\theta)$ (le cosinus est pair) et sa partie imaginaire est $e^{r\cos\theta}\sin(r\sin\theta-n\theta)=-e^{r\cos\theta}\sin(n\theta-r\sin\theta)$ (le sinus est impair). En intégrant parties réelle et imaginaire sur $[0,2\pi]$, on obtient $\int_0^{2\pi}e^{re^{i\theta}}e^{-in\theta}\,d\theta=I_n(r)-iJ_n(r)$.

**2.** Soit $n\in\N$. La fonction $f=\exp$ est holomorphe sur $\Omega=\C$, donc pour $z_0=0$ on a $\rho(0)=\sup\{\rho>0 : \bar D(0,\rho)\subset\C\}=+\infty$ et la formule (I.7.1) de [[ch01-estimees-cauchy]] s'applique pour tout $r>0$, au point $z=z_0=0$ :
$$
\frac{f^{(n)}(0)}{n!}=\frac{1}{2i\pi}\int_{C(0,r)}\frac{e^{\omega}}{\omega^{n+1}}\,d\omega .
$$
On paramètre $C(0,r)$ par $\omega=re^{i\theta}$, $\theta\in[0,2\pi]$ ([[ch01-integrale-sur-cercle]]) :
$$
\frac{1}{2i\pi}\int_{C(0,r)}\frac{e^{\omega}}{\omega^{n+1}}\,d\omega=\frac{1}{2i\pi}\int_0^{2\pi}\frac{e^{re^{i\theta}}}{r^{n+1}e^{i(n+1)\theta}}\,ire^{i\theta}\,d\theta=\frac{1}{2\pi r^n}\int_0^{2\pi}e^{re^{i\theta}}e^{-in\theta}\,d\theta .
$$
Comme $f^{(n)}=\exp$, on a $f^{(n)}(0)=1$, d'où avec la question 1 :
$$
I_n(r)-iJ_n(r)=\frac{2\pi\,r^n}{n!}\in\R,\qquad\text{donc}\qquad I_n(r)=\frac{2\pi\,r^n}{n!},\quad J_n(r)=0\qquad(n\in\N).
$$
(Variante : développer $e^{re^{i\theta}}=\sum_{k\ge0}\frac{r^k}{k!}e^{ik\theta}$, série qui converge normalement en $\theta$, et intégrer terme à terme : seul $k=n$ contribue.)

**3.** Soit $n=-m$ avec $m\ge1$. La fonction $g(\omega)=e^{\omega}\omega^{m-1}$ est holomorphe sur $\C$ (produit de fonctions holomorphes, $m-1\ge0$). Sur le disque ouvert $D(0,2r)$, qui contient le cercle $C(0,r)$, elle admet une primitive holomorphe $G$ ([[ch01-primitive-locale]]) ; le cercle étant un lacet de $D(0,2r)$, [[ch01-integrale-primitive]] donne $\int_{C(0,r)}g(\omega)\,d\omega=0$. Or, avec le même paramétrage,
$$
\int_{C(0,r)}e^{\omega}\omega^{m-1}\,d\omega=\int_0^{2\pi}e^{re^{i\theta}}r^{m-1}e^{i(m-1)\theta}\,ire^{i\theta}\,d\theta=ir^m\int_0^{2\pi}e^{re^{i\theta}}e^{im\theta}\,d\theta=ir^m\bigl(I_{-m}(r)-iJ_{-m}(r)\bigr).
$$
Donc $I_n(r)=J_n(r)=0$ pour tout $n\le-1$.

**4.** Pour $n\ge1$, avec $s=\sin\theta$ : $\cos(n\theta-s)+\cos(-n\theta-s)=\cos(n\theta-s)+\cos(n\theta+s)=2\cos(n\theta)\cos s$. En prenant $r=1$ :
$$
\int_0^{2\pi}e^{\cos\theta}\cos(\sin\theta)\cos(n\theta)\,d\theta=\frac{I_n(1)+I_{-n}(1)}{2}=\frac12\Bigl(\frac{2\pi}{n!}+0\Bigr)=\frac{\pi}{n!}.
$$
(Vérification numérique : pour $n=1,2,3$, on trouve $\pi$, $\pi/2$, $\pi/6$ à $10^{-15}$ près.)

## Pièges et variantes

* Oublier le facteur $d\omega=ire^{i\theta}\,d\theta$ dans le paramétrage : on obtient alors $e^{-i(n+1)\theta}$ au lieu de $e^{-in\theta}$ et un résultat faux d'un rang.
* La formule $2\pi r^n/n!$ n'a pas de sens pour $n<0$ : il faut un argument séparé (question 3), qui repose sur le fait que $e^\omega\omega^{m-1}$ est **holomorphe sur un disque contenant le cercle**. Ce serait faux pour $e^{\omega}\omega^{-m-1}$, qui n'est pas définie en $0$.
* Pour $n=0$, la question 4 donne $\int_0^{2\pi}e^{\cos\theta}\cos(\sin\theta)\,d\theta=I_0(1)=2\pi$ et non $\pi$ : les deux termes $I_n$ et $I_{-n}$ sont alors le même.
* Variante : pour toute fonction entière $f(z)=\sum_n a_nz^n$, $\int_0^{2\pi}f(re^{i\theta})e^{-in\theta}\,d\theta=2\pi a_nr^n$ pour $n\ge0$. Avec $f=\cos$ et $n=0$ : $\Re\cos(e^{i\theta})=\cos(\cos\theta)\cosh(\sin\theta)$, donc $\int_0^{2\pi}\cos(\cos\theta)\cosh(\sin\theta)\,d\theta=2\pi$ (c'est la formule de la moyenne [[ch01-formule-moyenne]]).
