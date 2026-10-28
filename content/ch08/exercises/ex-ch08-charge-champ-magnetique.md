---
id: ex-ch08-charge-champ-magnetique
type: exercise
chapters: [8, 7, 5]
title: Particule chargée dans un champ magnétique uniforme
source: "Inventé (à partir du Lagrangien classique d'une charge dans un champ magnétique uniforme)"
difficulty: 2
time: 30
tools: [ch08-euler-lagrange, ch08-energie-conservee, ch08-groupe-un-parametre-invariance, ch08-noether, ch08-lhat-c1-differentielle, ch05-differentielles-partielles, ch05-gradient-hilbert, ch05-differentielle-lineaire, ch07-unicite-globale]
---
## Énoncé

On munit $V=\R^2$ du produit scalaire usuel $\langle\cdot,\cdot\rangle$ et de la norme associée. On note $J(x,y)=(-y,x)$ la rotation d'angle $+\pi/2$, et l'on fixe un réel $B\neq0$. On considère le Lagrangien
$$
L(u,q,v)=\frac12\norm{v}^2+\frac B2\,\langle Jq,v\rangle\qquad(u\in\R,\ q,v\in\R^2),
$$
et l'on écrit $\gamma(t)=(x(t),y(t))$ les courbes de $C^1([0;1];\R^2)$.

1. Calculer les différentielles partielles $\frac{\partial L}{\partial q}$ et $\frac{\partial L}{\partial v}$ (vues comme vecteurs de $\R^2$), puis montrer qu'une courbe $\gamma\in C^1([0;1];\R^2)$ vérifie l'équation d'Euler-Lagrange de $L$ si et seulement si $\gamma$ est de classe $C^2$ et
$$
x''=B\,y',\qquad y''=-B\,x' .
$$
2. Soit $\gamma$ une solution de l'équation d'Euler-Lagrange. Montrer que $\norm{\gamma'}$ est constante sur $[0;1]$.
3. Pour $s\in\R$, on note $R_s$ la rotation d'angle $s$ de $\R^2$. Montrer que $(R_s)_{s\in\R}$ est le flot du champ de vecteurs $X(q)=Jq$, que $L$ est invariant sous l'action de ce groupe à un paramètre, et en déduire que
$$
Q(t)=x(t)y'(t)-y(t)x'(t)+\frac B2\big(x(t)^2+y(t)^2\big)
$$
est constante le long de toute solution de l'équation d'Euler-Lagrange.
4. En identifiant $\R^2$ à $\C$ ($z=x+iy$), déterminer toutes les solutions de l'équation d'Euler-Lagrange, et décrire leurs trajectoires.
5. Soit $a\in\R^2$. Pour quelles valeurs de $B$ la restriction de $\hat L(\gamma)=\int_0^1L(t,\gamma(t),\gamma'(t))\,dt$ à l'espace $E_{a,a}$ des courbes $C^1$ telles que $\gamma(0)=\gamma(1)=a$ admet-elle un unique point critique ?

## Indices

### Indice 1
Questions 1 à 3 : appliquer les résultats généraux du cours (équation d'Euler-Lagrange, énergie d'un Lagrangien qui ne dépend pas du temps, théorème de Noether) après avoir calculé les deux différentielles partielles. Pour écrire $\frac{\partial L}{\partial q}$ comme un vecteur, utiliser $J^T=-J$.

### Indice 2
$\frac{\partial L}{\partial v}=v+\frac B2Jq$ et $\frac{\partial L}{\partial q}=-\frac B2Jv$. L'énergie $H=\frac{\partial L}{\partial v}\cdot\gamma'-L$ se simplifie beaucoup. Pour 3, $R_s$ est linéaire, donc $d(R_s)_q=R_s$, et $R_s$ commute avec $J$.

### Indice 3
En complexe, $J$ est la multiplication par $i$ : l'équation devient $z''=-iBz'$, équation linéaire du premier ordre en $w=z'$. Pour 5, une solution est un point critique de $\hat L|_{E_{a,a}}$ si et seulement si elle vérifie (E.L) ; écrire la condition $z(1)=z(0)$.

## Corrigé

**1.** $L$ est polynomiale en $(q,v)$, donc de classe $C^\infty$ sur $\R\times\R^2\times\R^2$. Pour $k\in\R^2$, la différentielle partielle en $v$ ([[ch05-differentielles-partielles]]) est
$$
\frac{\partial L}{\partial v}(u,q,v)\cdot k=\langle v,k\rangle+\frac B2\langle Jq,k\rangle ,
$$
d'où, via l'identification $V\simeq L(V;\R)$ par le produit scalaire ([[ch05-gradient-hilbert]]), $\frac{\partial L}{\partial v}(u,q,v)=v+\frac B2Jq$. Pour $h\in\R^2$, $q\mapsto\langle Jq,v\rangle$ est linéaire, donc ([[ch05-differentielle-lineaire]])
$$
\frac{\partial L}{\partial q}(u,q,v)\cdot h=\frac B2\langle Jh,v\rangle=\frac B2\langle h,J^Tv\rangle=-\frac B2\langle h,Jv\rangle ,
$$
car $J^T=-J$ (matrice $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$). Donc $\frac{\partial L}{\partial q}(u,q,v)=-\frac B2Jv$.

L'équation d'Euler-Lagrange [[ch08-euler-lagrange]] pour $\gamma\in C^1([0;1];\R^2)$ s'écrit : $t\mapsto\gamma'(t)+\frac B2J\gamma(t)$ est dérivable et
$$
\frac{d}{dt}\Big(\gamma'+\frac B2J\gamma\Big)=-\frac B2J\gamma' .
$$
* Si (E.L) a lieu : $\frac B2J\gamma$ est $C^1$, donc $\gamma'=\big(\gamma'+\frac B2J\gamma\big)-\frac B2J\gamma$ est dérivable, et $\gamma''+\frac B2J\gamma'=-\frac B2J\gamma'$, soit $\gamma''=-BJ\gamma'$. Le membre de droite est continu : $\gamma$ est $C^2$.
* Réciproquement, si $\gamma$ est $C^2$ avec $\gamma''=-BJ\gamma'$, on remonte le calcul et (E.L) a lieu.

Comme $J\gamma'=(-y',x')$, l'équation $\gamma''=-BJ\gamma'$ s'écrit $x''=By'$, $y''=-Bx'$.

**2.** $L$ ne dépend pas de la variable $u$, et une solution $\gamma$ est $C^2$ d'après 1. La conservation de l'énergie [[ch08-energie-conservee]] (hypothèses : $L$ de classe $C^1$ indépendant de $u$, $\gamma$ solution $C^2$ de (E.L) ; toutes vérifiées) dit que
$$
H(t)=\frac{\partial L}{\partial v}(\gamma,\gamma')\cdot\gamma'-L(\gamma,\gamma')=\Big\langle\gamma'+\frac B2J\gamma,\gamma'\Big\rangle-\frac12\norm{\gamma'}^2-\frac B2\langle J\gamma,\gamma'\rangle=\frac12\norm{\gamma'}^2
$$
est constante. Donc $\norm{\gamma'}$ est constante. (Vérification directe : $\frac{d}{dt}\frac12\norm{\gamma'}^2=\langle\gamma'',\gamma'\rangle=-B\langle J\gamma',\gamma'\rangle=0$, car $\langle Jw,w\rangle=0$ pour tout $w$.) Physiquement : la force magnétique est orthogonale à la vitesse et ne travaille pas.

**3.** *Flot.* $X(q)=Jq$ est linéaire, donc $C^\infty$ sur $U=\R^2$. Avec $R_s=\begin{pmatrix}\cos s&-\sin s\\ \sin s&\cos s\end{pmatrix}$, on a $\frac{\partial}{\partial s}(R_sq)=\begin{pmatrix}-\sin s&-\cos s\\ \cos s&-\sin s\end{pmatrix}q=JR_sq$ et $R_0q=q$ : $s\mapsto R_sq$ est la courbe intégrale de $X$ de condition initiale $q$ en $s=0$, définie sur $\R$ tout entier, et par unicité ([[ch07-unicite-globale]]) le flot de $X$ est $F(s,q)=R_sq$, défini sur $\R\times\R^2$. On retrouve $R_{s_1}R_{s_2}=R_{s_1+s_2}$.

*Invariance* ([[ch08-groupe-un-parametre-invariance]]). $R_s$ étant linéaire, $d(R_s)_q=R_s$ ([[ch05-differentielle-lineaire]]). $R_s$ est orthogonale et commute avec $J=R_{\pi/2}$, donc pour tous $u,q,v$ :
$$
L\big(u,R_sq,R_sv\big)=\frac12\norm{R_sv}^2+\frac B2\langle JR_sq,R_sv\rangle=\frac12\norm{v}^2+\frac B2\langle R_sJq,R_sv\rangle=L(u,q,v).
$$

*Noether.* Les hypothèses de [[ch08-noether]] sont réunies : $L$ de classe $C^1$ sur $\R\times U\times V$ avec $U=V=\R^2$, invariant par le flot global $(R_s)$ d'un champ $C^\infty$, et $\gamma$ solution de (E.L) à valeurs dans $U$. Donc
$$
Q(t)=\frac{\partial L}{\partial v}(t,\gamma,\gamma')\cdot X(\gamma)=\Big\langle\gamma'+\frac B2J\gamma,\ J\gamma\Big\rangle=\langle\gamma',J\gamma\rangle+\frac B2\norm{\gamma}^2
$$
est constante. Or $\langle\gamma',J\gamma\rangle=x'(-y)+y'x=xy'-yx'$, d'où l'expression de l'énoncé. (Vérification directe : $Q'=xy''-yx''+B(xx'+yy')=x(-Bx')-y(By')+Bxx'+Byy'=0$.)

**4.** Sous l'identification $(x,y)\leftrightarrow z=x+iy$, $J$ devient $z\mapsto iz$. D'après 1., les solutions de (E.L) sont les $z\in C^2([0;1];\C)$ telles que $z''=-iBz'$. Posons $w=z'$, de classe $C^1$ : $(w(t)e^{iBt})'=(w'+iBw)e^{iBt}=0$, donc $w(t)=w_0e^{-iBt}$ avec $w_0=z'(0)$, puis, avec $z_0=z(0)$,
$$
z(t)=z_0+\frac{iw_0}{B}\big(e^{-iBt}-1\big)=c+\frac{iw_0}{B}e^{-iBt},\qquad c=z_0-\frac{iw_0}{B}.
$$
Réciproquement, ces fonctions sont $C^\infty$ et vérifient $z''=-iBz'$. Si $w_0=0$, la solution est constante (particule immobile). Sinon, $|z(t)-c|=|w_0|/|B|$ : la trajectoire est un arc du cercle de centre $c$ et de rayon $|w_0|/|B|$, parcouru à vitesse constante $|w_0|$ (cohérent avec 2.), à la vitesse angulaire $-B$ (sens horaire si $B>0$), et le mouvement complet serait de période $2\pi/|B|$.

**5.** Les points critiques de $\hat L|_{E_{a,a}}$ sont exactement les $\gamma\in E_{a,a}$ solutions de (E.L) :
* un point critique vérifie (E.L) d'après [[ch08-euler-lagrange]] ;
* réciproquement, si $\gamma$ vérifie (E.L), posons $P=\frac{\partial L}{\partial v}(t,\gamma,\gamma')$, qui est $C^1$ de dérivée $P'=\frac{\partial L}{\partial q}(t,\gamma,\gamma')$. La formule de [[ch08-lhat-c1-differentielle]] donne, pour $h\in E_{0,0}$, $d\hat L_\gamma(h)=\int_0^1\big(\langle P',h\rangle+\langle P,h'\rangle\big)dt=\big[\langle P,h\rangle\big]_0^1=0$.

D'après 4., une solution avec $z(0)=a$ (on note encore $a$ le complexe associé) s'écrit $z(t)=a+\frac{iw_0}{B}(e^{-iBt}-1)$, et $z(1)=a$ équivaut à $w_0\big(e^{-iB}-1\big)=0$.
* Si $B\notin2\pi\Z$, $e^{-iB}\neq1$, donc $w_0=0$ : l'unique point critique est la courbe constante $\gamma\equiv a$.
* Si $B\in2\pi\Z^*$, tout $w_0\in\C$ convient : les points critiques forment un plan, celui des cercles passant par $a$ et parcourus exactement $|B|/(2\pi)$ fois pendant le temps $1$.

Réponse : l'unique point critique existe si et seulement si $B\notin2\pi\Z$.

## Pièges et variantes

* Signe de $\frac{\partial L}{\partial q}$ : écrire $\frac{\partial L}{\partial q}=\frac B2Jv$ (en oubliant $J^T=-J$) donne $\gamma''=0$, c'est-à-dire un champ magnétique sans effet. Toujours écrire la forme linéaire $h\mapsto\frac{\partial L}{\partial q}\cdot h$ **avant** de l'identifier à un vecteur.
* Ne pas supposer $\gamma$ de classe $C^2$ pour appliquer la conservation de l'énergie : ici c'est la question 1 qui le **démontre** à partir de (E.L).
* Translations : la quantité $z'+iBz=iBc$ (lié au centre $c$ du cercle) est aussi conservée, mais elle ne s'obtient pas par le théorème de Noether **tel qu'énoncé dans le poly**. En effet $L$ n'est pas invariant par les translations $F_s(q)=q+se$ : $L(u,q+se,v)-L(u,q,v)=\frac{sB}{2}\langle Je,v\rangle$, qui n'est pas nul mais est la dérivée en temps de $\frac{sB}{2}\langle Je,\gamma\rangle$ le long d'une courbe. Il faut une version de Noether « à dérivée totale près ».
* Variante : $L=\frac12\norm{v}^2+\frac B2\langle Jq,v\rangle-U(q)$ avec $U$ radial ($U(q)=f(\norm{q})$) : $H=\frac12\norm{\gamma'}^2+U(\gamma)$ et $Q$ restent conservés (même calcul), mais les trajectoires ne sont plus des cercles.
* Variante : $\langle Jq,v\rangle=\det(q,v)$, donc $\hat L$ contient $\frac B2\int_0^1\det(\gamma,\gamma')$, qui vaut $B$ fois l'aire algébrique balayée par le segment $[0,\gamma(t)]$ : c'est la fonctionnelle $T$ de la PC (TD de calcul différentiel, ex. 4), d'où le lien avec le problème isopérimétrique (maximiser l'aire enclose à longueur fixée), dont les solutions sont, elles aussi, des cercles.
