---
id: ex-mix-a-racine-holomorphe-parametre
type: exercise
chapters: [2, 6, 1, 5]
title: Une racine qui dépend holomorphiquement d'un paramètre complexe
source: "Inventé (perturbation d'une racine simple, version complexe ; comparer avec l'Exercice VI.4.3 du poly)"
difficulty: 3
time: 40
tools: [ch02-rouche, ch06-fonctions-implicites, ch01-c-derivable-ssi-df-c-lineaire, ch01-def-holomorphe, ch01-estimees-cauchy, ch01-def-multiplicite-zero]
---
## Énoncé

Pour $\lambda\in\C$, on pose
$$
P_\lambda(z)=z^3-3z+\lambda\qquad(z\in\C).
$$

1. Montrer que, pour tout $\lambda\in D(0,2)$, $P_\lambda$ possède exactement une racine dans le disque $D(0,1)$, et que cette racine est simple. On la note $\zeta(\lambda)$. Montrer que $\zeta(\bar\lambda)=\overline{\zeta(\lambda)}$ et $\zeta(-\lambda)=-\zeta(\lambda)$.
2. Montrer que $\zeta:D(0,2)\to D(0,1)$ est continue.
3. Montrer que $\zeta$ est holomorphe sur $D(0,2)$ et exprimer $\zeta'(\lambda)$ en fonction de $\zeta(\lambda)$.
4. Calculer les coefficients de $\lambda,\lambda^2,\dots,\lambda^5$ dans le développement de Taylor de $\zeta$ en $0$. Que peut-on dire *a priori* du rayon de convergence $R$ de cette série ?
5. Montrer que $R=2$.
6. Vérifier que, pour $\lambda\in\,]-2,2[$, $\zeta(\lambda)=2\sin\!\big(\tfrac13\arcsin\tfrac\lambda2\big)$.

## Indices

### Indice 1
Compter des racines dans un disque sans les calculer : comparer $P_\lambda$ à $z^3-3z$ sur un cercle. Pour la régularité de $\zeta$ : une racine **simple** est une racine où la dérivée en $z$ ne s'annule pas — c'est l'hypothèse d'un théorème de calcul différentiel.

### Indice 2
Sur $|z|=1$, $|z^3-3z|=|z^2-3|\ge2>|\lambda|$. Pour la continuité en $\lambda_0$ : refaire le même raisonnement sur un **petit** cercle centré en $\zeta(\lambda_0)$, en comparant $P_\lambda$ à $P_{\lambda_0}$. Pour l'holomorphie : fonctions implicites appliquées à $G(\lambda,z)=z^3-3z+\lambda$ vue de $\R^2\times\R^2$ dans $\R^2$ ; la fonction implicite **coïncide** avec $\zeta$ grâce à la continuité.

### Indice 3
Question 4 : $\zeta=\frac13(\lambda+\zeta^3)$, réinjecter. Question 5 : si $R>2$, la somme de la série serait holomorphe (donc de dérivée bornée) près de $\lambda=2$ ; or $\zeta'(t)=\frac1{3(1-\zeta(t)^2)}$ et $\zeta(t)\to?$ quand $t\to2^-$. Question 6 : $(2\sin\theta)^3-3(2\sin\theta)=-2\sin3\theta$.

## Corrigé

**1.** Posons $g(z)=z^3-3z=z(z^2-3)$, holomorphe sur $\C$ ; ses zéros sont $0$ et $\pm\sqrt3$, donc $g$ a exactement un zéro, simple, dans $U=D(0,1)$, et aucun sur $\Gamma=C(0,1)$. Pour $|z|=1$,
$$
|g(z)|=|z|\,|z^2-3|\ge 3-|z|^2=2 .
$$
Soit $\lambda\in D(0,2)$. Pour $z\in\Gamma$ : $|P_\lambda(z)-g(z)|=|\lambda|<2\le|g(z)|$. En particulier $P_\lambda$ ne s'annule pas sur $\Gamma$ (sinon $|g(z)|=|\lambda|<|g(z)|$). Les hypothèses du théorème de Rouché ([[ch02-rouche]]) sont réunies : $P_\lambda$ et $g$ sont holomorphes (donc méromorphes sans pôle) sur $\Omega=\C$, $\bar U\subset\Omega$, le bord $\Gamma$ est un cercle orienté positivement sans zéro de $P_\lambda$ ni de $g$, et $|P_\lambda-g|<|g|$ sur $\Gamma$. Donc
$$
Z(P_\lambda,U)=Z(g,U)=1 .
$$
Les zéros étant comptés avec multiplicité ([[ch01-def-multiplicite-zero]]), $P_\lambda$ a une seule racine $\zeta(\lambda)$ dans $D(0,1)$, et elle est **simple** : $P_\lambda'(\zeta(\lambda))=3\zeta(\lambda)^2-3\neq0$.

*Symétries.* Les coefficients de $P_{\bar\lambda}$ sont les conjugués de ceux de $P_\lambda$, donc $P_{\bar\lambda}(\overline{\zeta(\lambda)})=\overline{P_\lambda(\zeta(\lambda))}=0$ ; comme $|\overline{\zeta(\lambda)}|<1$ et $\bar\lambda\in D(0,2)$, l'unicité donne $\zeta(\bar\lambda)=\overline{\zeta(\lambda)}$. De même $P_{-\lambda}(-\zeta(\lambda))=-\zeta^3+3\zeta-\lambda=-P_\lambda(\zeta(\lambda))=0$, d'où $\zeta(-\lambda)=-\zeta(\lambda)$. En particulier $\zeta(t)\in\,]-1,1[$ pour $t\in\,]-2,2[$.

**2.** Fixons $\lambda_0\in D(0,2)$, $z_0=\zeta(\lambda_0)$ et $\eps>0$ assez petit pour que $\bar D(z_0,\eps)\subset D(0,1)$. $P_{\lambda_0}$ n'a pas d'autre zéro que $z_0$ dans $D(0,1)$, donc ne s'annule pas sur le compact $C(z_0,\eps)$ : $m:=\min_{C(z_0,\eps)}|P_{\lambda_0}|>0$. Soit $\lambda\in D(0,2)$ avec $|\lambda-\lambda_0|<m$. Sur $C(z_0,\eps)$,
$$
|P_\lambda(z)-P_{\lambda_0}(z)|=|\lambda-\lambda_0|<m\le|P_{\lambda_0}(z)|,
$$
donc, par Rouché sur $U'=D(z_0,\eps)$, $Z(P_\lambda,D(z_0,\eps))=Z(P_{\lambda_0},D(z_0,\eps))=1$. Cette racine de $P_\lambda$ est dans $D(z_0,\eps)\subset D(0,1)$ : c'est $\zeta(\lambda)$. Ainsi $|\lambda-\lambda_0|<m\Rightarrow|\zeta(\lambda)-\zeta(\lambda_0)|<\eps$ : $\zeta$ est continue en $\lambda_0$.

**3.** Soit $G(\lambda,z)=z^3-3z+\lambda$, vue comme application de $\R^2\times\R^2$ dans $\R^2$ : elle est polynomiale en les coordonnées réelles, donc $C^\infty$. À $\lambda$ fixé, $z\mapsto G(\lambda,z)$ est holomorphe de dérivée $3z^2-3$, donc ([[ch01-c-derivable-ssi-df-c-lineaire]]) $\frac{\partial G}{\partial z}(\lambda,z)$ est la multiplication par $3z^2-3$ ; de même $\frac{\partial G}{\partial\lambda}(\lambda,z)=\id_\C$.

Fixons $\lambda_0\in D(0,2)$ et $z_0=\zeta(\lambda_0)$ : $G(\lambda_0,z_0)=0$ et $3z_0^2-3\ne0$ (racine simple, question 1), donc $\frac{\partial G}{\partial z}(\lambda_0,z_0)$ est un isomorphisme de $\R^2$. Par le théorème des fonctions implicites ([[ch06-fonctions-implicites]]), il existe des ouverts $U_0\ni\lambda_0$, $V_0\ni z_0$ et $\varphi:U_0\to V_0$ de classe $C^\infty$ tels que, pour $(\lambda,z)\in U_0\times V_0$, $G(\lambda,z)=0\iff z=\varphi(\lambda)$, avec
$$
d\varphi_\lambda(h)=-\big(3\varphi(\lambda)^2-3\big)^{-1}h=\frac{h}{3\big(1-\varphi(\lambda)^2\big)}\qquad(h\in\C).
$$
*$\varphi$ coïncide avec $\zeta$ près de $\lambda_0$.* Par la question 2, il existe un voisinage ouvert $W\subset U_0\cap D(0,2)$ de $\lambda_0$ tel que $\zeta(W)\subset V_0$. Pour $\lambda\in W$, $(\lambda,\zeta(\lambda))\in U_0\times V_0$ et $G(\lambda,\zeta(\lambda))=0$, donc $\zeta(\lambda)=\varphi(\lambda)$.

Ainsi $\zeta$ est $C^\infty$ au voisinage de chaque point, et sa différentielle $h\mapsto h/\big(3(1-\zeta(\lambda)^2)\big)$ est $\C$-linéaire : par [[ch01-c-derivable-ssi-df-c-lineaire]], $\zeta$ est $\C$-dérivable avec
$$
\zeta'(\lambda)=\frac{1}{3\big(1-\zeta(\lambda)^2\big)},
$$
qui est continue : $\zeta\in\Hol(D(0,2))$ ([[ch01-def-holomorphe]]).

**4.** $\zeta(0)=0$ (racine $0$ de $g$). L'équation $P_\lambda(\zeta)=0$ s'écrit $\zeta=\frac13(\lambda+\zeta^3)$. Comme $\zeta$ est holomorphe, elle est développable en série entière en $0$ ([[ch01-estimees-cauchy]]) ; elle est impaire (question 1), donc seuls les coefficients impairs sont non nuls. Avec $\zeta=c_1\lambda+c_3\lambda^3+c_5\lambda^5+O(\lambda^7)$ :
$$
\zeta^3=c_1^3\lambda^3+3c_1^2c_3\lambda^5+O(\lambda^7),
$$
et l'identification dans $3\zeta=\lambda+\zeta^3$ donne $3c_1=1$, $3c_3=c_1^3$, $3c_5=3c_1^2c_3$, soit
$$
\zeta(\lambda)=\frac{\lambda}{3}+\frac{\lambda^3}{81}+\frac{\lambda^5}{729}+O(\lambda^7),\qquad c_2=c_4=0 .
$$
(Contrôle : $\zeta'(0)=\frac1{3(1-0)}=\frac13$ ; le calcul formel donne ensuite $c_7=\frac4{19683}$, $c_9=\frac{55}{1594323}$.)

*A priori* : $\zeta$ est holomorphe sur $D(0,2)$, donc par [[ch01-estimees-cauchy]] le rayon de convergence de sa série de Taylor en $0$ est au moins $\sup\{r : \bar D(0,r)\subset D(0,2)\}=2$, et la série converge vers $\zeta$ sur $D(0,2)$ : $R\ge2$.

**5.** Supposons $R>2$ et notons $\psi$ la somme de la série sur $D(0,R)$ : $\psi$ est holomorphe sur $D(0,R)$ ([[ch01-serie-entiere-holomorphe]]) et $\psi=\zeta$ sur $D(0,2)$. Alors $\psi'$ est continue en $2$, donc bornée sur $[1,2]$, et $\psi'(t)=\zeta'(t)$ pour $t\in[1,2[$.

Étudions $\zeta(t)$ quand $t\to2^-$. Pour $t\in[0,2[$, $\zeta(t)\in\,]-1,1[$ est réel (question 1). Si $\ell\in[-1,1]$ est une valeur d'adhérence de $\zeta(t)$ quand $t\to2^-$, par continuité de $(\lambda,z)\mapsto P_\lambda(z)$ on a $P_2(\ell)=0$, or
$$
P_2(z)=z^3-3z+2=(z-1)^2(z+2),
$$
donc $\ell=1$. Les $\zeta(t)$ restant dans le compact $[-1,1]$, on en déduit $\zeta(t)\to1$, puis
$$
\zeta'(t)=\frac{1}{3\big(1-\zeta(t)^2\big)}\xrightarrow[t\to2^-]{}+\infty,
$$
ce qui contredit la bornitude de $\psi'$ sur $[1,2]$. Donc $R=2$. (Numériquement : $\zeta(1{,}99)\approx0{,}9417$, $\zeta'(1{,}99)\approx2{,}94$ ; $\zeta(1{,}999)\approx0{,}9817$, $\zeta'(1{,}999)\approx9{,}18$.)

**6.** Soit $\lambda\in\,]-2,2[$ et $\theta=\frac13\arcsin\frac\lambda2\in\,]-\frac\pi6,\frac\pi6[$. Avec $\sin3\theta=3\sin\theta-4\sin^3\theta$, le réel $x=2\sin\theta$ vérifie
$$
x^3-3x=8\sin^3\theta-6\sin\theta=-2\sin3\theta=-\lambda,
$$
donc $P_\lambda(x)=0$, et $|x|<2\sin\frac\pi6=1$. Par l'unicité de la question 1, $x=\zeta(\lambda)$. (On retrouve $\zeta(\lambda)\approx2\cdot\frac\lambda6=\frac\lambda3$, et le fait que $\arcsin$ a des points de branchement en $\pm1$, c'est-à-dire $\lambda=\pm2$.)

## Pièges et variantes

* **La fonction implicite n'est pas automatiquement $\zeta$.** Le théorème des fonctions implicites donne **une** fonction $\varphi$ sur un voisinage $U_0$, unique parmi les fonctions à valeurs dans $V_0$. Pour conclure que $\zeta=\varphi$, il faut savoir que $\zeta(\lambda)\in V_0$ pour $\lambda$ proche de $\lambda_0$ : c'est exactement la continuité (question 2). Sans elle, $\zeta$ pourrait a priori « sauter » d'une racine à l'autre.
* **Rouché donne le nombre de zéros avec multiplicité** : « exactement un zéro compté avec multiplicité » contient l'information « simple », qui est l'hypothèse $\partial G/\partial z\ne0$ du théorème des fonctions implicites.
* **Le théorème des fonctions implicites est réel** : il donne $\zeta\in C^\infty$ ; l'holomorphie vient de la $\C$-linéarité de $d\zeta_\lambda$, qui découle de ce que les différentielles partielles de $G$ sont des multiplications complexes.
* **Rayon de convergence** : « $\zeta$ holomorphe sur $D(0,2)$ » ne donne que $R\ge2$. Pour l'égalité, il faut un obstacle en un point du cercle $|\lambda|=2$ : ici la collision de $\zeta(\lambda)$ avec une autre racine (racine double $1$ de $P_2$), qui fait exploser $\zeta'$.
* Variante (formule intégrale) : on peut aussi obtenir l'holomorphie par $\zeta(\lambda)=\frac1{2i\pi}\int_{C(0,1)}\frac{z\,(3z^2-3)}{z^3-3z+\lambda}\,dz$ (résidu de $zP_\lambda'/P_\lambda$ en un zéro simple) et l'holomorphie sous le signe intégrale ([[ch01-holomorphie-sous-integrale]]).
* Variante : la formule de Lagrange donne $c_{2m+1}=\dfrac{1}{2m+1}\dbinom{3m}{m}\dfrac{1}{3^{3m+1}}$, et $\binom{3m}{m}^{1/m}\to\frac{27}4$ redonne $R=2$.
