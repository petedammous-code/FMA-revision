---
id: ch01-similitude-conforme
type: proposition
chapter: 1
title: "Jacobienne d'une fonction holomorphe = similitude directe ; conformité en tout point où $f'(z)\neq0$"
ref: Remarque I.2.5
page: 8
importance: 2
depends: [ch01-cauchy-riemann, ch01-def-differentiable-r2, ch01-decomposition-r-lineaire, ch01-c-derivable-ssi-df-c-lineaire]
tags: [similitude, conforme, angles, jacobienne, geometrie, orientation]
---
## Intuition

> 💡 Multiplier par un nombre complexe $\lambda=|\lambda|e^{i\varphi}$, c'est **tourner** d'angle $\varphi$ et **dilater** d'un facteur $|\lambda|$. Une fonction $\C$-dérivable en $z$ se comporte, à l'échelle microscopique autour de $z$, comme $w\mapsto f(z)+f'(z)(w-z)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]) : elle transforme un minuscule carré en un minuscule carré (tourné et agrandi), jamais en losange ou en rectangle aplati.

Conséquence géométrique : si $f'(z)\ne0$, deux courbes qui se croisent en $z$ sous un angle $\theta$ ont des images qui se croisent en $f(z)$ sous le même angle $\theta$, avec la même orientation. C'est la **conformité**, le point de vue géométrique sur l'holomorphie, base des transformations conformes du chapitre IV ([[ch04-transformation-conforme-def]]).

Vocabulaire. Une **similitude directe** du plan est une application linéaire composée d'une rotation et d'une homothétie de rapport $>0$ (on accepte ici aussi l'application nulle). L'**angle orienté** de deux vecteurs non nuls $\omega_1,\omega_2\in\C$ est $\arg(\omega_2/\omega_1)$ (modulo $2\pi$) ; l'angle orienté de deux courbes $C^1$ qui se coupent en un point est celui de leurs vecteurs tangents (supposés non nuls) en ce point.

## Énoncé

**Proposition (poly, Remarque I.2.5, p. 8).**

1. Une application $\C$-linéaire de $\C$ dans $\C$ est la multiplication par un nombre complexe $\lambda=\alpha+i\beta$ ($\alpha,\beta\in\R$). Vue comme application de $\R^2$ dans $\R^2$, c'est une similitude directe, éventuellement nulle, dont la matrice dans la base canonique est
$$
\text{(I.2.8)}\qquad\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}.
$$
2. Soit $f=P+iQ$ différentiable en $z$. Les conditions de Cauchy (I.2.6) expriment exactement que la matrice jacobienne (I.2.2) de $f$ au point $z$ est de la forme (I.2.8), avec $\alpha=\frac{\partial P}{\partial x}(z)$ et $\beta=\frac{\partial Q}{\partial x}(z)$ ; on a alors $\lambda=\alpha+i\beta=f'(z)$.
3. Lorsque $\lambda\ne0$, une telle similitude est la composée de l'homothétie de rapport $|\lambda|$ et de la rotation d'angle $\arg\lambda$ : elle multiplie les longueurs par $|\lambda|$ et conserve les angles orientés.
4. Ainsi, en tout point $z$ où $f'(z)\ne0$, une fonction holomorphe conserve les angles orientés — on dit qu'elle est **conforme** en $z$ — et son déterminant jacobien y vaut $\alpha^2+\beta^2=|f'(z)|^2>0$, de sorte qu'elle préserve l'orientation.

## Hypothèses

### H1 — $f$ est $\C$-dérivable en $z$ (par exemple holomorphe)

**Rôle.** Par la proposition I.2.3 et le corollaire I.2.4, c'est ce qui fait de $df_z$ une multiplication par $f'(z)$, donc une similitude directe.

**Si on la retire.** Pour $f(z)=\bar z$, $df_z$ a pour matrice $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ : c'est une symétrie, qui conserve les longueurs et les **valeurs absolues** des angles mais **renverse** les angles orientés (déterminant $-1$) ; $\bar z$ n'est pas conforme. Pour un cisaillement $f(x+iy)=(x+2y)+iy$, de matrice $\begin{pmatrix}1&2\\0&1\end{pmatrix}$ : $df_z(1)=1$ et $df_z(i)=2+i$, deux vecteurs orthogonaux envoyés sur deux vecteurs d'angle $\arg(2+i)=\arctan\frac12\ne\frac\pi2$ : les angles ne sont pas conservés.

### H2 — $f'(z)\ne0$ (pour la conformité)

**Rôle.** Si $\lambda=0$, la similitude est nulle : elle écrase tout sur un point, et la notion d'angle entre images de vecteurs tangents n'a plus de sens.

**Si on la retire.** $f(z)=z^2$ en $z=0$ : $f'(0)=0$. La demi-droite $\{te^{i\theta},\ t>0\}$ est envoyée sur la demi-droite $\{t^2e^{2i\theta}\}$ : deux demi-droites issues de $0$ faisant un angle $\theta$ sont envoyées sur deux demi-droites faisant un angle $2\theta$. Les angles en $0$ sont **doublés** : $z^2$ n'est pas conforme en $0$.

## Idée de la preuve

On calcule la matrice de $\omega\mapsto\lambda\omega$ ; Cauchy–Riemann dit exactement que la jacobienne a cette forme. Avec $\lambda=|\lambda|e^{i\varphi}$, on lit homothétie et rotation ; les angles orientés sont conservés car $\frac{\lambda\omega_2}{\lambda\omega_1}=\frac{\omega_2}{\omega_1}$, et $\det=\alpha^2+\beta^2=|\lambda|^2$.

## Preuve

*1.* Si $L:\C\to\C$ est $\C$-linéaire, alors $L(\omega)=\omega L(1)$ : c'est la multiplication par $\lambda=L(1)$ ([[ch01-decomposition-r-lineaire]]). Écrivons $\lambda=\alpha+i\beta$ et $\omega=s+it$ :
$$
\lambda\omega=(\alpha s-\beta t)+i(\beta s+\alpha t),
$$
donc, en coordonnées réelles, $(s,t)\mapsto(\alpha s-\beta t,\ \beta s+\alpha t)$, de matrice (I.2.8). Si $\lambda=0$ c'est l'application nulle ; sinon on écrit $\lambda=|\lambda|e^{i\varphi}$ avec $\varphi=\arg\lambda$, i.e. $\alpha=|\lambda|\cos\varphi$, $\beta=|\lambda|\sin\varphi$, et
$$
\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}=|\lambda|\begin{pmatrix}\cos\varphi&-\sin\varphi\\ \sin\varphi&\cos\varphi\end{pmatrix},
$$
composée de la rotation d'angle $\varphi$ et de l'homothétie de rapport $|\lambda|$ (elles commutent) : une similitude directe.

*2.* La jacobienne (I.2.2) de $f$ en $z$ est $\begin{pmatrix}\frac{\partial P}{\partial x}&\frac{\partial P}{\partial y}\\ \frac{\partial Q}{\partial x}&\frac{\partial Q}{\partial y}\end{pmatrix}(z)$ ([[ch01-def-differentiable-r2]]). Elle est de la forme (I.2.8) si et seulement si les coefficients diagonaux sont égaux et les coefficients anti-diagonaux opposés, c'est-à-dire $\frac{\partial P}{\partial x}=\frac{\partial Q}{\partial y}$ et $\frac{\partial P}{\partial y}=-\frac{\partial Q}{\partial x}$ en $z$ : ce sont exactement les conditions (I.2.6), et alors $\alpha=\frac{\partial P}{\partial x}(z)$, $\beta=\frac{\partial Q}{\partial x}(z)$. Par le corollaire I.2.4 ([[ch01-cauchy-riemann]]) cela équivaut à la $\C$-dérivabilité en $z$, et $df_z$ est alors la multiplication par $f'(z)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]) ; en évaluant en $\omega=1$, $f'(z)=df_z(1)=\frac{\partial P}{\partial x}(z)+i\frac{\partial Q}{\partial x}(z)=\alpha+i\beta$.

*3.* Soit $\lambda\ne0$. Pour tout $\omega$, $|\lambda\omega|=|\lambda|\,|\omega|$ : les longueurs sont multipliées par $|\lambda|$. Pour $\omega_1,\omega_2$ non nuls, $\lambda\omega_1,\lambda\omega_2$ sont non nuls et
$$
\frac{\lambda\omega_2}{\lambda\omega_1}=\frac{\omega_2}{\omega_1},\qquad\text{donc}\qquad\arg\frac{\lambda\omega_2}{\lambda\omega_1}=\arg\frac{\omega_2}{\omega_1}\pmod{2\pi} :
$$
les angles orientés sont conservés.

*4.* Soit $f$ holomorphe (ou seulement $\C$-dérivable en $z$) avec $f'(z)\ne0$, et soient $\gamma_1,\gamma_2$ deux chemins de classe $C^1$ définis près de $0$, avec $\gamma_j(0)=z$ et $\gamma_j'(0)\ne0$. Par la règle de dérivation des fonctions composées ([[ch05-composition-differentielles]]), $(f\circ\gamma_j)'(0)=df_z(\gamma_j'(0))=f'(z)\,\gamma_j'(0)$, non nul. Par le point 3, l'angle orienté de $(f\circ\gamma_1)'(0)$ et $(f\circ\gamma_2)'(0)$ est celui de $\gamma_1'(0)$ et $\gamma_2'(0)$ : $f$ est conforme en $z$. Enfin le déterminant de (I.2.8) vaut $\alpha^2-(-\beta)\beta=\alpha^2+\beta^2=|\lambda|^2=|f'(z)|^2>0$, donc $df_z$ préserve l'orientation. $\square$

## Preuve à trous

*1.* Une application $\C$-linéaire est la multiplication par $\lambda=L(1)=\alpha+i\beta$, et pour $\omega=s+it$ : <trou indice="développer le produit">$\lambda\omega=(\alpha s-\beta t)+i(\beta s+\alpha t)$</trou>, d'où la matrice (I.2.8). Pour $\lambda\ne0$, en écrivant <trou>$\lambda=|\lambda|e^{i\varphi}$, la matrice vaut $|\lambda|$ fois la matrice de rotation d'angle $\varphi$</trou>.

*2.* La jacobienne $\begin{pmatrix}P_x&P_y\\ Q_x&Q_y\end{pmatrix}$ est de la forme (I.2.8) si et seulement si <trou indice="comparer coefficient par coefficient">$P_x=Q_y$ et $P_y=-Q_x$, i.e. les conditions de Cauchy (I.2.6)</trou>, avec $\alpha=P_x$, $\beta=Q_x$ et $\lambda=f'(z)$.

*3–4.* Les angles orientés sont conservés car <trou>$\frac{\lambda\omega_2}{\lambda\omega_1}=\frac{\omega_2}{\omega_1}$</trou> ; pour des courbes, $(f\circ\gamma_j)'(0)=f'(z)\gamma_j'(0)$. Enfin le déterminant vaut <trou>$\alpha^2+\beta^2=|f'(z)|^2>0$</trou> : l'orientation est préservée. $\square$

## Exemples

* **$f(z)=z^2$ en $z_0=1+i$.** $P=x^2-y^2$, $Q=2xy$, jacobienne $\begin{pmatrix}2x&-2y\\ 2y&2x\end{pmatrix}=\begin{pmatrix}2&-2\\ 2&2\end{pmatrix}$ en $(1,1)$ : forme (I.2.8) avec $\alpha=\beta=2$, et $f'(z_0)=2z_0=2+2i=2\sqrt2\,e^{i\pi/4}$. Localement, $f$ tourne de $45°$ et dilate d'un facteur $2\sqrt2$ ; déterminant $8=|f'(z_0)|^2$. Vérification sur la grille : la droite horizontale $y=1$ a pour image $x\mapsto(x^2-1,2x)$, de vecteur tangent $(2,2)$ en $x=1$ ; la droite verticale $x=1$ a pour image $y\mapsto(1-y^2,2y)$, de vecteur tangent $(-2,2)$ en $y=1$. Ces deux vecteurs sont orthogonaux : leur produit scalaire vaut $-4+4=0$, et $(-2,2)$ s'obtient en tournant $(2,2)$ de $+90°$, comme $i$ s'obtient en tournant $1$ de $+90°$.
* **L'exponentielle.** $f'(z)=e^z\ne0$ partout : $\exp$ est conforme en tout point. Les droites horizontales $y=c$ sont envoyées sur les demi-droites $\{e^x e^{ic}\}$ issues de $0$, les droites verticales $x=c$ sur les cercles $C(0,e^c)$ : demi-droites issues du centre et cercles se coupent bien à angle droit.
* **Non conforme.** $z\mapsto z^2$ en $0$ double les angles (H2) ; $z\mapsto\bar z$ renverse les angles orientés (H1).

## Pièges

* > ⚠️ La conformité exige $f'(z)\ne0$ : aux points critiques ($f'(z)=0$) les angles sont multipliés (par $m$ si $f-f(z)$ s'annule à l'ordre $m$ en $z$, cf. [[ch01-def-multiplicite-zero]]).
* Conforme ne veut pas dire isométrique : les longueurs (infinitésimales) sont multipliées par $|f'(z)|$, qui varie d'un point à l'autre. À grande échelle, les figures sont déformées ; seule l'image d'un **petit** voisinage est approximativement semblable.
* Le déterminant jacobien vaut $|f'(z)|^2$, **pas** $|f'(z)|$.
* Position des signes dans (I.2.8) : $-\beta$ en haut à droite, $\beta=\frac{\partial Q}{\partial x}$ en bas à gauche (premier vecteur colonne $=df_z(1)=f'(z)$).
* « Conserver les angles non orientés » ne suffit pas pour être holomorphe : $\bar z$ le fait aussi. Pour $f$ différentiable en $z$ avec $df_z$ inversible, c'est la conservation des angles **orientés** qui équivaut à « $df_z$ est une similitude directe », donc à la $\C$-dérivabilité en $z$ (avec $f'(z)\ne0$).
