---
id: ex-ch07-tangente-complexe-periodique
type: exercise
chapters: [7, 1]
title: "z' = 1 + z² dans le plan complexe : explosion sur l'axe réel, périodicité ailleurs"
source: Inventé
difficulty: 3
time: 45
tools: [ch07-cauchy-lipschitz, ch07-restriction-domaine-c1-lipschitz, ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch01-polynomes-fractions-rationnelles, ch01-derivee-f-rond-gamma]
---
## Énoncé

On identifie $\C$ à $\R^2$ par $x+iy\leftrightarrow(x,y)$ et l'on considère l'équation différentielle d'inconnue $z:J\to\C$ ($J$ intervalle ouvert de $\R$)
$$
z'(t)=1+z(t)^2,\qquad z(0)=z_0\in\C .
$$

1. Écrire le champ de vecteurs $X:\R^2\to\R^2$ correspondant. Montrer que, pour tout $z_0\in\C$, le problème admet une unique solution maximale $z:J\to\C$, et déterminer les solutions constantes.
2. On suppose $z_0=x_0\in\R$. Déterminer la solution maximale et son intervalle de définition $J$. Que se passe-t-il aux bornes de $J$ ?
3. On suppose désormais $z_0\notin\{i,-i\}$. Montrer que $z(t)\notin\{i,-i\}$ pour tout $t\in J$.
4. On pose $h(z)=\dfrac{z-i}{z+i}$ pour $z\in\C\setminus\{-i\}$ et $w(t)=h(z(t))$ pour $t\in J$. Montrer que $w'(t)=2i\,w(t)$, puis que $w(t)=w_0\,e^{2it}$ où $w_0=h(z_0)$.
5. a) Montrer que $h$ est une bijection de $\C\setminus\{-i\}$ sur $\C\setminus\{1\}$ et donner sa réciproque $g$.
   b) Montrer que $|h(z)|<1\iff\Im(z)>0$ et $|h(z)|=1\iff z\in\R$.
   c) En déduire que si $z_0\notin\R$, alors $J=\R$ et $z$ est périodique ; préciser sa plus petite période lorsque $z_0\ne\pm i$.
6. Décrire la trajectoire $z(\R)$ pour $z_0=2i$ (on montrera que c'est un cercle dont on donnera le centre et le rayon). Plus généralement, pour $\Im(z_0)>0$, $z_0\neq i$, montrer que $z(\R)$ est le cercle $\{z : |z-i|=r\,|z+i|\}$ avec $r=|h(z_0)|$, et en donner le centre et le rayon.

## Indices

### Indice 1
L'équation est « la même » que l'équation réelle $x'=1+x^2$, dont la solution est une tangente. Pour les questions 3 et 4 : unicité des solutions (les points $\pm i$ sont des équilibres), puis dérivation d'une fonction holomorphe le long d'une courbe.

### Indice 2
Question 1 : $X(x,y)=(1+x^2-y^2,\,2xy)$ est polynomial, donc $C^1$ — Cauchy–Lipschitz. Question 4 : pour $h$ holomorphe et $z$ de classe $C^1$, $(h\circ z)'(t)=h'(z(t))\,z'(t)$ ; ici $h'(z)=\dfrac{2i}{(z+i)^2}$ et $1+z^2=(z-i)(z+i)$.

### Indice 3
Question 5c : la fonction $Z(t)=g\big(w_0e^{2it}\big)$ est définie pour **tout** $t\in\R$ dès que $|w_0|\ne1$ ; vérifier que c'est une solution et conclure par maximalité. Question 6 : développer $|z-i|^2=r^2|z+i|^2$ avec $z=x+iy$.

## Corrigé

**1.** Pour $z=x+iy$, $1+z^2=1+x^2-y^2+2ixy$. L'équation équivaut donc au système réel $\alpha'=X(\alpha)$ pour $\alpha=(x,y)$, avec
$$
X(x,y)=\big(1+x^2-y^2,\ 2xy\big).
$$
$X$ est un champ autonome sur $U=\R^2$, polynomial donc de classe $C^1$, donc localement lipschitzien ([[ch07-restriction-domaine-c1-lipschitz]]). Par Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]), pour tout $z_0$ il existe une unique solution maximale $z:J\to\C$, $J=J(z_0)$ intervalle ouvert contenant $0$ ([[ch07-courbe-integrale-maximale-def]]).

Une constante $c$ est solution si et seulement si $1+c^2=0$, c'est-à-dire $c=\pm i$. Les solutions constantes (équilibres) sont $z\equiv i$ et $z\equiv-i$.

**2.** Soit $x_0\in\R$ et $c_0=\arctan x_0\in\,]-\pi/2,\pi/2[$. La fonction réelle $x(t)=\tan(t+c_0)$ est définie et $C^1$ sur $J_0=\,]-\pi/2-c_0,\ \pi/2-c_0[$, vérifie $x(0)=\tan c_0=x_0$ et $x'(t)=1+\tan^2(t+c_0)=1+x(t)^2$. Vue comme fonction à valeurs dans $\C$, c'est une solution de l'équation complexe sur $J_0$, donc $J_0\subset J$ et $z=x$ sur $J_0$ (unicité globale).

Montrons $J=J_0$. Si par exemple $\sup J>\pi/2-c_0=:\beta$, alors $z$ serait continue en $\beta\in J$, donc bornée au voisinage de $\beta$ ; or $z(t)=\tan(t+c_0)\to+\infty$ quand $t\to\beta^-$. Contradiction ; de même pour la borne inférieure (où $z\to-\infty$). Ainsi
$$
J=\,]-\tfrac\pi2-\arctan x_0,\ \tfrac\pi2-\arctan x_0[,\qquad z(t)=\tan(t+\arctan x_0),
$$
la solution reste sur l'axe réel et **explose en temps fini** dans les deux sens : $|z(t)|\to+\infty$ aux deux bornes de $J$, qui sont finies.

**3.** Supposons $z(t_1)=i$ pour un $t_1\in J$. La constante $i$ est une courbe intégrale définie sur $\R$ de condition initiale $(t_1,i)$, comme $z$ ; par l'unicité globale ([[ch07-unicite-globale]]), $z=i$ sur $J$, donc $z_0=z(0)=i$ : contradiction. Même raisonnement pour $-i$.

**4.** $h$ est une fraction rationnelle dont le dénominateur ne s'annule qu'en $-i$ : elle est holomorphe sur $\Omega=\C\setminus\{-i\}$ ([[ch01-polynomes-fractions-rationnelles]]), de dérivée
$$
h'(z)=\frac{(z+i)-(z-i)}{(z+i)^2}=\frac{2i}{(z+i)^2}.
$$
D'après 3, $z$ est une courbe $C^1$ à valeurs dans $\Omega$ (et même dans $\C\setminus\{\pm i\}$). Par la règle de dérivation d'une fonction holomorphe le long d'une courbe ([[ch01-derivee-f-rond-gamma]] ; c'est la règle de la chaîne [[ch05-composition-differentielles]] avec $dh_z=$ multiplication par $h'(z)$, [[ch01-c-derivable-ssi-df-c-lineaire]]),
$$
w'(t)=h'(z(t))\,z'(t)=\frac{2i}{(z+i)^2}\,(z-i)(z+i)=2i\,\frac{z(t)-i}{z(t)+i}=2i\,w(t).
$$
Alors $u(t)=e^{-2it}w(t)$ vérifie $u'(t)=e^{-2it}\big(w'(t)-2iw(t)\big)=0$ sur l'intervalle $J$, donc $u$ est constante, égale à $u(0)=w_0$ : $w(t)=w_0e^{2it}$ pour tout $t\in J$.

**5. a)** Pour $w\in\C$ et $z\ne-i$ : $h(z)=w\iff z-i=w(z+i)\iff z(1-w)=i(1+w)$. Si $w=1$, cela donne $0=2i$ : impossible, donc $1\notin h(\Omega)$. Si $w\ne1$, l'unique solution est
$$
z=g(w):=i\,\frac{1+w}{1-w},
$$
et $g(w)\ne-i$ (sinon $1+w=-(1-w)$, soit $1=-1$). Donc $h:\C\setminus\{-i\}\to\C\setminus\{1\}$ est bijective, de réciproque $g$ (holomorphe sur $\C\setminus\{1\}$).

**b)** Pour $z=x+iy$ : $|z-i|^2=x^2+(y-1)^2$ et $|z+i|^2=x^2+(y+1)^2$, donc $|z-i|^2-|z+i|^2=-4y$. Ainsi $|h(z)|<1\iff|z-i|<|z+i|\iff y>0$, et $|h(z)|=1\iff y=0$.

**c)** Soit $z_0\notin\R$ ; alors $r:=|w_0|\ne1$ d'après b). (Si $z_0=\pm i$, $z$ est constante, donc définie sur $\R$ et périodique : le résultat est trivial ; on suppose $z_0\ne\pm i$.) Pour tout $t\in\R$, $|w_0e^{2it}|=r\ne1$, donc $Z(t):=g\big(w_0e^{2it}\big)$ est défini pour tout $t\in\R$ et $C^1$. C'est une solution : en notant $W(t)=w_0e^{2it}$, $g'(w)=\dfrac{2i}{(1-w)^2}$, on a
$$
Z'(t)=g'(W)\,W'=\frac{2i}{(1-W)^2}\cdot2iW=\frac{-4W}{(1-W)^2},\qquad
1+Z^2=\frac{(1-W)^2-(1+W)^2}{(1-W)^2}=\frac{-4W}{(1-W)^2}.
$$
Comme $Z(0)=g(w_0)=z_0$, $Z$ est une courbe intégrale définie sur $\R$ de condition initiale $(0,z_0)$ ; par définition de la courbe maximale, $J=\R$ et $z=Z$.

*Périodicité.* $W$ est $\pi$-périodique, donc $z=g\circ W$ aussi. Pour la plus petite période : $g$ étant injective, $z(t+T)=z(t)\iff W(t+T)=W(t)\iff e^{2iT}=1$ (car $w_0\ne0$, puisque $z_0\ne i$) $\iff T\in\pi\Z$. La plus petite période est donc $\pi$, **indépendante de $z_0$**.

**6.** Pour $\Im(z_0)>0$, $z_0\ne i$, on a $0<r=|w_0|<1$. Quand $t$ parcourt $\R$, $W(t)=w_0e^{2it}$ parcourt tout le cercle $\{|w|=r\}$ ; comme $g$ est la réciproque de $h$,
$$
z(\R)=g\big(\{|w|=r\}\big)=\{z\ne-i : |h(z)|=r\}=\{z : |z-i|=r\,|z+i|\}.
$$
Avec $z=x+iy$ : $x^2+(y-1)^2=r^2\big(x^2+(y+1)^2\big)\iff(1-r^2)(x^2+y^2)-2(1+r^2)y+(1-r^2)=0$, soit, en divisant par $1-r^2>0$,
$$
x^2+\Big(y-\frac{1+r^2}{1-r^2}\Big)^2=\Big(\frac{1+r^2}{1-r^2}\Big)^2-1=\Big(\frac{2r}{1-r^2}\Big)^2 .
$$
C'est le cercle de centre $i\,\dfrac{1+r^2}{1-r^2}$ et de rayon $\dfrac{2r}{1-r^2}$ (un cercle « d'Apollonius » relatif aux points $i$ et $-i$ ; il entoure $i$ et ne contient pas $-i$).

Pour $z_0=2i$ : $w_0=\dfrac{2i-i}{2i+i}=\dfrac13$, $r=\dfrac13$, centre $i\,\dfrac{10/9}{8/9}=\dfrac54\,i$, rayon $\dfrac{2/3}{8/9}=\dfrac34$. La trajectoire est le cercle de centre $\frac54i$ et de rayon $\frac34$, qui coupe l'axe imaginaire en $\frac12i$ et $2i$ ; il est parcouru en un temps $\pi$ (contrôle : $z(\pi/2)=g(-\tfrac13)=i\,\frac{2/3}{4/3}=\frac i2$).

## Pièges et variantes

* **Ne pas « oublier » l'unicité à la question 3.** Pour définir $w=h\circ z$ il faut savoir que $z$ ne passe jamais par $-i$ ; c'est exactement l'unicité des courbes intégrales (un équilibre ne peut être atteint en temps fini par une solution non constante).
* **Dérivée d'une composée.** $(h\circ z)'=h'(z)\,z'$ est un produit de **nombres complexes** : c'est la règle de la chaîne réelle, $dh_z$ étant la multiplication par $h'(z)$ parce que $h$ est holomorphe. Pour une fonction non holomorphe (par exemple $|z|^2$), il faudrait la formule avec $\partial/\partial z$ et $\partial/\partial\bar z$.
* **Maximalité.** Trouver une formule explicite ne suffit pas : il faut dire pourquoi l'intervalle obtenu est **maximal** (question 2 : la solution n'est pas bornée près des bornes ; question 5c : elle est définie sur $\R$ tout entier).
* **Cohérence avec la question 2.** Pour $z_0=x_0\in\R$, $|w_0|=1$ et $W(t)=w_0e^{2it}$ atteint la valeur interdite $1$ en temps fini : c'est l'explosion. Pour $x_0=0$, $w_0=-1$ et $W(t)=1\iff e^{2it}=-1\iff t\in\frac\pi2+\pi\Z$ : on retrouve $J=\,]-\pi/2,\pi/2[$.
* **Pas de contradiction avec le lemme des bouts** : pour $z_0\notin\R$ la trajectoire est un cercle (compact de $\R^2$), d'où $J=\R$, ce que confirme [[ch07-lemme-des-bouts]] ; pour $z_0\in\R$ elle n'est contenue dans aucun compact.
* Variante : pour $z'=z^2$, la fonction $u=1/z$ vérifie $u'=-1$ ; les trajectoires sont les images par $u\mapsto1/u$ des droites horizontales, c'est-à-dire des cercles tangents en $0$ à l'axe réel ; toutes les solutions non constantes partant hors de l'axe réel sont définies sur $\R$ mais **aucune** n'est périodique (elles tendent vers $0$ quand $t\to\pm\infty$).
