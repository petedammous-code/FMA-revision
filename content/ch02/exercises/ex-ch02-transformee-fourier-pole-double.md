---
id: ex-ch02-transformee-fourier-pole-double
type: exercise
chapters: [2]
title: Une intégrale de Fourier avec un pôle double
source: "Classique (intégrales de Fourier de fractions rationnelles ; variante de l'Exemple II.6.1 du poly)"
difficulty: 1
time: 15
tools: [ch02-formule-residus-pratique, ch02-laurent-developpement, ch02-residu-def, ch01-longueur-majoration-integrale, ch02-exemple-integrale-fourier]
---
## Énoncé

1. Justifier que les intégrales
$$
I=\int_{-\infty}^{+\infty}\frac{\cos x}{(1+x^2)^2}\,dx\qquad\text{et}\qquad I'=\int_{-\infty}^{+\infty}\frac{\sin x}{(1+x^2)^2}\,dx
$$
sont absolument convergentes, et que $I'=0$.
2. Calculer $I$.
3. En déduire, par une intégration par parties, la valeur de $\displaystyle\int_{-\infty}^{+\infty}\frac{x\sin x}{(1+x^2)^2}\,dx$ (on pourra utiliser que $\int_{-\infty}^{+\infty}\frac{\cos x}{1+x^2}\,dx=\frac{\pi}{e}$).

## Indices

### Indice 1
$\cos x=\Re(e^{ix})$ : regarder $I+iI'$ comme la limite de l'intégrale sur $[-R,R]$ d'une fonction méromorphe sur $\C$, et fermer le segment par un demi-cercle. Lequel, haut ou bas ?

### Indice 2
$f(z)=\dfrac{e^{iz}}{(1+z^2)^2}$ sur le bord du demi-disque supérieur $\{|z|<R,\ \Im z>0\}$ : formule des résidus pour le bord d'un domaine. Sur le demi-cercle, $|e^{iz}|=e^{-\Im z}\le1$.

### Indice 3
Le seul pôle intérieur est $i$, et il est **double** : $f(z)=\dfrac{h(z)}{(z-i)^2}$ avec $h(z)=\dfrac{e^{iz}}{(z+i)^2}$, et le résidu est $h'(i)$.

## Corrigé

**1.** Les intégrandes sont continus sur $\R$ et majorés en module par $\frac{1}{(1+x^2)^2}\le\frac{1}{1+x^2}$, intégrable sur $\R$ : les deux intégrales convergent absolument. L'intégrande de $I'$ est impair, donc $I'=0$. Par suite
$$
I=I+iI'=\int_{-\infty}^{+\infty}\frac{e^{ix}}{(1+x^2)^2}\,dx=\lim_{R\to+\infty}\int_{-R}^{R}\frac{e^{ix}}{(1+x^2)^2}\,dx .
$$

**2.** *La fonction.* $f(z)=\dfrac{e^{iz}}{(1+z^2)^2}=\dfrac{e^{iz}}{(z-i)^2(z+i)^2}$ est holomorphe sur $\C\setminus\{i,-i\}$ et méromorphe sur $\C$ ; comme $e^{iz}$ ne s'annule pas, $i$ et $-i$ sont des pôles de multiplicité $2$ ([[ch02-pole-meromorphe-def]]).

*Le contour.* Pour $R>1$, soit $U_R=\{|z|<R,\ \Im z>0\}$ : c'est un ouvert connexe borné dont le bord est le lacet simple $\Gamma_R=[-R,R]\vee C_R^+$, où $C_R^+:\theta\mapsto Re^{i\theta}$, $\theta\in[0,\pi]$ ; il est orienté dans le sens direct (l'intérieur est à gauche). $\Omega=\C$ est simplement connexe et contient $\bar U_R$ ; $f$ n'a pas de pôle sur $\Gamma_R$ (car $|\pm i|=1<R$ et $\pm i\notin\R$) ; le seul pôle dans $U_R$ est $i$. La formule des résidus sous forme pratique ([[ch02-formule-residus-pratique]]) donne
$$
\int_{\Gamma_R}f(z)\,dz=2i\pi\,\mathrm{res}_i(f).
$$

*Le résidu.* $h(z)=(z-i)^2f(z)=\dfrac{e^{iz}}{(z+i)^2}$ est holomorphe au voisinage de $i$. En écrivant $h(z)=h(i)+h'(i)(z-i)+(z-i)^2k(z)$ avec $k$ holomorphe près de $i$, on obtient le développement de Laurent $f(z)=\frac{h(i)}{(z-i)^2}+\frac{h'(i)}{z-i}+k(z)$ ([[ch02-laurent-developpement]]), donc $\mathrm{res}_i(f)=h'(i)$ ([[ch02-residu-def]]). Or
$$
h'(z)=\frac{ie^{iz}(z+i)^2-2(z+i)e^{iz}}{(z+i)^4}=e^{iz}\,\frac{i(z+i)-2}{(z+i)^3},
\qquad
h'(i)=e^{-1}\,\frac{i\cdot 2i-2}{(2i)^3}=e^{-1}\,\frac{-4}{-8i}=\frac{1}{2ie}.
$$
Donc $\int_{\Gamma_R}f(z)\,dz=2i\pi\cdot\frac{1}{2ie}=\frac{\pi}{e}$ pour tout $R>1$.

*Le demi-cercle.* Pour $z=Re^{i\theta}$, $\theta\in[0,\pi]$ : $|e^{iz}|=e^{-R\sin\theta}\le1$ et $|1+z^2|\ge|z|^2-1=R^2-1$. La majoration $\left|\int_\gamma g\right|\le\sup_\gamma|g|\cdot L(\gamma)$ ([[ch01-longueur-majoration-integrale]]) avec $L(C_R^+)=\pi R$ donne
$$
\left|\int_{C_R^+}f(z)\,dz\right|\le\frac{\pi R}{(R^2-1)^2}\xrightarrow[R\to+\infty]{}0 .
$$

*Conclusion.* $\int_{-R}^{R}\frac{e^{ix}}{(1+x^2)^2}dx=\frac{\pi}{e}-\int_{C_R^+}f(z)\,dz\to\frac{\pi}{e}$, donc, d'après 1.,
$$
I=\int_{-\infty}^{+\infty}\frac{\cos x}{(1+x^2)^2}\,dx=\frac{\pi}{e}\approx1{,}156 .
$$

**3.** Sur $[-R,R]$, avec $u=\sin x$ et $v=-\dfrac{1}{2(1+x^2)}$ (de sorte que $v'=\dfrac{x}{(1+x^2)^2}$) :
$$
\int_{-R}^{R}\frac{x\sin x}{(1+x^2)^2}\,dx=\left[-\frac{\sin x}{2(1+x^2)}\right]_{-R}^{R}+\frac12\int_{-R}^{R}\frac{\cos x}{1+x^2}\,dx .
$$
Le crochet vaut $-\frac{\sin R}{1+R^2}\to0$ ; la dernière intégrale tend vers $\frac{\pi}{e}$ ([[ch02-exemple-integrale-fourier]] avec $k=a=1$). Donc
$$
\int_{-\infty}^{+\infty}\frac{x\sin x}{(1+x^2)^2}\,dx=\frac{\pi}{2e}.
$$
(Contrôle : on retrouve la même valeur en calculant $\Im\int_{\Gamma_R}\frac{ze^{iz}}{(1+z^2)^2}dz$, le résidu en $i$ valant $\frac{1}{4e}$. Les deux valeurs $\pi/e$ et $\pi/(2e)$ ont été vérifiées numériquement.)

## Pièges et variantes

* Prendre $\cos z$ au lieu de $e^{iz}$ : $|\cos(Re^{i\theta})|$ se comporte comme $\frac12e^{R\sin\theta}$ sur le demi-cercle supérieur, et l'intégrale sur l'arc ne tend plus vers $0$.
* Fermer par le **bas** avec $e^{iz}$ : sur le demi-cercle inférieur, $|e^{iz}|=e^{R|\sin\theta|}$ explose. Avec $e^{-iz}$ il faudrait fermer par le bas, et le lacet serait alors parcouru dans le sens indirect (signe $-$).
* Pôle double : $\lim_{z\to i}(z-i)f(z)$ est infinie ; ce n'est pas le résidu. Il faut $\frac{d}{dz}\big[(z-i)^2f(z)\big]_{z=i}$.
* Écrire « $\int_{-\infty}^{+\infty}=\lim_{R\to\infty}\int_{-R}^R$ » sans justification : c'est licite ici parce que l'intégrale converge absolument (question 1) ; pour une intégrale seulement semi-convergente, il faut le justifier séparément.
* Variante : pour $k>0$, $\displaystyle\int_{-\infty}^{+\infty}\frac{\cos(kx)}{(1+x^2)^2}\,dx=\frac{\pi(1+k)}{2}e^{-k}$ (même calcul : $h'(i)=\frac{(1+k)e^{-k}}{4i}$) ; pour $k=1$ on retrouve $\pi/e$.
