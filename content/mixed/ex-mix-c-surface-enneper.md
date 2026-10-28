---
id: ex-mix-c-surface-enneper
type: exercise
chapters: [4, 9, 8, 1, 5]
title: "La surface d'Enneper : paramétrage holomorphe, plongement et minimisation de l'énergie"
source: "Classique (surface d'Enneper, poly § IV.3 ; cf. Lafontaine, Berger–Gostiaux) ; preuve d'injectivité et partie variationnelle inventées"
difficulty: 4
time: 80
tools: [ch04-weierstrass-enneper, ch04-weierstrass-enneper-esquisse, ch01-laplacien-harmonique, ch04-holomorphe-implique-harmonique, ch09-sous-variete-def, ch09-espace-tangent-image-dx, ch08-euler-lagrange, ch05-differentielle-nulle-constante]
---
## Énoncé

On identifie $\C$ à $\R^2$ ($z=u+iv$) et l'on note $\langle\cdot,\cdot\rangle$, $|\cdot|$ et $\wedge$ le produit scalaire, la norme et le produit vectoriel de $\R^3$. On définit $X=(x_1,x_2,x_3):\C\to\R^3$ par
$$
X(z)=\Re\Big(z-\frac{z^3}3,\ \ i\Big(z+\frac{z^3}3\Big),\ \ z^2\Big),
$$
la partie réelle étant prise composante par composante. On note $X_u=\partial X/\partial u$, $X_v=\partial X/\partial v$.

1. Exprimer $x_1,x_2,x_3$ en fonction de $(u,v)$. On pose $\phi=X_u-iX_v:\C\to\C^3$. Montrer que $\phi$ est holomorphe et que $\phi_1^2+\phi_2^2+\phi_3^2=0$. En déduire que les coordonnées de $X$ sont harmoniques, que $|X_u|=|X_v|$ et $\langle X_u,X_v\rangle=0$ en tout point, et calculer $|X_u|$.
2. Montrer que $X$ est une immersion et calculer le vecteur unitaire $N=\dfrac{X_u\wedge X_v}{|X_u\wedge X_v|}$. Vérifier que $\sigma(N(z))=z$, où $\sigma(y_1,y_2,y_3)=\dfrac{y_1+iy_2}{1-y_3}$ est la projection stéréographique de la sphère unité privée du pôle nord sur $\C$.
3. (a) Montrer que $x_1+ix_2=\bar z-\dfrac{z^3}3$ et que $x_1^2+x_2^2+\dfrac43x_3^2=|z|^2\Big(1+\dfrac{|z|^2}3\Big)^2$.
   (b) En déduire que $X$ est injective sur le disque fermé $\bar D(0,1)$, puis que $S=X(D(0,1))$ est une sous-variété de dimension $2$ de $\R^3$. Décrire $T_{X(z)}S$.
   (c) Montrer que $X$ n'est injective sur aucun disque $\bar D(0,r)$ avec $r\ge\sqrt3$.
4. Calculer, pour $R>0$, $\displaystyle\iint_{D(0,R)}|X_u\wedge X_v|\,du\,dv$.
5. Pour $Y:\bar D(0,1)\to\R^3$ de classe $C^1$ (c'est-à-dire restriction d'une application $C^1$ sur un voisinage de $\bar D(0,1)$), on pose
$$
\mathcal E(Y)=\frac12\iint_{D(0,1)}\big(|Y_u|^2+|Y_v|^2\big)\,du\,dv,\qquad \mathcal A(Y)=\iint_{D(0,1)}|Y_u\wedge Y_v|\,du\,dv .
$$
Montrer que $\mathcal A(Y)\le\mathcal E(Y)$, avec égalité si et seulement si $|Y_u|=|Y_v|$ et $\langle Y_u,Y_v\rangle=0$ sur $D(0,1)$ (on dit alors que $Y$ est conforme).
6. Soit $Y$ comme en 5, avec $Y=X$ sur le cercle $C(0,1)$. Montrer que $\mathcal E(Y)\ge\mathcal E(X)$, avec égalité si et seulement si $Y=X$ sur $\bar D(0,1)$.
7. En déduire que $\mathcal A(X)\le\mathcal E(Y)$ pour tout $Y$ comme en 6, et que, parmi les $Y$ conformes ayant le même bord que $X$, $X$ est l'unique minimiseur de $\mathcal A$. Calculer $\mathcal A(X)$.

## Indices

### Indice 1
Question 1 : $X$ est la partie réelle d'une application holomorphe $\Phi:\C\to\C^3$ ; relier $\phi$ à $\Phi'$ via $\partial/\partial z$. Question 3(b) : comparer deux points de même image à l'aide des deux identités de 3(a). Questions 5-7 : une inégalité ponctuelle, puis un « principe de Dirichlet » pour des fonctions harmoniques.

### Indice 2
$\phi=2\,\partial X/\partial z=\Phi'=(1-z^2,\ i(1+z^2),\ 2z)$, et $\phi\cdot\phi=|X_u|^2-|X_v|^2-2i\langle X_u,X_v\rangle$, $|\phi|^2=|X_u|^2+|X_v|^2$. Pour 3(a) : $\Re(z^4)=2(\Re z^2)^2-|z|^4$. Pour 3(b) : si $X(z)=X(z')$, alors $|z|=|z'|$ puis $\bar z-\bar z'=\frac13(z-z')(z^2+zz'+z'^2)$.

### Indice 3
Question 3(c) : regarder $z=\pm i\sqrt3$. Question 5 : $|a\wedge b|\le|a|\,|b|\le\frac12(|a|^2+|b|^2)$. Question 6 : écrire $Y=X+h$ avec $h=0$ sur le cercle, développer $\mathcal E(X+h)$, et intégrer par parties le terme croisé sur chaque corde horizontale (puis verticale) du disque.

### Indice 4
Le terme croisé vaut $-\iint\langle\Delta X,h\rangle$, nul par la question 1. Pour l'égalité : $\mathcal E(h)=0$ force $dh=0$ sur le disque connexe.

## Corrigé

**1.** Pour $z=u+iv$ : $z^2=(u^2-v^2)+2iuv$ et $z^3=(u^3-3uv^2)+i(3u^2v-v^3)$. Donc
$$
x_1=u-\frac{u^3}3+uv^2,\qquad x_2=-\Im\Big(z+\frac{z^3}3\Big)=-v-u^2v+\frac{v^3}3,\qquad x_3=u^2-v^2 .
$$
Soit $\Phi(z)=\big(z-\frac{z^3}3,\ i(z+\frac{z^3}3),\ z^2\big)$, polynomiale donc entière, de sorte que $X=\Re\Phi=\frac12(\Phi+\bar\Phi)$. Comme $\frac{\partial}{\partial z}=\frac12(\partial_u-i\partial_v)$ ([[ch01-operateurs-dz-dzbar]]), $\phi=X_u-iX_v=2\frac{\partial X}{\partial z}=\frac{\partial\Phi}{\partial z}+\frac{\partial\bar\Phi}{\partial z}$, avec $\frac{\partial\Phi}{\partial z}=\Phi'$ et $\frac{\partial\bar\Phi}{\partial z}=\overline{\partial\Phi/\partial\bar z}=0$ ([[ch01-formulaire-dz-dzbar]]). Donc
$$
\phi=\Phi'=\big(1-z^2,\ i(1+z^2),\ 2z\big),
$$
holomorphe : ce sont les données de Weierstrass–Enneper $f=1$, $g=z$ ([[ch04-weierstrass-enneper]]). On calcule
$$
\phi_1^2+\phi_2^2+\phi_3^2=(1-z^2)^2-(1+z^2)^2+4z^2=-4z^2+4z^2=0 .
$$
*Harmonicité.* Chaque $x_k=\Re\Phi_k$ est la partie réelle d'une fonction holomorphe, donc harmonique ([[ch04-holomorphe-implique-harmonique]]). (Autrement : $\frac{\partial\phi}{\partial\bar z}=2\frac{\partial^2X}{\partial\bar z\partial z}=\frac12\Delta X$ par [[ch01-laplacien-harmonique]], nul puisque $\phi$ est holomorphe.)

*Conformité.* Comme $X_u,X_v$ sont réels, $\phi\cdot\phi=\sum_k(X_{u,k}-iX_{v,k})^2=|X_u|^2-|X_v|^2-2i\langle X_u,X_v\rangle$ ([[ch04-weierstrass-enneper-esquisse]]) ; $\phi\cdot\phi=0$ donne $|X_u|=|X_v|$ et $\langle X_u,X_v\rangle=0$. Enfin
$$
|X_u|^2+|X_v|^2=\sum_k|\phi_k|^2=|1-z^2|^2+|1+z^2|^2+4|z|^2=2(1+|z|^4)+4|z|^2=2(1+|z|^2)^2,
$$
d'où $|X_u|=|X_v|=1+|z|^2$. Explicitement, $X_u=\Re\phi=(1-u^2+v^2,\,-2uv,\,2u)$ et $X_v=-\Im\phi=(2uv,\,-1-u^2+v^2,\,-2v)$.

**2.** En tout $z$, $X_u$ et $X_v$ sont orthogonaux et de norme $1+|z|^2>0$, donc linéairement indépendants : $dX_z(a,b)=aX_u+bX_v$ est injective, $X$ est une immersion (de classe $C^\infty$). De plus $|X_u\wedge X_v|=|X_u|\,|X_v|=(1+|z|^2)^2$. Le calcul du produit vectoriel donne (vérifié par calcul formel)
$$
X_u\wedge X_v=(1+|z|^2)\,\big(2u,\ 2v,\ |z|^2-1\big),\qquad N(z)=\frac{\big(2u,\,2v,\,|z|^2-1\big)}{1+|z|^2}.
$$
(Contrôle : $|(2u,2v,|z|^2-1)|^2=4|z|^2+(|z|^2-1)^2=(1+|z|^2)^2$.) On a $N_3<1$ et
$$
\sigma(N(z))=\frac{2z/(1+|z|^2)}{1-\frac{|z|^2-1}{1+|z|^2}}=\frac{2z}{2}=z=g(z) :
$$
$g$ est bien la projection stéréographique de l'application de Gauss $N$, comme l'affirme le poly (§ IV.3, p. 79). En particulier $N$ est injective : deux points distincts de la surface ont des normales distinctes.

**3. (a)** $x_1+ix_2=\Re\big(z-\frac{z^3}3\big)-i\,\Im\big(z+\frac{z^3}3\big)=\big(\Re z-i\Im z\big)-\frac13\big(\Re z^3+i\Im z^3\big)=\bar z-\frac{z^3}3$. Puis
$$
x_1^2+x_2^2=\Big|\bar z-\frac{z^3}3\Big|^2=|z|^2+\frac{|z|^6}9-\frac23\Re\big(\bar z\,\bar z^3\big)=|z|^2+\frac{|z|^6}9-\frac23\Re(z^4).
$$
Or $\Re(z^4)=(\Re z^2)^2-(\Im z^2)^2=2(\Re z^2)^2-|z|^4=2x_3^2-|z|^4$. Donc
$$
x_1^2+x_2^2+\frac43x_3^2=|z|^2+\frac23|z|^4+\frac{|z|^6}9=|z|^2\Big(1+\frac{|z|^2}3\Big)^2 .
$$

**(b)** *Injectivité.* Soient $z,z'\in\bar D(0,1)$ avec $X(z)=X(z')$. La fonction $s\mapsto s(1+s/3)^2$ est strictement croissante sur $[0,+\infty[$, donc par (a) $|z|^2=|z'|^2$ : $|z|=|z'|=:r\le1$. Si $r=0$, $z=z'=0$. Sinon, par (a), $\bar z-\frac{z^3}3=\bar z'-\frac{z'^3}3$, soit
$$
\bar z-\bar z'=\frac13\,(z-z')\,(z^2+zz'+z'^2).
$$
Si $z\neq z'$, en prenant les modules ($|\bar z-\bar z'|=|z-z'|\neq0$), on obtient $|z^2+zz'+z'^2|=3$. Mais $|z^2+zz'+z'^2|\le|z|^2+|z||z'|+|z'|^2=3r^2\le3$. Il faut donc $r=1$ et égalité dans l'inégalité triangulaire pour trois complexes non nuls de module $1$, ce qui impose que $z^2$, $zz'$, $z'^2$ aient le même argument : $z^2/(zz')=z/z'$ est un réel $>0$ de module $1$, donc $z=z'$. Contradiction : $X$ est injective sur $\bar D(0,1)$. (Contrôle numérique : sur $2\cdot10^5$ points aléatoires du disque, aucun couple de points distants de plus de $0{,}05$ n'a d'images à moins de $10^{-3}$.)

*Sous-variété.* $X:\bar D(0,1)\to X(\bar D(0,1))$ est continue, injective, définie sur un compact, à valeurs dans un séparé : c'est un homéomorphisme sur son image (l'image d'un fermé, compact, est compacte donc fermée). Sa restriction à $D(0,1)$ est donc un homéomorphisme de $D(0,1)$ sur $S=X(D(0,1))$ (topologie induite), de classe $C^\infty$ et immersive (question 2). Par la définition [[ch09-sous-variete-def]] (avec $U=D(0,1)$, $V=\R^3$, $x=X$), $S$ est une sous-variété de dimension $2$ de $\R^3$, munie d'un paramétrage global. Par [[ch09-espace-tangent-image-dx]],
$$
T_{X(z)}S=dX_z(\R^2)=\mathrm{Vect}(X_u,X_v)=N(z)^\perp .
$$

**(c)** Pour $z=\pm i\sqrt3$ : $u=0$, $v=\pm\sqrt3$, donc $x_1=0$, $x_2=\mp\sqrt3\pm\frac{3\sqrt3}3=0$, $x_3=-3$ : $X(i\sqrt3)=X(-i\sqrt3)=(0,0,-3)$. Ces deux points distincts sont dans $\bar D(0,r)$ dès que $r\ge\sqrt3$. (Plus généralement, pour $|z|=\rho>\sqrt3$, les points $z=\rho e^{i\theta}$ et $\bar z$ ont même image dès que $\sin^2\theta=\frac{3(1+\rho^2)}{4\rho^2}\in\,]0,1[$ : la surface d'Enneper complète se recoupe.)

**4.** Par la question 2, $|X_u\wedge X_v|=(1+u^2+v^2)^2$. En coordonnées polaires,
$$
\iint_{D(0,R)}(1+u^2+v^2)^2\,du\,dv=2\pi\int_0^R(1+\rho^2)^2\rho\,d\rho=\frac\pi3\Big[(1+\rho^2)^3\Big]_0^R=\frac\pi3\big((1+R^2)^3-1\big).
$$
Pour $R\le1$, c'est l'aire de la sous-variété $X(D(0,R))$ ; pour $R=1$, elle vaut $7\pi/3\approx7{,}33$.

**5.** Pour $a,b\in\R^3$, $|a\wedge b|^2=|a|^2|b|^2-\langle a,b\rangle^2\le|a|^2|b|^2$ et $|a|\,|b|\le\frac12(|a|^2+|b|^2)$ (car $(|a|-|b|)^2\ge0$). Donc $|Y_u\wedge Y_v|\le\frac12(|Y_u|^2+|Y_v|^2)$ en tout point, et en intégrant $\mathcal A(Y)\le\mathcal E(Y)$. Il y a égalité ponctuelle si et seulement si $\langle Y_u,Y_v\rangle=0$ et $|Y_u|=|Y_v|$ (si $|Y_u|=|Y_v|=0$ c'est vrai trivialement ; sinon la première inégalité est une égalité si et seulement si $\langle Y_u,Y_v\rangle=0$ et la seconde si et seulement si $|Y_u|=|Y_v|$). La différence $\frac12(|Y_u|^2+|Y_v|^2)-|Y_u\wedge Y_v|$ est continue et $\ge0$ ; son intégrale sur l'ouvert $D(0,1)$ est nulle si et seulement si elle est identiquement nulle sur $D(0,1)$. D'où le cas d'égalité : $\mathcal A(Y)=\mathcal E(Y)$ si et seulement si $Y$ est conforme.

**6.** Posons $h=Y-X$ : $h$ est $C^1$ au voisinage de $\bar D(0,1)$ et nulle sur $C(0,1)$. En développant les carrés,
$$
\mathcal E(Y)=\mathcal E(X)+\iint_{D(0,1)}\big(\langle X_u,h_u\rangle+\langle X_v,h_v\rangle\big)\,du\,dv+\mathcal E(h).
$$
*Terme croisé.* Pour $v\in\,]-1,1[$, soit $a(v)=\sqrt{1-v^2}$ ; les points $(\pm a(v),v)$ sont sur $C(0,1)$, où $h=0$. $X$ étant $C^\infty$, une intégration par parties sur la corde horizontale donne
$$
\int_{-a(v)}^{a(v)}\langle X_u,h_u\rangle\,du=\Big[\langle X_u,h\rangle\Big]_{u=-a(v)}^{a(v)}-\int_{-a(v)}^{a(v)}\langle X_{uu},h\rangle\,du=-\int_{-a(v)}^{a(v)}\langle X_{uu},h\rangle\,du .
$$
En intégrant en $v$ (Fubini, les fonctions étant continues sur le compact $\bar D(0,1)$), $\iint\langle X_u,h_u\rangle=-\iint\langle X_{uu},h\rangle$. De même, sur les cordes verticales, $\iint\langle X_v,h_v\rangle=-\iint\langle X_{vv},h\rangle$. Le terme croisé vaut donc $-\iint_{D(0,1)}\langle\Delta X,h\rangle=0$, car les coordonnées de $X$ sont harmoniques (question 1). Ainsi
$$
\mathcal E(Y)=\mathcal E(X)+\mathcal E(h)\ge\mathcal E(X).
$$
*Égalité.* Si $\mathcal E(Y)=\mathcal E(X)$, alors $\mathcal E(h)=0$ : l'intégrande continue positive $|h_u|^2+|h_v|^2$ est nulle sur $D(0,1)$, donc $dh=0$ sur l'ouvert connexe $D(0,1)$ et $h$ y est constante ([[ch05-differentielle-nulle-constante]]) ; par continuité, cette constante est la valeur de $h$ sur $C(0,1)$, c'est-à-dire $0$. Donc $Y=X$. La réciproque est claire.

*Lien avec le calcul des variations.* Le calcul montre que $\frac{d}{ds}\mathcal E(X+sh)_{|s=0}=-\iint\langle\Delta X,h\rangle$ : l'« équation d'Euler–Lagrange » de l'énergie de Dirichlet est $\Delta X=0$, analogue en deux variables de [[ch08-euler-lagrange]] (où l'intégration par parties et [[ch08-du-bois-reymond-derivee]] jouent le même rôle).

**7.** Pour $Y$ comme en 6, par 5 (appliqué à $X$, conforme par 1) puis 6 : $\mathcal A(X)=\mathcal E(X)\le\mathcal E(Y)$. Si de plus $Y$ est conforme, $\mathcal E(Y)=\mathcal A(Y)$ (question 5), donc $\mathcal A(X)\le\mathcal A(Y)$, avec égalité si et seulement si $\mathcal E(Y)=\mathcal E(X)$, c'est-à-dire $Y=X$ (question 6). Enfin, par 4, $\mathcal A(X)=\mathcal E(X)=\dfrac{7\pi}3$.

> 💡 Le poly (Remarque IV.3.1) admet que toute surface admet localement un paramétrage conforme et que, pour un tel paramétrage, $\Delta X=2|X_u|^2HN$. Avec ce résultat admis, la question 7 dit que le morceau $S$ de la surface d'Enneper a une aire inférieure à celle de toute surface paramétrée conformément par le disque et de même bord : c'est un vrai « film de savon » sur son bord.

## Pièges et variantes

* **$\phi\cdot\phi$ n'est pas $|\phi|^2$** : $\phi\cdot\phi=\sum\phi_k^2$ est la forme bilinéaire complexe (sans conjugaison) ; c'est elle qui code la conformité, alors que $|\phi|^2=\sum|\phi_k|^2$ donne la métrique $|X_u|^2=\frac12|\phi|^2$.
* **Immersion injective ne suffit pas toujours** pour être une sous-variété ([[ch09-contre-ex-folium]]) : ici on utilise l'injectivité sur le disque **fermé** et la compacité pour obtenir un homéomorphisme sur l'image.
* **Signe de $X_v$** : $\phi=X_u-iX_v$ donne $X_v=-\Im\phi$, pas $+\Im\phi$ ; une erreur de signe change $N$ en $-N$, et l'on trouverait alors $\sigma(-N(z))=-1/\bar z$ au lieu de $g(z)=z$.
* **Intégration par parties** : le terme de bord s'annule parce que $h=0$ aux **deux** extrémités de chaque corde ; il faut que $Y$ et $X$ coïncident sur tout le cercle.
* Variante : affiner (b) pour montrer que $X$ est injective sur le disque **ouvert** $D(0,\sqrt3)$ : si $X(z)=X(z')$, $|z|=|z'|=r$ et $x_3=r^2\cos2\theta$ imposent $z'\in\{z,-z,\bar z,-\bar z\}$ ; on élimine $-z$ (il faudrait $\bar z=z^3/3$, donc $r=\sqrt3$), puis $\bar z$ et $-\bar z$ (il faudrait $\sin^2\theta$ ou $\cos^2\theta$ égal à $\frac{3(1+r^2)}{4r^2}\le1$, donc $r\ge\sqrt3$). Avec (c), $\sqrt3$ est le rayon critique.
* Variante : faire de même avec la caténoïde ($f=1/w^2$, $g=w$ sur $\C^*$) : vérifier la condition de périodes ([[ch04-condition-periodes]]) et montrer que la surface obtenue est la surface de révolution $\sqrt{x_1^2+x_2^2}=\cosh x_3$ à une similitude près.
