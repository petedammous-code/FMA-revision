---
id: ex-ch09-hauteur-tore-hessienne
type: exercise
chapters: [9]
title: Fonction hauteur sur un tore couché, points critiques et hessiennes
source: "Classique (Milnor, *Morse Theory*, § 1, adapté au tore couché du poly)"
difficulty: 2
time: 30
tools: [ch09-ex-tore, ch09-ex-fonction-hauteur, ch09-multiplicateurs-lagrange, ch09-ex-point-critique-parametrage, ch09-hessienne-def, ch09-hessienne-extrema-ordre-deux, ch09-lemme-morse-sous-variete]
---
## Énoncé

Soient $0<r<a$ deux réels et $S\subset\R^3$ le tore
$$
S=\Big\{(x,y,z)\in\R^3 \;;\; \big(\sqrt{x^2+y^2}-a\big)^2+z^2=r^2\Big\},
$$
dont on admet (ou dont on sait) que c'est une sous-variété de dimension $2$ de $\R^3$, définie sur l'ouvert $V=\R^3\setminus\{x=y=0\}$ par l'équation $f(x,y,z)=r^2$ avec $f(x,y,z)=\big(\sqrt{x^2+y^2}-a\big)^2+z^2$, dont $r^2$ est valeur régulière. On pose
$$
X(\theta,\varphi)=\big((a+r\cos\varphi)\cos\theta,\ (a+r\cos\varphi)\sin\theta,\ r\sin\varphi\big),\qquad (\theta,\varphi)\in\R^2,
$$
et l'on admet que $X(\R^2)=S$ et que, pour tout $(\theta_0,\varphi_0)\in\R^2$, la restriction de $X$ à $]\theta_0-\pi,\theta_0+\pi[\times]\varphi_0-\pi,\varphi_0+\pi[$ est un paramétrage local de $S$.

On étudie la fonction $h:S\to\R$, $h(x,y,z)=x$ (« hauteur » quand le tore est posé debout sur la tranche).

1. Montrer que $h$ est de classe $C^\infty$ sur $S$ et que ses points critiques sont exactement les quatre points
$$
p_1=(a+r,0,0),\quad p_2=(a-r,0,0),\quad p_3=(-a+r,0,0),\quad p_4=(-a-r,0,0).
$$
2. Calculer, dans la base $\big(\partial_\theta X,\partial_\varphi X\big)$ de l'espace tangent, la matrice de la hessienne $d^2h_{p_i}$ en chacun de ces points.
3. En déduire la nature de chaque point critique (maximum local, minimum local, ou ni l'un ni l'autre).
4. Montrer que l'intersection de $S$ avec le plan $\{x=a-r\}$ n'est pas une sous-variété de $\R^3$.

## Indices

### Indice 1
Question 1 : $h$ est la restriction à $S$ d'une forme linéaire de $\R^3$, et $S$ est donnée par une équation régulière. Un point critique d'une restriction se caractérise par une condition de proportionnalité entre différentielles.

### Indice 2
Multiplicateurs de Lagrange : $p\in S$ est critique pour $h$ si et seulement si $dh_p=w\,df_p$ pour un réel $w$, c'est-à-dire $\partial_yf(p)=\partial_zf(p)=0$. Pour la hessienne, passer par $g=h\circ X$ : $g(\theta,\varphi)=(a+r\cos\varphi)\cos\theta$, et par définition $d^2h_p(\partial_\theta X,\partial_\theta X)=\partial^2_{\theta\theta}g$, etc.

### Indice 3
Une hessienne définie négative (resp. positive) donne un maximum (resp. minimum) local strict ; une hessienne de signature $(1,1)$ interdit tout extremum. Pour la question 4, le lemme de Morse au point $p_2$ ramène $\{h=a-r\}$ à l'ensemble $\{u_1^2=u_2^2\}$.

## Corrigé

**1. Régularité et points critiques.** $h$ est la restriction à $S$ de la forme linéaire $\ell(x,y,z)=x$, de classe $C^\infty$ sur $\R^3$ : elle est donc de classe $C^\infty$ sur $S$, et $dh_p=\ell|_{T_pS}$ ([[ch09-ex-fonction-hauteur]], avec $p_0=0$ et $a=e_1$).

On applique les multiplicateurs de Lagrange ([[ch09-multiplicateurs-lagrange]]) avec $F=f-r^2:V\to\R$ ($N=3$, $N-m=1$), de classe $C^\infty$ sur l'ouvert $V$, dont $0$ est valeur régulière (hypothèse admise, cf. [[ch09-ex-tore]]), $S=\{F=0\}$, et $g=\ell$ : $p\in S$ est critique pour $h$ si et seulement s'il existe $w\in\R$ tel que $d\ell_p=w\,dF_p$, i.e.
$$
(1,0,0)=w\,\Big(\frac{2x(\rho-a)}{\rho},\ \frac{2y(\rho-a)}{\rho},\ 2z\Big),\qquad \rho=\sqrt{x^2+y^2}>0 .
$$
Nécessairement $w\ne0$, donc $z=0$ et $y(\rho-a)=0$. Avec $z=0$, l'équation de $S$ donne $(\rho-a)^2=r^2$, soit $\rho=a\pm r\ne a$ (car $r>0$) ; donc $y=0$, puis $|x|=\rho\in\{a+r,a-r\}$. Réciproquement, en ces quatre points $y=z=0$ et $\frac{2x(\rho-a)}{\rho}=\pm2r\ne0$, donc $w=\pm\frac1{2r}$ convient. Les points critiques sont exactement $p_1,p_2,p_3,p_4$.

**2. Hessiennes.** Posons $g=h\circ X$ : $g(\theta,\varphi)=(a+r\cos\varphi)\cos\theta$. On a
$$
\partial_\theta g=-(a+r\cos\varphi)\sin\theta,\qquad \partial_\varphi g=-r\sin\varphi\cos\theta,
$$
$$
\partial^2_{\theta\theta}g=-(a+r\cos\varphi)\cos\theta,\qquad \partial^2_{\theta\varphi}g=r\sin\varphi\sin\theta,\qquad \partial^2_{\varphi\varphi}g=-r\cos\varphi\cos\theta .
$$
(Contrôle de la question 1 par le paramétrage, [[ch09-ex-point-critique-parametrage]] : comme $a+r\cos\varphi\ge a-r>0$, $dg_q=0$ équivaut à $\sin\theta=0$ et $\sin\varphi=0$, i.e. $(\theta,\varphi)\in\pi\Z\times\pi\Z$, dont les images par $X$ sont bien $p_1,\dots,p_4$.)

Soit $q=(\theta,\varphi)$ avec $X(q)=p_i$, et $U$ le carré ouvert de côté $2\pi$ centré en $q$, sur lequel $X$ est un paramétrage local. Par définition de la hessienne en un point critique ([[ch09-hessienne-def]]), $d^2h_{p}(v,w)=d^2g_q\big(dX_q^{-1}(v),dX_q^{-1}(w)\big)$ ; comme $dX_q(e_1)=\partial_\theta X(q)$ et $dX_q(e_2)=\partial_\varphi X(q)$, la matrice de $d^2h_p$ dans la base $(\partial_\theta X(q),\partial_\varphi X(q))$ de $T_pS$ est la matrice hessienne de $g$ en $q$. Aux points $q\in\pi\Z^2$, $\sin\theta=\sin\varphi=0$ donc le terme croisé est nul :

| point | $q$ | matrice de $d^2h_p$ | signature |
|---|---|---|---|
| $p_1=(a+r,0,0)$ | $(0,0)$ | $\mathrm{diag}\big(-(a+r),\,-r\big)$ | $(0,2)$ |
| $p_2=(a-r,0,0)$ | $(0,\pi)$ | $\mathrm{diag}\big(-(a-r),\,r\big)$ | $(1,1)$ |
| $p_3=(-a+r,0,0)$ | $(\pi,\pi)$ | $\mathrm{diag}\big(a-r,\,-r\big)$ | $(1,1)$ |
| $p_4=(-a-r,0,0)$ | $(\pi,0)$ | $\mathrm{diag}\big(a+r,\,r\big)$ | $(2,0)$ |

(Par exemple en $(0,\pi)$ : $\partial^2_{\theta\theta}g=-(a-r)\cdot1$ et $\partial^2_{\varphi\varphi}g=-r\cdot(-1)\cdot1=r$.)

**3. Nature.** On utilise les conditions d'ordre 2 ([[ch09-hessienne-extrema-ordre-deux]]), $h$ étant $C^2$ et les $p_i$ critiques.

* En $p_1$ la hessienne est définie négative ($a+r>0$, $r>0$) : **maximum local strict** ; c'est d'ailleurs le maximum global $a+r$ de $h$ (pour $p\in S$, $x\le\rho\le a+r$).
* En $p_4$ elle est définie positive : **minimum local strict** (minimum global $-(a+r)$).
* En $p_2$ et $p_3$ elle est de signature $(1,1)$ : elle n'est ni positive ni négative, donc $p_2$, $p_3$ ne sont **ni des maxima ni des minima locaux** (un maximum local imposerait $d^2h_p$ négative, un minimum local $d^2h_p$ positive). Ce sont des « cols ».

Vérification directe en $p_2$ : le long de $\varphi\mapsto X(0,\varphi)$, $h=a+r\cos\varphi$ admet en $\varphi=\pi$ un minimum (valeur $a-r$) ; le long de $\theta\mapsto X(\theta,\pi)$, $h=(a-r)\cos\theta$ admet en $\theta=0$ un maximum (même valeur). Donc $h$ prend, arbitrairement près de $p_2$, des valeurs $>a-r$ et $<a-r$.

**4.** $S$ est $C^\infty$, $h$ est $C^\infty$, $p_2$ est critique et $d^2h_{p_2}$ est non dégénérée de signature $(1,1)$. Le lemme de Morse sur une sous-variété ([[ch09-lemme-morse-sous-variete]]) fournit un paramétrage local $\psi:U\to S$, $0\in U$, $\psi(0)=p_2$, avec
$$
h\big(\psi(u)\big)=(a-r)+u_1^2-u_2^2\qquad(u\in U).
$$
Soit $\eps>0$ avec $D=D(0,\eps)\subset U$ (disque ouvert de $\R^2$). Comme $\psi$ est un homéomorphisme de $U$ sur un ouvert de $S$, $W=\psi(D)$ est un voisinage ouvert de $p_2$ dans $S$, et, en notant $Z=S\cap\{x=a-r\}=h^{-1}(\{a-r\})$,
$$
Z\cap W=\psi\big(\{u\in D\;;\;u_1^2=u_2^2\}\big).
$$
Donc $Z\cap W$ est homéomorphe à $\{u\in D\;;\;u_1=u_2\ \text{ou}\ u_1=-u_2\}$, une croix formée de deux segments ouverts qui se coupent en $0$. Si $Z$ était une sous-variété de dimension $m$, $p_2$ aurait dans $Z$ un voisinage connexe arbitrairement petit homéomorphe à un ouvert connexe de $\R^m$ ; un tel voisinage, inclus dans $Z\cap W$, privé de $p_2$, aurait $4$ composantes connexes, alors qu'un ouvert connexe de $\R^m$ privé d'un point en a au plus $2$ — c'est exactement l'argument de la croix ([[ch09-contre-ex-croix]]). Donc $Z$ n'est pas une sous-variété (au voisinage de $p_2$).

## Pièges et variantes

* La hessienne n'a de sens **qu'en un point critique** : en un point non critique, $d^2(h\circ X)$ dépend du paramétrage (formule (IX.7.2)). Ne pas « calculer la hessienne de $h$ sur $S$ » comme la différentielle seconde de $\ell$ sur $\R^3$ (qui est nulle !) : c'est la courbure de $S$ qui produit la hessienne, via $X$.
* Ne pas oublier de justifier $a+r\cos\varphi\ne0$ (c'est $0<r<a$) pour résoudre $\partial_\theta g=0$.
* « Hessienne non définie » n'interdit un extremum que si elle prend des valeurs des deux signes (signature $(1,1)$ ici) ; une hessienne seulement dégénérée ne permet pas de conclure.
* Variante : avec $h(x,y,z)=z$ (tore « posé à plat »), les points critiques forment les deux cercles $z=\pm r$ : $h$ n'est pas une fonction de Morse (hessienne dégénérée dans la direction du cercle).
* Variante : ces quatre points critiques d'indices $0,1,1,2$ donnent $1-2+1=0$, la caractéristique d'Euler du tore (théorie de Morse, hors programme).
