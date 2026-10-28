---
id: ex-ch04-temperature-couronne-excentree
type: exercise
chapters: [4, 1, 2]
title: Température dans une couronne excentrée
source: "Inventé (calcul explicite de la méthode du poly, § IV.4.2)"
difficulty: 3
time: 45
tools: [ch01-automorphismes-disque, ch04-harmoniques-radiales, ch04-composition-harmonique-holomorphe, ch04-maximum-unicite-bord, ch04-holomorphe-implique-harmonique, ch02-formule-residus]
---
## Énoncé

On considère la plaque
$$
\Omega=D(0,1)\setminus\bar D\big(\tfrac25,\tfrac25\big)=\Big\{z\in\C:\ |z|<1,\ \big|z-\tfrac25\big|>\tfrac25\Big\}.
$$
Son bord extérieur $C(0,1)$ est maintenu à la température $0$, son bord intérieur $C(\frac25,\frac25)$ à la température $1$. On cherche la température stationnaire, c'est-à-dire une fonction $T:\bar\Omega\to\R$ **continue sur $\bar\Omega$, harmonique sur $\Omega$**, valant $0$ sur $C(0,1)$ et $1$ sur $C(\frac25,\frac25)$.

On pose $f(z)=\dfrac{2z-1}{2-z}$ pour $z\neq2$.

1. Montrer que $f$ induit une bijection holomorphe de $D(0,1)$ sur $D(0,1)$, que $|f|=1$ sur $C(0,1)$, et que pour $z\neq 2$ :
$$
|f(z)|>\tfrac12\iff \big|z-\tfrac25\big|>\tfrac25 .
$$
En déduire que $f(\Omega)$ est la couronne $A=\{w:\ \frac12<|w|<1\}$.
2. Déterminer $T$ et montrer qu'elle est unique. Calculer $T(-\frac12)$ et $T(\frac{9}{10})$ ; ces deux points sont chacun à égale distance des deux cercles du bord : commenter.
3. Montrer que les isothermes $\{T=\tau\}$, $0<\tau<1$, sont des cercles ; donner le centre et le rayon de l'isotherme $\{T=\frac12\}$.
4. Le bord extérieur étant une isotherme, $\nabla T$ y est normal, et la densité de flux de chaleur qui le traverse est $|\nabla T|$. Calculer $|\nabla T(e^{i\theta})|$. En quel point du bord extérieur le flux est-il maximal, minimal ? Quel est le rapport des deux ?
5. Calculer le flux total $\displaystyle\Phi=\int_0^{2\pi}|\nabla T(e^{i\theta})|\,d\theta$ et le comparer au flux total à travers le cercle $C(0,1)$ de la température de la couronne centrée $A$ (valant $0$ sur $C(0,1)$ et $1$ sur $C(0,\frac12)$).

## Indices

### Indice 1
Reconnaître en $f$ un automorphisme du disque bien connu. Pour l'équivalence, développer $4|2z-1|^2-|2-z|^2$ avec $z=x+iy$.

### Indice 2
Sur la couronne centrée $A$, chercher la température sous forme radiale $\alpha\ln|w|+\beta$, puis transporter par $f$ ; la composée d'une fonction harmonique et d'une fonction holomorphe est harmonique. Unicité : principe du maximum sur un ouvert connexe borné.

### Indice 3
Localement $\ln|f|=\Re(\log f)$, et pour $F$ holomorphe, $|\nabla\Re(F)|=|F'|$ (Cauchy–Riemann). Ici $f'(z)=\dfrac{3}{(2-z)^2}$. Pour la question 5, écrire $\displaystyle\int_0^{2\pi}\frac{d\theta}{5-4\cos\theta}$ comme une intégrale sur $C(0,1)$ et utiliser les résidus.

## Corrigé

**1.** On a $f(z)=\dfrac{z-\frac12}{1-\frac12 z}=f_{1/2}(z)$ avec la notation $f_a(z)=\frac{z-a}{1-\bar az}$ du poly. Pour $a=\frac12\in D$, $f_a$ est un automorphisme (biholomorphisme) de $D(0,1)$ ([[ch01-automorphismes-disque]], poly, Proposition I.13.3, p. 32). Si $|z|=1$, alors $|2-z|=|\bar z(2-z)|=|2\bar z-1|=|\overline{2z-1}|=|2z-1|$, donc $|f(z)|=1$.

Pour $z=x+iy\neq2$ :
$$
4|2z-1|^2-|2-z|^2=4(4|z|^2-4x+1)-(|z|^2-4x+4)=15|z|^2-12x=15\Big(\big|z-\tfrac25\big|^2-\tfrac4{25}\Big),
$$
car $|z-\frac25|^2=|z|^2-\frac45x+\frac4{25}$. Donc $|f(z)|>\frac12\iff4|2z-1|^2>|2-z|^2\iff|z-\frac25|>\frac25$ (et de même avec $=$ et $<$).

*Image de $\Omega$.* Si $z\in\Omega$, alors $|f(z)|<1$ (car $z\in D$) et $|f(z)|>\frac12$ : $f(z)\in A$. Réciproquement, si $w\in A\subset D$, il existe $z\in D$ avec $f(z)=w$ (surjectivité de $f$ sur $D$), et $|f(z)|>\frac12$ impose $|z-\frac25|>\frac25$, donc $z\in\Omega$. Ainsi $f(\Omega)=A$, et $f|_\Omega:\Omega\to A$ est un biholomorphisme (restriction d'un biholomorphisme de $D$). De même, $f$ envoie $C(\frac25,\frac25)$ dans $C(0,\frac12)$ et $C(0,1)$ dans $C(0,1)$.

**2.** *Sur la couronne centrée.* Les fonctions harmoniques radiales sur $\C^*$ sont les $\alpha\ln|w|+\beta$ ([[ch04-harmoniques-radiales]], poly, section IV.4.2, p. 85). On veut $0$ pour $|w|=1$ : $\beta=0$ ; et $1$ pour $|w|=\frac12$ : $\alpha\ln\frac12=1$, soit $\alpha=-\frac1{\ln2}$. D'où
$$
T_A(w)=-\frac{\ln|w|}{\ln 2},\qquad\text{harmonique sur }\C^*.
$$
*Transport.* Posons $T=T_A\circ f$ sur $\bar\Omega$ :
$$
T(z)=\frac{1}{\ln 2}\,\ln\Big|\frac{2-z}{2z-1}\Big| .
$$
* $f$ est holomorphe sur $\C\setminus\{2\}\supset\bar\Omega$ et ne s'annule qu'en $z=\frac12$, qui n'est pas dans $\bar\Omega$ ($|\frac12-\frac25|=\frac1{10}<\frac25$). Donc $f$ envoie un voisinage ouvert $V$ de $\bar\Omega$ dans $\C^*$, où $T_A$ est harmonique ; par [[ch04-composition-harmonique-holomorphe]] (poly, section IV.4, p. 81-82), $T$ est harmonique sur $V\supset\Omega$, et continue sur $\bar\Omega$.
* Sur $C(0,1)$, $|f|=1$ donc $T=0$ ; sur $C(\frac25,\frac25)$, $|f|=\frac12$ (question 1) donc $T=1$.

*Unicité.* $\Omega$ est borné et connexe (image de la couronne connexe $A$ par l'application continue $f^{-1}$). Si $T_1,T_2$ sont deux solutions, $T_1-T_2$ est harmonique sur $\Omega$, continue sur le compact $\bar\Omega$, nulle sur $\partial\Omega=C(0,1)\cup C(\frac25,\frac25)$ ; par le principe du maximum (et du minimum) elle est nulle ([[ch04-maximum-unicite-bord]], poly, Remarque IV.2.6, p. 77). Donc $T$ est **la** solution.

*Valeurs.* $f(-\frac12)=\frac{-2}{5/2}=-\frac45$ et $f(\frac9{10})=\frac{4/5}{11/10}=\frac8{11}$, d'où
$$
T\big(-\tfrac12\big)=\frac{\ln(5/4)}{\ln2}\approx0{,}322,\qquad T\big(\tfrac9{10}\big)=\frac{\ln(11/8)}{\ln2}\approx0{,}459 .
$$
Le point $-\frac12$ est à distance $\frac12$ de chacun des deux cercles ($1-\frac12$ et $|-\frac12-\frac25|-\frac25=\frac12$), le point $\frac9{10}$ à distance $\frac1{10}$ de chacun. Aucun des deux n'est à température $\frac12$ : la température n'est **pas** une fonction affine de la distance aux bords. Dans la partie étroite (près de $z=1$) le profil est presque linéaire, d'où $T(\frac9{10})$ proche de $\frac12$ ; dans la partie large, $T$ décroît vite près du disque chaud puis lentement (profil logarithmique).

**3.** $T(z)=\tau\iff|f(z)|=\rho$ avec $\rho=2^{-\tau}\in\,]\frac12,1[$, c'est-à-dire $|2z-1|^2=\rho^2|2-z|^2$, soit
$$
(4-\rho^2)|z|^2-4(1-\rho^2)x+(1-4\rho^2)=0\iff |z-c|^2=c^2-\frac{1-4\rho^2}{4-\rho^2},\qquad c=\frac{2(1-\rho^2)}{4-\rho^2}.
$$
Le second membre vaut $\dfrac{4(1-\rho^2)^2-(1-4\rho^2)(4-\rho^2)}{(4-\rho^2)^2}=\dfrac{9\rho^2}{(4-\rho^2)^2}>0$ : l'isotherme est le cercle de centre $c$ (réel) et de rayon $\dfrac{3\rho}{4-\rho^2}$. (Contrôles : $\rho=\frac12$ redonne $C(\frac25,\frac25)$, $\rho=1$ redonne $C(0,1)$.)

Pour $\tau=\frac12$ : $\rho^2=\frac12$, centre $c=\frac{2\cdot\frac12}{7/2}=\frac27$, rayon $\frac{3/\sqrt2}{7/2}=\frac{3\sqrt2}{7}\approx0{,}606$. Ce cercle coupe l'axe réel en $\approx-0{,}320$ et $\approx0{,}892$, ce qui est cohérent avec la question 2 ($-\frac12$ et $\frac9{10}$ sont juste à l'extérieur, donc plus froids que $\frac12$). Les isothermes sont des cercles **non concentriques** (cercles d'Apollonius de points limites $\frac12$ et $2$).

**4.** Soit $z_0\in\bar\Omega$. Sur un disque $D(z_0,\delta)$ où $f$ ne s'annule pas, $f$ admet un logarithme holomorphe $\ell$ (disque simplement connexe, [[ch02-logarithme-existence]]) et $\ln|f|=\Re(\ell)$, avec $\ell'=f'/f$. Pour $F=P+iQ$ holomorphe, $F'=P_x-iP_y$ (Cauchy–Riemann), donc $|\nabla P|=|F'|$. Ainsi
$$
|\nabla T|=\frac{1}{\ln2}\,\Big|\frac{f'}{f}\Big|,\qquad f'(z)=\frac{2(2-z)+(2z-1)}{(2-z)^2}=\frac{3}{(2-z)^2}.
$$
Sur $C(0,1)$, $|f|=1$ et $|2-e^{i\theta}|^2=5-4\cos\theta$, donc
$$
|\nabla T(e^{i\theta})|=\frac{3}{\ln2\,(5-4\cos\theta)} .
$$
Maximum en $\theta=0$ ($z=1$) : $\frac{3}{\ln2}\approx4{,}33$ ; minimum en $\theta=\pi$ ($z=-1$) : $\frac{1}{3\ln2}\approx0{,}48$. Rapport : $9$. Le flux est maximal là où la plaque est la plus mince (près de $z=1$, épaisseur $\frac15$) et minimal là où elle est la plus épaisse (près de $z=-1$, épaisseur $1$) ; le rapport $9$ n'est pas le rapport $5$ des épaisseurs.

**5.** Avec $z=e^{i\theta}$, $d\theta=\frac{dz}{iz}$, $\cos\theta=\frac12(z+\frac1z)$ :
$$
\int_0^{2\pi}\frac{d\theta}{5-4\cos\theta}=\int_{C(0,1)}\frac{dz}{iz\,(5-2z-2/z)}=\int_{C(0,1)}\frac{i\,dz}{2z^2-5z+2}=\int_{C(0,1)}\frac{i\,dz}{(2z-1)(z-2)} .
$$
La fonction $g(z)=\frac{i}{(2z-1)(z-2)}$ est méromorphe sur $\C$ (simplement connexe), à pôles simples $\frac12$ (indice $1$ pour le cercle unité) et $2$ (indice $0$). Le résidu en $\frac12$ vaut $\lim_{z\to1/2}(z-\frac12)g(z)=\frac{i}{2(\frac12-2)}=-\frac i3$. Par la formule des résidus ([[ch02-formule-residus]], poly, Théorème II.5.1, p. 47), l'intégrale vaut $2i\pi\cdot(-\frac i3)=\frac{2\pi}3$. Donc
$$
\Phi=\frac{3}{\ln2}\cdot\frac{2\pi}{3}=\frac{2\pi}{\ln2}.
$$
Pour la couronne centrée, $|\nabla T_A(w)|=\frac{1}{\ln2\,|w|}$, qui vaut $\frac1{\ln2}$ sur $C(0,1)$ : flux total $\frac{2\pi}{\ln 2}$. **Les deux flux totaux sont égaux** : la répartition change (rapport $9$ entre maximum et minimum), mais le flux total est invariant par la transformation conforme $f$. Explication : $|\nabla T(z)|=|\nabla T_A(f(z))|\,|f'(z)|$ et $|f'(e^{i\theta})|\,d\theta$ est l'élément de longueur du cercle image, que $f$ parcourt une fois.

## Pièges et variantes

* Prendre la solution radiale avec les rayons $R^+=1$, $R^-=\frac25$ des cercles de départ, ou centrée en $\frac25$ : $\frac{\ln|z|}{\ln(2/5)}$ ne vaut pas $1$ sur $C(\frac25,\frac25)$. Il faut les rayons $\rho^+=1$, $\rho^-=\frac12$ de la **couronne image** (le module conforme $\rho^+/\rho^-=2$ diffère de $R^+/R^-=\frac52$), comme le souligne le poly p. 86.
* Pour l'unicité, le principe du maximum harmonique demande un ouvert **connexe borné** et la **continuité jusqu'au bord** : les trois sont à vérifier.
* $\Omega$ n'est **pas** simplement connexe : on ne peut pas écrire globalement $T=\Re(F)$ (sinon $F=-\frac{1}{\ln 2}\log f$, et $f$ fait un tour autour de $0$ le long d'un lacet entourant le trou). Le calcul de $|\nabla T|$ se fait donc localement.
* Variante : bord intérieur $C(c,r)$ quelconque contenu dans $D$ ; on cherche $a\in\,]-1,1[$ réel tel que $f_a$ envoie les points $c-r$ et $c+r$ sur $-\rho$ et $\rho$. Variante : températures quelconques, $T^+$ sur le bord extérieur et $T^-$ sur le bord intérieur — par linéarité $T=T^++(T^--T^+)\,\frac{\ln|f|}{\ln(1/2)}$.
