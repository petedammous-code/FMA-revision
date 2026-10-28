---
id: ex-ch02-rectangle-cosinus-hyperbolique
type: exercise
chapters: [2]
title: La fonction 1/cosh est sa propre transformée de Fourier
source: "Classique (Stein–Shakarchi, Complex Analysis, ch. 3, § 2 : contour rectangulaire pour 1/cosh(πx))"
difficulty: 3
time: 40
tools: [ch02-formule-residus-pratique, ch02-residu-pole-simple, ch02-pole-meromorphe-def, ch01-longueur-majoration-integrale, ch01-exp-trigo-hyperboliques]
---
## Énoncé

Pour $\xi\in\R$, on pose
$$
F(\xi)=\int_{-\infty}^{+\infty}\frac{e^{-2i\pi x\xi}}{\cosh(\pi x)}\,dx ,
\qquad\text{et}\qquad
f(z)=\frac{e^{-2i\pi z\xi}}{\cosh(\pi z)}\quad(z\in\C).
$$
1. Justifier que $F(\xi)$ est une intégrale absolument convergente et que $F(\xi)=\displaystyle\int_{-\infty}^{+\infty}\frac{\cos(2\pi x\xi)}{\cosh(\pi x)}\,dx$.
2. Déterminer les zéros de $z\mapsto\cosh(\pi z)$ et montrer qu'ils sont simples. En déduire que $f$ est méromorphe sur $\C$, donner ses pôles et calculer son résidu en $\frac i2$.
3. Exprimer $f(z+i)$ en fonction de $f(z)$.
4. En intégrant $f$ sur un lacet bien choisi, montrer que
$$
F(\xi)=\frac{1}{\cosh(\pi\xi)}\qquad(\xi\in\R).
$$
5. En déduire, pour $a\in\R$, la valeur de $\displaystyle\int_{-\infty}^{+\infty}\frac{\cos(ax)}{\cosh x}\,dx$, puis celle de $\displaystyle\int_{-\infty}^{+\infty}\frac{dx}{\cosh x}$.

## Indices

### Indice 1
Un demi-cercle est une mauvaise idée : $f$ a une infinité de pôles sur l'axe imaginaire. La question 3 suggère plutôt un contour qui exploite le fait que $f(x+i)$ est proportionnel à $f(x)$ : l'intégrale sur le côté « du haut » redonnera l'intégrale cherchée.

### Indice 2
Prendre le bord $\Gamma_R$ du rectangle de sommets $-R$, $R$, $R+i$, $-R+i$, parcouru dans le sens direct. Il entoure un seul pôle, $\frac i2$ ; la formule des résidus pour le bord d'un polygone s'applique ($f$ est méromorphe sur $\C$, sans pôle sur $\Gamma_R$).

### Indice 3
$\cosh(\pi(x+i))=-\cosh(\pi x)$, donc $f(x+i)=-e^{2\pi\xi}f(x)$. Sur les côtés verticaux $z=\pm R+iy$, $y\in[0,1]$ : $|\cosh(\pi z)|^2=\sinh^2(\pi R)+\cos^2(\pi y)\ge\sinh^2(\pi R)$.

## Corrigé

**1.** Pour $x\in\R$, $\cosh(\pi x)\ge\frac12e^{\pi|x|}$, donc $\left|\frac{e^{-2i\pi x\xi}}{\cosh(\pi x)}\right|\le2e^{-\pi|x|}$, intégrable sur $\R$ : l'intégrale converge absolument, et $F(\xi)=\lim_{R\to+\infty}\int_{-R}^Rf(x)\,dx$. En écrivant $e^{-2i\pi x\xi}=\cos(2\pi x\xi)-i\sin(2\pi x\xi)$, la partie en $\sin$ est l'intégrale d'une fonction impaire, nulle : $F(\xi)=\int_{\R}\frac{\cos(2\pi x\xi)}{\cosh(\pi x)}dx$, qui est réel.

**2.** Pour $w\in\C$ ([[ch01-exp-trigo-hyperboliques]]), $\cosh w=0\iff e^{w}+e^{-w}=0\iff e^{2w}=-1\iff 2w\in i\pi+2i\pi\Z\iff w\in i\pi\left(\Z+\tfrac12\right)$. Donc les zéros de $\cosh(\pi z)$ sont les $z_k=i\left(k+\frac12\right)$, $k\in\Z$. Ils sont simples : la dérivée $\pi\sinh(\pi z)$ vaut en $z_k$ $\pi\sinh\big(i\pi(k+\tfrac12)\big)=i\pi\sin\big(\pi(k+\tfrac12)\big)=i\pi(-1)^k\ne0$.

L'ensemble $\{z_k\}$ est localement fini dans $\C$ (pas de point d'accumulation), $f$ est holomorphe en dehors, et le numérateur $e^{-2i\pi z\xi}$ ne s'annule jamais : chaque $z_k$ est un pôle simple de $f$ ([[ch02-pole-meromorphe-def]]), et $f$ est méromorphe sur $\C$. Pour $q(z)=\cosh(\pi z)$, qui a un zéro simple en $\frac i2$, et $g(z)=e^{-2i\pi z\xi}$ holomorphe, on a $\mathrm{res}_{i/2}(g/q)=g(\tfrac i2)/q'(\tfrac i2)$ ([[ch02-residu-pole-simple]], complément) :
$$
\mathrm{res}_{i/2}(f)=\frac{e^{-2i\pi(i/2)\xi}}{\pi\sinh(i\pi/2)}=\frac{e^{\pi\xi}}{i\pi}.
$$

**3.** $\cosh(\pi z+i\pi)=\frac12\left(e^{\pi z}e^{i\pi}+e^{-\pi z}e^{-i\pi}\right)=-\cosh(\pi z)$ et $e^{-2i\pi(z+i)\xi}=e^{-2i\pi z\xi}e^{2\pi\xi}$. Donc, pour tout $z$ qui n'est pas un pôle,
$$
f(z+i)=-e^{2\pi\xi}\,f(z).
$$

**4.** *Le contour.* Pour $R>0$, soit $U_R=\,]-R,R[\,\times\,]0,1[$ (vu dans $\C$) : ouvert connexe borné dont le bord est le lacet simple $\Gamma_R$, polygone de sommets $-R,R,R+i,-R+i$ parcouru dans cet ordre, c'est-à-dire dans le sens direct. Les pôles $z_k$ ont une partie imaginaire $k+\frac12\notin\{0,1\}$ et une partie réelle nulle $\ne\pm R$ : aucun n'est sur $\Gamma_R$, et le seul dans $U_R$ est $z_0=\frac i2$. Avec $\Omega=\C$ simplement connexe contenant $\bar U_R$, la formule des résidus pour le bord d'un domaine ([[ch02-formule-residus-pratique]]) donne
$$
\int_{\Gamma_R}f(z)\,dz=2i\pi\,\mathrm{res}_{i/2}(f)=2e^{\pi\xi}.
$$

*Découpage.* En paramétrant les quatre côtés (le côté du haut parcouru de $R+i$ vers $-R+i$, le côté gauche de $-R+i$ vers $-R$) :
$$
\int_{\Gamma_R}f=\int_{-R}^{R}f(x)\,dx+\underbrace{i\int_0^1f(R+iy)\,dy}_{V_R}-\int_{-R}^{R}f(x+i)\,dx-\underbrace{i\int_0^1f(-R+iy)\,dy}_{V_{-R}} .
$$
D'après 3, $-\int_{-R}^Rf(x+i)\,dx=e^{2\pi\xi}\int_{-R}^Rf(x)\,dx$. Donc
$$
\big(1+e^{2\pi\xi}\big)\int_{-R}^{R}f(x)\,dx=2e^{\pi\xi}-V_R+V_{-R}.
$$

*Côtés verticaux.* Pour $z=\pm R+iy$, $y\in[0,1]$ : $|\cosh(a+ib)|^2=\cosh^2a\cos^2b+\sinh^2a\sin^2b=\sinh^2a+\cos^2b$, donc $|\cosh(\pi z)|\ge\sinh(\pi R)$ ; et $|e^{-2i\pi z\xi}|=e^{2\pi y\xi}\le e^{2\pi|\xi|}$. Les côtés sont de longueur $1$, donc ([[ch01-longueur-majoration-integrale]])
$$
|V_{\pm R}|\le\frac{e^{2\pi|\xi|}}{\sinh(\pi R)}\xrightarrow[R\to+\infty]{}0 .
$$

*Conclusion.* En faisant $R\to+\infty$ (question 1) : $(1+e^{2\pi\xi})F(\xi)=2e^{\pi\xi}$, soit
$$
F(\xi)=\frac{2e^{\pi\xi}}{1+e^{2\pi\xi}}=\frac{2}{e^{-\pi\xi}+e^{\pi\xi}}=\frac{1}{\cosh(\pi\xi)} .
$$

**5.** Par le changement de variable $x=\pi u$ ($dx=\pi\,du$) puis la question 1 et la question 4 avec $\xi=\frac a2$ :
$$
\int_{-\infty}^{+\infty}\frac{\cos(ax)}{\cosh x}\,dx=\pi\int_{-\infty}^{+\infty}\frac{\cos(2\pi u\cdot\frac a2)}{\cosh(\pi u)}\,du=\pi F\!\left(\tfrac a2\right)=\frac{\pi}{\cosh(\pi a/2)} .
$$
Pour $a=0$ : $\int_{-\infty}^{+\infty}\frac{dx}{\cosh x}=\pi$, ce que l'on vérifie directement : une primitive de $\frac1{\cosh x}=\frac{2e^x}{e^{2x}+1}$ est $2\arctan(e^x)$, qui va de $0$ à $\pi$. (Les autres valeurs ont été vérifiées numériquement.)

## Pièges et variantes

* Fermer par un demi-cercle : il y a une infinité de pôles $i(k+\frac12)$, et pour $R=k+\frac12$ le demi-cercle passe même **sur** un pôle ; $1/\cosh$ n'est pas petite sur l'arc près de l'axe imaginaire. Le bon réflexe face à une fonction (quasi-)périodique en $i$ est le **rectangle**.
* Mal orienter le côté du haut : il est parcouru de $R+i$ vers $-R+i$, d'où le signe $-$ ; combiné avec $f(x+i)=-e^{2\pi\xi}f(x)$, on obtient le facteur $1+e^{2\pi\xi}$, qui ne s'annule jamais (sinon on ne pourrait pas conclure).
* Oublier de vérifier qu'aucun pôle n'est sur le contour : ici les côtés horizontaux sont à hauteur $0$ et $1$, entre les pôles.
* Variante : avec le rectangle de hauteur $2$, on a $f(x+2i)=e^{4\pi\xi}f(x)$, deux pôles intérieurs et le facteur $1-e^{4\pi\xi}$, qui s'annule pour $\xi=0$ : le calcul marche pour $\xi\ne0$ mais il est plus lourd. Le choix de la hauteur est dicté par la plus petite « période » qui fait réapparaître $f(x)$.
* Variante : pour $0<a<1$, le rectangle de hauteur $2\pi$ appliqué à $\frac{e^{az}}{1+e^z}$ donne $\int_{-\infty}^{+\infty}\frac{e^{ax}}{1+e^x}\,dx=\frac{\pi}{\sin(\pi a)}$, ce qui redonne l'Exemple II.9.7 du poly ([[ch02-exemple-trou-de-serrure]]) après le changement de variable $t=e^x$.
