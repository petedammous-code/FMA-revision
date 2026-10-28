---
id: ex-ch01-noshiro-injectivite
type: exercise
chapters: [1, 5, 6]
title: Un critère d'injectivité par la partie réelle de la dérivée
source: "Classique (critère de Noshiro–Warschawski, 1934–35) ; questions 3 à 5 inventées"
difficulty: 3
time: 45
tools: [ch01-integrale-primitive, ch01-def-integrale-chemin, ch01-holomorphe-analytique, ch01-c-derivable-ssi-df-c-lineaire, ch01-similitude-conforme, ch06-inversion-globale, ch05-composition-differentielles, ch01-bijection-holomorphe-reciproque-holomorphe, ch01-application-ouverte, ch01-exp-trigo-hyperboliques]
---
## Énoncé

Soit $\Omega\subset\C$ un ouvert **convexe** non vide et $f\in\Hol(\Omega)$ telle que $\Re\bigl(f'(z)\bigr)>0$ pour tout $z\in\Omega$.

1. Soient $a,b\in\Omega$. Montrer que $f(b)-f(a)=(b-a)\displaystyle\int_0^1 f'\bigl(a+t(b-a)\bigr)\,dt$.
2. En déduire que $f$ est injective sur $\Omega$.
3. On identifie $\C$ à $\R^2$. Montrer que $f(\Omega)$ est un ouvert, que $f$ est un $C^\infty$-difféomorphisme de $\Omega$ sur $f(\Omega)$, et que la bijection réciproque $f^{-1}:f(\Omega)\to\Omega$ est holomorphe ; exprimer $(f^{-1})'$ à l'aide de $f'$.
4. Soit $F(z)=z+\frac12\sin z$ et, pour $\beta>0$, $B_\beta=\{z\in\C : |\Im z|<\beta\}$. On pose $\beta_0=\ln(2+\sqrt3)$.
   * (a) Montrer que $F$ est injective sur $B_{\beta_0}$.
   * (b) Montrer que $F$ n'est injective sur aucune bande $B_\beta$ avec $\beta>\beta_0$.
5. Soit $\Omega_1=\{x+iy\in\C : y^2-x^2<1\}$ et $g(z)=z^3+3z$. Montrer que $\Omega_1$ est un ouvert connexe, que $\Re(g'(z))>0$ pour tout $z\in\Omega_1$, mais que $g$ n'est pas injective sur $\Omega_1$. Quelle hypothèse fait défaut ?

## Indices

### Indice 1
Question 1 : intégrer la dérivée $f'$ le long du segment $[a,b]$ ; quel théorème relie $\int_\gamma f'(z)\,dz$ aux valeurs de $f$ ? Question 2 : regarder la partie réelle du quotient $\dfrac{f(b)-f(a)}{b-a}$.

### Indice 2
Question 3 : hypothèses du théorème d'inversion globale — $f$ de classe $C^\infty$ comme application de $\R^2$ dans $\R^2$, injective (question 2), de différentielle inversible en tout point. Ici $df_z$ est la multiplication par $f'(z)$, de déterminant $|f'(z)|^2$. Pour l'holomorphie de $f^{-1}$, différentier $f\circ f^{-1}=\id$ et regarder si $d(f^{-1})_w$ est $\C$-linéaire.

### Indice 3
Question 4 : $|\cos(x+iy)|^2=\cos^2x+\sinh^2y\le\cosh^2y$ et $\cosh\beta_0=2$ ; que vaut $F'(\pi+i\beta_0)$ ? Une fonction holomorphe injective sur un ouvert a une dérivée qui ne s'annule pas.

### Indice 4
Question 5 : $g$ est impaire à coefficients réels, donc $g(-\bar z)=-\overline{g(z)}$ ; deux points symétriques par rapport à l'axe imaginaire ont la même image dès que $g(z)\in i\R$, c'est-à-dire $\Re g(z)=0$.

## Corrigé

**1.** Comme $\Omega$ est convexe, le segment $\gamma(t)=a+t(b-a)$, $t\in[0,1]$, est un chemin de classe $C^1$ à valeurs dans $\Omega$, avec $\gamma'(t)=b-a$. La fonction $f'$ est continue sur $\Omega$ (et même holomorphe : [[ch01-holomorphe-analytique]]) et elle admet $f\in\Hol(\Omega)$ pour primitive holomorphe. Par [[ch01-integrale-primitive]] puis la définition de l'intégrale le long d'un chemin ([[ch01-def-integrale-chemin]]) :
$$
f(b)-f(a)=\int_\gamma f'(z)\,dz=\int_0^1 f'(\gamma(t))\,\gamma'(t)\,dt=(b-a)\int_0^1 f'\bigl(a+t(b-a)\bigr)\,dt .
$$
(C'est aussi le théorème fondamental [[ch05-theoreme-fondamental]] avec $df_z(h)=f'(z)h$.)

**2.** Soient $a\ne b$ dans $\Omega$. D'après 1, et puisque la partie réelle d'une intégrale est l'intégrale de la partie réelle,
$$
\Re\Bigl(\frac{f(b)-f(a)}{b-a}\Bigr)=\int_0^1 \Re\, f'\bigl(a+t(b-a)\bigr)\,dt .
$$
La fonction $t\mapsto\Re f'(\gamma(t))$ est continue et strictement positive sur le compact $[0,1]$, donc minorée par son minimum $m>0$ ; l'intégrale est $\ge m>0$. Ainsi $\frac{f(b)-f(a)}{b-a}\ne0$, donc $f(b)\ne f(a)$ : $f$ est injective.

**3.** *Hypothèses de l'inversion globale.* Vue comme application de l'ouvert $\Omega\subset\R^2$ dans $\R^2$, $f$ est de classe $C^\infty$ ([[ch01-holomorphe-analytique]]). En tout $z\in\Omega$, $df_z$ est la multiplication par $f'(z)$ ([[ch01-c-derivable-ssi-df-c-lineaire]]), de matrice $\begin{pmatrix}\alpha&-\beta\\ \beta&\alpha\end{pmatrix}$ avec $f'(z)=\alpha+i\beta$, de déterminant $\alpha^2+\beta^2=|f'(z)|^2$ ([[ch01-similitude-conforme]]). Or $\Re f'(z)>0$ entraîne $f'(z)\ne0$ : $df_z$ est une bijection linéaire de $\R^2$, donc un isomorphisme bicontinu (dimension finie). Enfin $f$ est injective (question 2). Le théorème d'inversion globale ([[ch06-inversion-globale]]), appliqué pour chaque $k\ge1$, montre que $f(\Omega)$ est ouvert et que $f^{-1}:f(\Omega)\to\Omega$ est de classe $C^k$ pour tout $k$ : $f$ est un $C^\infty$-difféomorphisme de $\Omega$ sur $f(\Omega)$.

*Holomorphie de $f^{-1}$.* Soit $w\in f(\Omega)$ et $z=f^{-1}(w)$. En différentiant $f\circ f^{-1}=\id_{f(\Omega)}$ en $w$ (règle de la chaîne [[ch05-composition-differentielles]]) : $df_z\circ d(f^{-1})_w=\id$, donc $d(f^{-1})_w=(df_z)^{-1}$ est la multiplication par $1/f'(z)$, qui est $\C$-linéaire. Par [[ch01-c-derivable-ssi-df-c-lineaire]], $f^{-1}$ est $\C$-dérivable en $w$ avec
$$
(f^{-1})'(w)=\frac{1}{f'\bigl(f^{-1}(w)\bigr)} ,
$$
fonction continue de $w$ (composée de fonctions continues, $f'$ ne s'annulant pas). Donc $f^{-1}\in\Hol(f(\Omega))$ : $f$ est un biholomorphisme de $\Omega$ sur $f(\Omega)$. (On peut aussi invoquer [[ch01-bijection-holomorphe-reciproque-holomorphe]].)

**4.(a)** $F$ est holomorphe sur $\C$ et $F'(z)=1+\frac12\cos z$. La bande $B_{\beta_0}$ est convexe (intersection des deux demi-plans $\Im z<\beta_0$ et $\Im z>-\beta_0$). Pour $z=x+iy$, avec $\cos(iy)=\cosh y$ et $\sin(iy)=i\sinh y$ ([[ch01-exp-trigo-hyperboliques]]), $\cos z=\cos x\cosh y-i\sin x\sinh y$, d'où
$$
|\cos z|^2=\cos^2x\cosh^2y+\sin^2x\sinh^2y=\cos^2x+\sinh^2y\le1+\sinh^2y=\cosh^2y .
$$
Donc $\Re F'(z)\ge1-\frac12|\cos z|\ge1-\frac12\cosh y$. Or $\cosh\beta_0=\frac12\bigl((2+\sqrt3)+\frac{1}{2+\sqrt3}\bigr)=\frac12\bigl((2+\sqrt3)+(2-\sqrt3)\bigr)=2$, et $\cosh$ est paire et strictement croissante sur $[0,+\infty[$ : pour $|y|<\beta_0$, $\cosh y<2$, donc $\Re F'(z)>0$ sur $B_{\beta_0}$. Par la question 2, $F$ est injective sur $B_{\beta_0}$.

**4.(b)** Soit $\beta>\beta_0$ et $z_1=\pi+i\beta_0\in B_\beta$. On a $\cos z_1=\cos\pi\cosh\beta_0-i\sin\pi\sinh\beta_0=-2$, donc $F'(z_1)=1-1=0$. Supposons $F$ injective sur $B_\beta$. Alors $F$ est non constante sur l'ouvert connexe $B_\beta$, donc $F(B_\beta)$ est ouvert ([[ch01-application-ouverte]]) et $F:B_\beta\to F(B_\beta)$ est une bijection holomorphe entre ouverts ; par [[ch01-bijection-holomorphe-reciproque-holomorphe]], $F'$ ne s'annule pas sur $B_\beta$, ce qui contredit $F'(z_1)=0$. Donc $\beta_0$ est optimal : le critère donne ici exactement la plus grande bande d'injectivité.

**5.** *Ouvert, connexe.* $\Omega_1$ est l'image réciproque de $]-\infty,1[$ par la fonction continue $(x,y)\mapsto y^2-x^2$ : c'est un ouvert. Il contient l'axe réel ($0-x^2<1$). Si $x+iy\in\Omega_1$, le segment vertical $t\mapsto x+ity$, $t\in[0,1]$, reste dans $\Omega_1$ car $(ty)^2-x^2\le y^2-x^2<1$, et il relie $x+iy$ au point réel $x$. Tout point se relie donc à l'axe réel, lui-même connexe : $\Omega_1$ est connexe par arcs.

*Signe de $\Re g'$.* $g'(z)=3z^2+3$ et $\Re(z^2)=x^2-y^2$, donc $\Re g'(z)=3\bigl(1-(y^2-x^2)\bigr)>0$ sur $\Omega_1$.

*Non-injectivité.* $g$ est un polynôme impair à coefficients réels, donc $g(-\bar z)=-g(\bar z)=-\overline{g(z)}$. Ainsi $g(-\bar z)=g(z)$ dès que $g(z)\in i\R$. Pour $z=x+iy$, $\Re g(z)=x^3-3xy^2+3x=x\,(x^2-3y^2+3)$. Prenons $x=\sqrt3$ et $3y^2=x^2+3=6$, soit $y=\sqrt2$ : $z_1=\sqrt3+i\sqrt2$, $z_2=-\bar z_1=-\sqrt3+i\sqrt2$. Ces deux points sont distincts et dans $\Omega_1$ ($y^2-x^2=2-3=-1<1$). Vérification directe : $z_1^2=1+2i\sqrt6$, $z_1^3=z_1\cdot z_1^2=-3\sqrt3+7\sqrt2\,i$, donc $g(z_1)=-3\sqrt3+7\sqrt2\,i+3\sqrt3+3\sqrt2\,i=10\sqrt2\,i$, et $g(z_2)=-\overline{g(z_1)}=10\sqrt2\,i$. Donc $g$ n'est pas injective sur $\Omega_1$.

L'hypothèse qui manque est la **convexité** : $\Omega_1$ n'est pas convexe, puisque le milieu $i\sqrt2$ de $[z_1,z_2]$ vérifie $y^2-x^2=2>1$. La question 1 utilise le segment $[a,b]$, qui sort ici de $\Omega_1$.

## Pièges et variantes

* La question 1 exige que le **segment** $[a,b]$ soit dans $\Omega$ : c'est là, et seulement là, que sert la convexité (question 5). Le résultat reste vrai sur un ouvert étoilé si l'on suppose $\Re f'>0$ ? Non en général : il faut un segment entre **chaque** couple de points.
* Dans la question 2, on a besoin de la **stricte** positivité et de la compacité de $[0,1]$ (ou de la continuité) pour conclure que l'intégrale est $>0$ ; $\Re f'\ge0$ ne suffit pas ($f$ constante).
* Dans l'inversion globale, l'injectivité est une hypothèse **globale** qu'on ne peut pas remplacer par $df_z$ inversible partout : $\exp$ sur $\C$ a une différentielle partout inversible mais n'est pas injective. Ici c'est la question 2 qui fournit l'injectivité.
* Le critère n'est pas une équivalence : $z\mapsto z^2$ est injective sur $\{\Re z>0\}$ (convexe), et $\Re(2z)>0$ y est vrai ; mais $z\mapsto e^{z}$ est injective sur la bande $\{0<\Im z<\pi\}$ alors que $\Re e^z=e^x\cos y$ n'y est pas de signe constant.
* Variante : $p_a(z)=z+az^2$ est injective sur $D(0,1)$ si et seulement si $|a|\le\frac12$. Le sens direct : si $|a|>\frac12$, $p_a'(-\frac1{2a})=0$ avec $|\frac1{2a}|<1$. Le sens réciproque : $\Re(1+2az)>1-2|a||z|\ge0$ pour $|z|<1$, puis la question 2.
