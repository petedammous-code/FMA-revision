---
id: ex-ch09-solide-euler
type: exercise
chapters: [9, 7]
title: Les équations d'Euler du solide libre et l'axe intermédiaire instable
source: "Classique (équations d'Euler du solide en rotation libre ; voir Arnold, *Méthodes mathématiques de la mécanique classique*, ch. 6, adapté)"
difficulty: 4
time: 85
tools: [ch09-espace-tangent-graphe-equation, ch09-ex-sphere, ch09-courbe-integrale-reste-dans-sous-variete-fermee, ch09-flot-complet-compacte, ch09-sous-variete-equation-valeur-reguliere, ch09-ex-dimension-zero, ch09-vecteur-tangent-espace-tangent-def, ch09-espace-tangent-image-dx, ch07-cauchy-lipschitz, ch07-unicite-globale, ch07-lemme-des-bouts]
---
## Énoncé

*Contexte physique (non utilisé dans les preuves).* Pour un solide en rotation libre autour de son centre de gravité, le moment cinétique $m(t)\in\R^3$, exprimé dans les axes principaux d'inertie du solide, vérifie l'équation d'Euler $m'=m\wedge Am$, où $A=\mathrm{diag}(a_1,a_2,a_3)$ et $a_i=1/I_i$ sont les inverses des moments principaux d'inertie.

On fixe $a_1>a_2>a_3>0$, on note $\wedge$ le produit vectoriel, $\langle\cdot,\cdot\rangle$ et $\norm\cdot$ le produit scalaire et la norme euclidienne de $\R^3$, $(e_1,e_2,e_3)$ la base canonique, et
$$
X(m)=m\wedge Am,\qquad H(m)=\langle Am,m\rangle=a_1m_1^2+a_2m_2^2+a_3m_3^2\qquad(m\in\R^3).
$$
On étudie l'équation différentielle autonome $m'=X(m)$ sur $\R^3$. Pour $r>0$ et $c\in\R$, on pose
$$
S_r=\{m\in\R^3\;;\;\norm m=r\},\qquad C_{r,c}=\{m\in S_r\;;\;H(m)=c\},\qquad k=\sqrt{\frac{a_1-a_2}{a_2-a_3}},
$$
et l'on note $P_\pm=\{m\in\R^3\;;\;m_3=\pm k\,m_1\}$ (deux plans vectoriels).

**Partie A — Lois de conservation.**

1. Écrire les composantes de $X(m)$. Montrer que $\langle m,X(m)\rangle=\langle Am,X(m)\rangle=0$ pour tout $m$, et en déduire que pour tout $r>0$ et tout $m\in S_r$, $X(m)\in T_mS_r$.
2. Montrer que si $m:J\to\R^3$ est une solution de $m'=X(m)$ sur un intervalle $J$, alors $\norm{m(t)}$ et $H(m(t))$ ne dépendent pas de $t$.

**Partie B — Existence globale et équilibres.**

3. Montrer que toute solution maximale de $m'=X(m)$ est définie sur $\R$.
4. Déterminer l'ensemble des zéros de $X$, puis ses zéros sur $S_r$.

**Partie C — Géométrie des niveaux d'énergie sur la sphère.** On fixe $r>0$.

5. Montrer que $C_{r,c}\neq\emptyset$ si et seulement si $a_3r^2\le c\le a_1r^2$, et que pour $c\in\,]a_3r^2,a_1r^2[\,\setminus\{a_2r^2\}$, $C_{r,c}$ est une sous-variété compacte de dimension $1$ de $\R^3$ à laquelle $X$ est tangent.
6. Déterminer $C_{r,a_1r^2}$ et $C_{r,a_3r^2}$. Sont-ce des sous-variétés ? Le critère de la question 5 s'y applique-t-il ?
7. Montrer que $C_{r,a_2r^2}=S_r\cap(P_+\cup P_-)$, puis que $C_{r,a_2r^2}$ n'est pas une sous-variété de $\R^3$. (On pourra étudier les vecteurs vitesses en $re_2$ des courbes $C^1$ tracées sur $C_{r,a_2r^2}$.)

**Partie D — Stabilité des rotations stationnaires.**

8. Soit $\rho>0$. Montrer que l'équilibre $\rho e_1$ est **stable** : pour tout $\eps>0$, il existe $\delta>0$ tel que toute solution maximale $m$ avec $\norm{m(0)-\rho e_1}<\delta$ vérifie $\norm{m(t)-\rho e_1}<\eps$ pour tout $t\in\R$. (On pourra considérer $G(m)=a_1\norm m^2-H(m)$.)
9. Montrer que $X(m)\in P_-$ pour tout $m\in P_-$, et en déduire qu'une solution qui part d'un point de $P_-$ reste dans $P_-$.
10. Soit $m$ la solution maximale avec $m(0)\in P_-\cap S_r$, $m(0)\neq\pm re_2$. On pose $\kappa=\sqrt{(a_1-a_2)(a_2-a_3)}$.
    a. Montrer que $m_2'=-\kappa\,(r^2-m_2^2)$ sur $\R$, et en déduire $m_2(t)=-r\tanh\big(\kappa r t-\beta\big)$ où $\tanh\beta=m_2(0)/r$.
    b. En déduire $\lim_{t\to+\infty}m(t)=-re_2$ et $\lim_{t\to-\infty}m(t)=re_2$.
    c. Conclure que l'équilibre $re_2$ n'est pas stable (au sens de la question 8).

## Indices

### Indice 1
Partie A : l'espace tangent à une sphère est l'orthogonal du rayon, et un produit vectoriel $u\wedge w$ est orthogonal à $u$ et à $w$. Partie B : une solution qui reste dans un compact ne peut pas exploser. Partie C : $C_{r,c}$ est défini par deux équations ; il faut savoir où leurs différentielles sont liées.

### Indice 2
Question 5 : avec $F(m)=(\norm m^2-r^2,H(m)-c)$, $dF_m(v)=(2\langle m,v\rangle,2\langle Am,v\rangle)$ est surjective si et seulement si $m$ et $Am$ sont indépendants, c'est-à-dire si $m$ n'est pas vecteur propre de $A$. Les vecteurs propres de $A$ sont sur les axes (les $a_i$ sont distincts). Question 7 : sur $S_r$, $H(m)=a_2r^2\iff(a_1-a_2)m_1^2=(a_2-a_3)m_3^2$.

### Indice 3
Question 7 : si $\alpha$ est une courbe $C^1$ dans $C_{r,a_2r^2}$ avec $\alpha(0)=re_2$, alors $\frac{\alpha(t)-re_2}{t}\in P_+\cup P_-$ (fermé) pour $t\ne0$ ; sa limite $\alpha'(0)$ est dans $(P_+\cup P_-)\cap e_2^\perp$, réunion de deux droites. Comparer avec la structure d'espace vectoriel de l'espace tangent. Question 8 : $G(m)=(a_1-a_2)m_2^2+(a_1-a_3)m_3^2$ est conservée et contrôle $m_2^2+m_3^2$.

### Indice 4
Question 9 : appliquer le résultat sur les champs tangents à une sous-variété fermée au plan $P_-$. Question 10a : sur $P_-\cap S_r$, $m_3=-km_1$ et $(1+k^2)m_1^2=r^2-m_2^2$, avec $1+k^2=\frac{a_1-a_3}{a_2-a_3}$ ; puis unicité pour l'équation scalaire $y'=-\kappa(r^2-y^2)$.

## Corrigé

**Partie A.**

**1.** Avec $Am=(a_1m_1,a_2m_2,a_3m_3)$,
$$
X(m)=m\wedge Am=\big((a_3-a_2)\,m_2m_3,\ (a_1-a_3)\,m_3m_1,\ (a_2-a_1)\,m_1m_2\big).
$$
Le produit vectoriel $u\wedge w$ est orthogonal à $u$ et à $w$, donc $\langle m,X(m)\rangle=0$ et $\langle Am,X(m)\rangle=0$ (on le vérifie aussi directement : $\langle m,X(m)\rangle=m_1m_2m_3\big[(a_3-a_2)+(a_1-a_3)+(a_2-a_1)\big]=0$ et $\langle Am,X(m)\rangle=m_1m_2m_3\big[a_1(a_3-a_2)+a_2(a_1-a_3)+a_3(a_2-a_1)\big]=0$).

$S_r=\Phi^{-1}(\{r^2\})$ avec $\Phi(m)=\norm m^2$, $d\Phi_m(v)=2\langle m,v\rangle$, non nulle sur $S_r$ ; donc $r^2$ est valeur régulière, $S_r$ est une sous-variété de dimension $2$ (exemple IX.4.2, [[ch09-ex-sphere]]) et $T_mS_r=\ker d\Phi_m=m^\perp$ (proposition IX.7.13, [[ch09-espace-tangent-graphe-equation]]). Comme $\langle m,X(m)\rangle=0$, $X(m)\in T_mS_r$.

**2.** $m$ est dérivable, donc $t\mapsto\norm{m(t)}^2$ et $t\mapsto H(m(t))$ aussi, et
$$
\frac{d}{dt}\norm{m(t)}^2=2\langle m(t),m'(t)\rangle=2\langle m,X(m)\rangle=0,\qquad\frac{d}{dt}H(m(t))=2\langle Am(t),m'(t)\rangle=2\langle Am,X(m)\rangle=0
$$
($A$ est symétrique, donc $dH_m(v)=2\langle Am,v\rangle$). Ces fonctions ont une dérivée nulle sur l'intervalle $J$ : elles sont constantes.

*Autre point de vue (cours)* : $S_r$ est une sous-variété **fermée** de $\R^3$ et $X$ (de classe $C^\infty$, donc localement lipschitzien) est tangent à $S_r$ ; par la proposition IX.8.1 ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]), une courbe intégrale qui part de $S_r$ reste dans $S_r$. Le calcul direct est ici plus rapide et donne aussi la conservation de $H$.

**Partie B.**

**3.** $X$ est polynomial, donc de classe $C^1$, donc localement lipschitzien sur l'ouvert $\R^3$ : par le théorème de Cauchy–Lipschitz ([[ch07-cauchy-lipschitz]]) et l'unicité globale ([[ch07-unicite-globale]]), pour tout $m_0$ il existe une unique solution maximale $m:J\to\R^3$ avec $m(0)=m_0$, $J$ intervalle ouvert contenant $0$. Si $m_0=0$, c'est la solution nulle, définie sur $\R$. Sinon, par 2., $m(J)\subset S_{\norm{m_0}}$, qui est un compact de $\R^3$. Le lemme des bouts ([[ch07-lemme-des-bouts]]) (champ autonome, localement lipschitzien, solution restant dans un compact du domaine $\R^3$) donne $\sup J=+\infty$, et de même $\inf J=-\infty$ : $J=\R$.

(On peut aussi invoquer le théorème IX.8.9, [[ch09-flot-complet-compacte]] : la restriction de $X$ à la sous-variété compacte $S_r$ est un champ tangent, lipschitzien sur $S_r$ car $C^1$ au voisinage du compact convexe $\bar B(0,r)$ ; son flot est défini sur $\R\times S_r$.)

**4.** $X(m)=0$ si et seulement si $m$ et $Am$ sont colinéaires, c'est-à-dire $m=0$ ou $m$ vecteur propre de $A$. Les $a_i$ étant deux à deux distincts, les vecteurs propres de $A$ sont les vecteurs non nuls des trois axes. (Directement : $X(m)=0$ impose $m_2m_3=m_3m_1=m_1m_2=0$, donc au moins deux coordonnées nulles.) Les zéros de $X$ sont donc les points des trois axes de coordonnées, et sur $S_r$ ce sont les **six points** $\pm re_1,\pm re_2,\pm re_3$. Les solutions correspondantes sont constantes : ce sont les rotations stationnaires autour des axes principaux.

**Partie C.**

**5.** *Non-vacuité.* Pour $m\in S_r$, $a_3r^2=a_3\norm m^2\le H(m)\le a_1\norm m^2=a_1r^2$, donc $C_{r,c}=\emptyset$ si $c\notin[a_3r^2,a_1r^2]$. Réciproquement $H$ est continue sur $S_r$, qui est connexe par arcs, et prend les valeurs $H(re_3)=a_3r^2$ et $H(re_1)=a_1r^2$ ; par le théorème des valeurs intermédiaires (le long d'un chemin dans $S_r$ joignant $re_3$ à $re_1$), elle prend toute valeur $c\in[a_3r^2,a_1r^2]$.

*Sous-variété.* Soit $F:\R^3\to\R^2$, $F(m)=(\norm m^2-r^2,H(m)-c)$, de classe $C^\infty$, avec $C_{r,c}=F^{-1}(\{0\})$ et
$$
dF_m(v)=\big(2\langle m,v\rangle,\ 2\langle Am,v\rangle\big).
$$
$dF_m:\R^3\to\R^2$ est surjective si et seulement si les formes $\langle m,\cdot\rangle$ et $\langle Am,\cdot\rangle$ sont indépendantes, c'est-à-dire si $m$ et $Am$ ne sont pas colinéaires. Pour $m\in C_{r,c}$ ($m\ne0$), d'après 4., la colinéarité équivaut à $m\in\{\pm re_1,\pm re_2,\pm re_3\}$, et alors $c=H(m)\in\{a_1r^2,a_2r^2,a_3r^2\}$. Donc, pour $c\in\,]a_3r^2,a_1r^2[\,\setminus\{a_2r^2\}$, $0$ est valeur régulière de $F$ et la proposition IX.4.1 ([[ch09-sous-variete-equation-valeur-reguliere]]) ($N=3$, $N-m=2$) montre que $C_{r,c}$ est une sous-variété de dimension $1$. Elle est fermée ($F$ continue) et bornée (contenue dans $S_r$), donc compacte. Enfin $T_mC_{r,c}=\ker dF_m$ ([[ch09-espace-tangent-graphe-equation]]) et $dF_m(X(m))=(2\langle m,X(m)\rangle,2\langle Am,X(m)\rangle)=(0,0)$ par 1. : $X$ est tangent à $C_{r,c}$.

**6.** Sur $S_r$, $a_1r^2-H(m)=(a_1-a_2)m_2^2+(a_1-a_3)m_3^2$, somme de deux termes positifs à coefficients $>0$. Donc $H(m)=a_1r^2\iff m_2=m_3=0$, et $C_{r,a_1r^2}=\{re_1,-re_1\}$. De même $H(m)-a_3r^2=(a_1-a_3)m_1^2+(a_2-a_3)m_2^2$ donne $C_{r,a_3r^2}=\{re_3,-re_3\}$.

Ce sont des ensembles finis, donc discrets : ce sont des sous-variétés de dimension $0$ (pour un point isolé $p$, l'application $x:\R^0=\{0\}\to\{p\}$ est un paramétrage local ; voir l'exemple IX.2.4, [[ch09-ex-dimension-zero]]). Le critère de la question 5 **ne s'applique pas** : en $\pm re_1$, $Am=a_1m$ est colinéaire à $m$, $dF_m$ est de rang $1$, et $0$ n'est pas valeur régulière. On obtient d'ailleurs une dimension ($0$) différente de $3-2=1$.

**7.** *Description.* Pour $m\in S_r$, $H(m)=a_2r^2=a_2(m_1^2+m_2^2+m_3^2)$ équivaut à $(a_1-a_2)m_1^2=(a_2-a_3)m_3^2$, soit $m_3^2=k^2m_1^2$, soit $m_3=\pm km_1$. Donc $C:=C_{r,a_2r^2}=S_r\cap(P_+\cup P_-)$ : la réunion de deux grands cercles, qui se coupent en $P_+\cap P_-\cap S_r=\{m_1=m_3=0\}\cap S_r=\{\pm re_2\}$.

*Ce n'est pas une sous-variété.* Raisonnons par l'absurde : si $C$ était une sous-variété (de dimension $d$), l'ensemble $T$ des vecteurs vitesses $\alpha'(0)$ des courbes $\alpha$ de classe $C^1$ tracées sur $C$ avec $\alpha(0)=p:=re_2$ serait un **sous-espace vectoriel** de $\R^3$ (définition IX.7.8 et proposition IX.7.9, [[ch09-vecteur-tangent-espace-tangent-def]], [[ch09-espace-tangent-image-dx]]).

* *$T$ contient deux vecteurs indépendants.* Posons $s_0=\sqrt{1+k^2}$ et $\gamma_\pm(s)=\big(\frac{r\sin s}{s_0},\ r\cos s,\ \pm\frac{kr\sin s}{s_0}\big)$. On a $\norm{\gamma_\pm(s)}^2=\frac{r^2\sin^2s\,(1+k^2)}{s_0^2}+r^2\cos^2s=r^2$ et $\gamma_\pm(s)\in P_\pm$ : ce sont des courbes $C^\infty$ dans $C$, avec $\gamma_\pm(0)=p$ et $\gamma_\pm'(0)=\frac r{s_0}(1,0,\pm k)=:u_\pm$. Donc $u_+,u_-\in T$.
* *$T$ est contenu dans deux droites.* Soit $\alpha$ une courbe $C^1$ dans $C$ avec $\alpha(0)=p$. Pour $t\ne0$, $\alpha(t)$ est dans $P_+$ ou dans $P_-$, ainsi que $p$ ; comme ce sont des plans vectoriels, $\frac{\alpha(t)-p}t\in P_+\cup P_-$. Cet ensemble étant fermé, la limite $\alpha'(0)$ y est aussi. De plus $\alpha$ est tracée sur $S_r$, donc $\alpha'(0)\in T_pS_r=e_2^\perp$. Ainsi $T\subset(P_+\cap e_2^\perp)\cup(P_-\cap e_2^\perp)=\R u_+\cup\R u_-$.

Si $T$ était un espace vectoriel, il contiendrait $u_++u_-=\frac r{s_0}(2,0,0)$, qui n'est ni dans $P_+$ ni dans $P_-$ (car $0\ne\pm2k\frac r{s_0}$). Contradiction : **$C_{r,a_2r^2}$ n'est pas une sous-variété** de $\R^3$ (le même phénomène que la croix $xy=0$ : deux branches qui se coupent transversalement).

**Partie D.**

**8.** Par 2., $G(m)=a_1\norm m^2-H(m)=(a_1-a_2)m_2^2+(a_1-a_3)m_3^2$ est constante le long des solutions. Posons $K=\sqrt{\frac{a_1-a_3}{a_1-a_2}}\ \ (\ge1)$ et, pour $\eps>0$ donné,
$$
\delta=\min\Big(\frac{\rho}{K+1},\ \frac{\eps}{2K+1}\Big).
$$
Soit $m$ une solution maximale (définie sur $\R$ par 3.) avec $m_0=m(0)$, $\norm{m_0-\rho e_1}<\delta$, et $r_0=\norm{m_0}$, de sorte que $|r_0-\rho|<\delta$ et $|m_{0,1}-\rho|<\delta$.

* *Contrôle de $m_2,m_3$.* Pour tout $t$,
$$
m_2(t)^2+m_3(t)^2\le\frac{G(m(t))}{a_1-a_2}=\frac{G(m_0)}{a_1-a_2}\le\frac{(a_1-a_3)(m_{0,2}^2+m_{0,3}^2)}{a_1-a_2}<K^2\delta^2 .
$$
Notons $\eta^2=G(m_0)/(a_1-a_2)$, de sorte que $m_2^2+m_3^2\le\eta^2$ et $\eta<K\delta$.
* *Signe de $m_1$.* $\norm{m(t)}=r_0$, donc $m_1(t)^2=r_0^2-m_2(t)^2-m_3(t)^2\ge r_0^2-\eta^2>0$, car $\eta<K\delta\le\rho-\delta<r_0$ (on a utilisé $\delta(K+1)\le\rho$). La fonction continue $m_1$ ne s'annule pas sur l'intervalle $\R$ et $m_1(0)>\rho-\delta>0$ : donc $m_1(t)>0$, et $\sqrt{r_0^2-\eta^2}\le m_1(t)\le r_0$ pour tout $t$.
* *Contrôle de $m_1$.* Comme $0\le\eta\le r_0$, $(r_0-\eta)^2\le r_0^2-\eta^2$ (équivalent à $\eta\le r_0$), donc $r_0-\sqrt{r_0^2-\eta^2}\le\eta$ et $|m_1(t)-\rho|\le|m_1(t)-r_0|+|r_0-\rho|\le\eta+\delta$.

Finalement, pour tout $t\in\R$,
$$
\norm{m(t)-\rho e_1}^2\le(\eta+\delta)^2+\eta^2<\big((K+1)^2+K^2\big)\delta^2\le(2K+1)^2\delta^2\le\eps^2 .
$$
L'équilibre $\rho e_1$ est stable. (Le même raisonnement avec $H-a_3\norm m^2$ montre la stabilité de $\rho e_3$.)

**9.** Pour $m\in P_-$, c'est-à-dire $m_3=-km_1$ :
$$
X_3(m)+kX_1(m)=(a_2-a_1)m_1m_2+k(a_3-a_2)m_2m_3=-m_2\big[(a_1-a_2)m_1+k(a_2-a_3)m_3\big].
$$
Or $a_1-a_2=k^2(a_2-a_3)$, donc le crochet vaut $k(a_2-a_3)(km_1+m_3)=0$. Ainsi $X(m)\in P_-$. Le plan $P_-$ est une sous-variété **fermée** de $\R^3$ (sous-espace vectoriel, exemple IX.2.5), avec $T_mP_-=P_-$ ; le champ $X$, $C^\infty$ sur $\R^3$, est tangent à $P_-$. Par la proposition IX.8.1 ([[ch09-courbe-integrale-reste-dans-sous-variete-fermee]]), toute courbe intégrale (définie sur un intervalle contenant $0$) avec $m(0)\in P_-$ reste dans $P_-$.

**10a.** Par 3., 2. et 9., $m$ est définie sur $\R$ et $m(t)\in P_-\cap S_r$ pour tout $t$ : $m_3=-km_1$ et $m_1^2+m_2^2+k^2m_1^2=r^2$, donc
$$
m_1^2=\frac{r^2-m_2^2}{1+k^2},\qquad 1+k^2=\frac{(a_2-a_3)+(a_1-a_2)}{a_2-a_3}=\frac{a_1-a_3}{a_2-a_3}.
$$
Alors
$$
m_2'=X_2(m)=(a_1-a_3)m_3m_1=-k(a_1-a_3)m_1^2=-k(a_2-a_3)(r^2-m_2^2)=-\kappa(r^2-m_2^2),
$$
car $k(a_2-a_3)=\sqrt{(a_1-a_2)(a_2-a_3)}=\kappa$.

Comme $m(0)\ne\pm re_2$ et $m(0)\in P_-\cap S_r$, on a $m_1(0)\ne0$ (sinon $m_3(0)=0$ et $m(0)=\pm re_2$), donc $m_2(0)^2<r^2$ et $\beta=\mathrm{artanh}(m_2(0)/r)$ est bien défini. La fonction $y(t)=-r\tanh(\kappa rt-\beta)$, définie sur $\R$, vérifie $y(0)=r\tanh\beta=m_2(0)$ et
$$
y'(t)=-\kappa r^2\big(1-\tanh^2(\kappa rt-\beta)\big)=-\kappa(r^2-y(t)^2).
$$
$m_2$ et $y$ sont deux solutions sur $\R$ du problème de Cauchy $y'=-\kappa(r^2-y^2)$, $y(0)=m_2(0)$, dont le second membre est polynomial donc localement lipschitzien : par unicité ([[ch07-unicite-globale]]), $m_2=y$ sur $\R$.

**10b.** Quand $t\to+\infty$, $\tanh(\kappa rt-\beta)\to1$, donc $m_2(t)\to-r$ ; alors $m_1(t)^2=\frac{r^2-m_2(t)^2}{1+k^2}\to0$ et $m_3=-km_1\to0$. Donc $m(t)\to-re_2$. De même, quand $t\to-\infty$, $m_2(t)\to r$, $m_1,m_3\to0$ et $m(t)\to re_2$.

**10c.** Soit $\delta>0$. Pour $s>0$ petit, le point $m(0)=\gamma_-(s)=\big(\frac{r\sin s}{s_0},r\cos s,-\frac{kr\sin s}{s_0}\big)$ (question 7) est dans $P_-\cap S_r$, différent de $\pm re_2$, et $\norm{m(0)-re_2}<\delta$ dès que $s$ est assez petit (continuité de $\gamma_-$ en $0$). Par 10b, $\norm{m(t)-re_2}\to\norm{-re_2-re_2}=2r$ quand $t\to+\infty$. Ainsi, pour $\eps=r$, aucun $\delta>0$ ne convient dans la définition de la question 8 : **l'équilibre $re_2$ n'est pas stable**. Physiquement : la rotation autour de l'axe d'inertie intermédiaire est instable (effet « raquette de tennis », ou effet Djanibekov), tandis que celles autour des axes de plus petit et de plus grand moment d'inertie sont stables.

## Pièges et variantes

* Question 3 : le lemme des bouts demande que la solution reste dans un **compact du domaine** du champ ; c'est la conservation de $\norm m$ (partie A) qui le fournit. Sans loi de conservation, un champ polynomial peut exploser en temps fini ($m'=m^2$ sur $\R$).
* Question 5 : vérifier la régularité **en tout point** de $C_{r,c}$ et pour une application à valeurs dans $\R^2$ : il faut l'indépendance des deux différentielles, pas seulement leur non-nullité.
> ⚠️ Question 6 : une fibre d'une valeur critique **peut** être une sous-variété (ici, deux points). Inversement, à la question 7, pour prouver qu'un ensemble n'est pas une sous-variété, il faut un argument direct (ici, l'espace des vecteurs vitesses n'est pas un espace vectoriel).
* Question 8 : la conservation de $G$ seule ne suffit pas, il faut aussi le signe de $m_1$ (connexité de $\R$ et continuité) pour ne pas « sauter » vers $-\rho e_1$.
* Question 9 : la proposition IX.8.1 s'applique à n'importe quelle sous-variété fermée invariante, ici un plan ; le calcul direct ($\psi=m_3+km_1$ vérifie $\psi'=-k(a_2-a_3)m_2\,\psi$, donc $\psi\equiv0$) est une alternative.
* Variante : par le corollaire IX.8.10, pour tout $t$, $m\mapsto F_t(m)$ est un difféomorphisme de $S_r$ qui préserve chaque $C_{r,c}$ ; sur une composante connexe de $C_{r,c}$ régulière (un cercle sans équilibre), le mouvement est périodique.
* Variante : avec $a_1=a_2>a_3$ (solide symétrique), $m_3$ est constant et $(m_1,m_2)$ tourne à vitesse angulaire constante $(a_1-a_3)m_3$ : c'est la précession libre.
