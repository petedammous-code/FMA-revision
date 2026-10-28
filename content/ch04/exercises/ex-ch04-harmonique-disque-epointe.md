---
id: ex-ch04-harmonique-disque-epointe
type: exercise
chapters: [4, 1, 2]
title: Fonctions harmoniques sur le disque épointé et singularités effaçables
source: "Classique (« théorème de conjugaison logarithmique » et singularités effaçables des fonctions harmoniques, cf. Axler–Bourdon–Ramey, *Harmonic Function Theory* ; preuve adaptée aux outils du cours)"
difficulty: 3
time: 45
tools: [ch04-composition-harmonique-holomorphe, ch04-harmonique-reelle-partie-reelle, ch01-cauchy-riemann, ch01-inversion-locale-holomorphe, ch02-singularite-effacable-riemann, ch02-logarithme-existence]
---
## Énoncé

On note $D=D(0,1)$, $D^*=D\setminus\{0\}$ et $P=\{\zeta\in\C:\Re(\zeta)<0\}$. Toutes les fonctions harmoniques considérées sont à valeurs **réelles**.

1. Montrer que $z\mapsto\log|z|$ est harmonique sur $D^*$, mais qu'il n'existe aucune $G\in\Hol(D^*)$ telle que $\Re G(z)=\log|z|$ sur $D^*$.
2. Soit $u$ harmonique sur $D^*$, et $v=u\circ\exp$. Montrer que $v$ est harmonique sur $P$, qu'il existe $\Phi\in\Hol(P)$ telle que $\Re\Phi=v$, et qu'il existe $\beta\in\R$ tel que $\Phi(\zeta+2i\pi)=\Phi(\zeta)+i\beta$ pour tout $\zeta\in P$.
3. En déduire qu'il existe $\alpha\in\R$ et $F\in\Hol(D^*)$ tels que
$$
u(z)=\alpha\log|z|+\Re F(z)\qquad(z\in D^*),
$$
et que $\alpha$ est déterminé par $u$.
4. Pour $0<r<1$, on pose $m(r)=\dfrac1{2\pi}\displaystyle\int_0^{2\pi}u(re^{i\theta})\,d\theta$. Montrer qu'il existe $c\in\R$ tel que $m(r)=\alpha\log r+c$ pour tout $r\in\,]0,1[$.
5. On suppose $u$ **bornée** sur $D^*$. Montrer que $u$ se prolonge en une fonction harmonique sur $D$.

## Indices

### Indice 1
Question 1 : si $\Re G=\log|z|$, que vaut $G'$ ? Intégrer sur un cercle. Question 2 : $P$ est convexe et $\exp(P)=D^*$ ; $\zeta\mapsto\Phi(\zeta+2i\pi)-\Phi(\zeta)$ est holomorphe de partie réelle nulle.

### Indice 2
Question 3 : $\Psi(\zeta)=\Phi(\zeta)-\frac{\beta}{2\pi}\zeta$ est $2i\pi$-périodique, donc « passe au quotient » par $\exp$ : poser $F(e^\zeta)=\Psi(\zeta)$ et utiliser l'inversion locale de $\exp$ pour l'holomorphie. Question 4 : dériver $r\mapsto\int_0^{2\pi}F(re^{i\theta})\,d\theta$.

### Indice 3
Question 5 : $m$ bornée force $\alpha=0$. Alors $u=\Re F$ et $E=e^F$ vérifie $e^{-K}\le|E|\le e^K$ : singularité effaçable, $E(0)\neq0$, puis logarithme holomorphe de $E$ sur le disque $D$.

## Corrigé

**1.** $\log|z|=\tfrac12\log(z\bar z)$ est $C^\infty$ sur $D^*$ et $\dfrac{\partial}{\partial\bar z}\log|z|=\dfrac12\cdot\dfrac{z}{z\bar z}=\dfrac1{2\bar z}$, puis $\dfrac{\partial}{\partial z}\Big(\dfrac1{2\bar z}\Big)=0$ ; donc $\Delta\log|z|=4\,\partial_z\partial_{\bar z}\log|z|=0$ ([[ch04-harmonique-def]]).

Supposons $G\in\Hol(D^*)$ avec $\Re G=\log|z|$. Comme $\Re G=\tfrac12(G+\bar G)$ et $\partial_z\bar G=\overline{\partial_{\bar z}G}=0$, on a $\partial_z(\Re G)=\tfrac12G'$, donc
$$
G'(z)=2\,\frac{\partial}{\partial z}\log|z|=2\cdot\frac{\bar z}{2z\bar z}=\frac1z .
$$
$G'$ admet la primitive $G$ sur $D^*$, donc $\int_\gamma G'(z)\,dz=0$ pour tout lacet $\gamma$ de $D^*$ ([[ch01-integrale-primitive]]). Or pour $\gamma(t)=\tfrac12e^{it}$, $t\in[0,2\pi]$, $\int_\gamma\frac{dz}{z}=\int_0^{2\pi}i\,dt=2i\pi\neq0$. Contradiction.

**2.** *Harmonicité.* Pour $\zeta\in P$, $|e^\zeta|=e^{\Re\zeta}\in\,]0,1[$, donc $\exp(P)\subset D^*$ (et même $=D^*$, car $z=e^{\log|z|+i\theta}$ si $z=|z|e^{i\theta}$). Comme $u$ est harmonique sur l'ouvert $D^*$ et $\exp$ holomorphe sur $P$ à valeurs dans $D^*$, $v=u\circ\exp$ est harmonique sur $P$ ([[ch04-composition-harmonique-holomorphe]], poly p. 81-82).

*Partie réelle d'une holomorphe.* $P$ est convexe, donc étoilé, donc simplement connexe ([[ch02-etoile-simplement-connexe]]) ; $v$ est harmonique réelle sur $P$, donc ([[ch04-harmonique-reelle-partie-reelle]], Corollaire IV.2.4, p. 77) il existe $\Phi\in\Hol(P)$ avec $\Re\Phi=v$.

*Défaut de périodicité.* $P$ est stable par $\zeta\mapsto\zeta+2i\pi$, donc $\Delta(\zeta):=\Phi(\zeta+2i\pi)-\Phi(\zeta)$ est holomorphe sur $P$, et $\Re\Delta(\zeta)=v(\zeta+2i\pi)-v(\zeta)=u(e^{\zeta}e^{2i\pi})-u(e^\zeta)=0$. Écrivons $\Delta=iW$ avec $W$ réelle. Les conditions de Cauchy réelles ([[ch01-cauchy-riemann]]) pour $\Delta=0+iW$ donnent $0=\partial_y W$ et $0=-\partial_xW$ : $W$ a une différentielle nulle sur l'ouvert connexe $P$, donc est constante ([[ch05-differentielle-nulle-constante]]). Il existe donc $\beta\in\R$ avec $\Phi(\zeta+2i\pi)=\Phi(\zeta)+i\beta$ sur $P$.

**3.** *Correction de la période.* Posons $\alpha=\dfrac{\beta}{2\pi}\in\R$ et $\Psi(\zeta)=\Phi(\zeta)-\alpha\zeta$, holomorphe sur $P$. Alors $\Psi(\zeta+2i\pi)=\Phi(\zeta)+i\beta-\alpha\zeta-2i\pi\alpha=\Psi(\zeta)$ : $\Psi$ est $2i\pi$-périodique, donc $2i\pi k$-périodique pour tout $k\in\Z$.

*Passage au quotient.* Pour $z\in D^*$, posons $F(z)=\Psi(\zeta)$ où $\zeta\in P$ vérifie $e^\zeta=z$. Un tel $\zeta$ existe ($\exp(P)=D^*$) et deux choix diffèrent de $2i\pi k$, $k\in\Z$ ; par périodicité $F$ est bien définie, et $F\circ\exp=\Psi$ sur $P$.

*Holomorphie de $F$.* Soit $z_0\in D^*$ et $\zeta_0\in P$ avec $e^{\zeta_0}=z_0$. Comme $\exp'(\zeta_0)=e^{\zeta_0}\neq0$, l'inversion locale holomorphe ([[ch01-inversion-locale-holomorphe]], Proposition I.4.4) fournit un ouvert $V\ni\zeta_0$, que l'on peut prendre inclus dans $P$ (quitte à le remplacer par $V\cap P$), tel que $W=\exp(V)$ soit un ouvert contenant $z_0$ et que $\exp:V\to W$ soit biholomorphe, de réciproque $\ell:W\to V$ holomorphe. Pour $z\in W$, $\ell(z)\in P$ et $e^{\ell(z)}=z$, donc $F(z)=\Psi(\ell(z))$ : $F|_W=\Psi\circ\ell$ est holomorphe. Ainsi $F\in\Hol(D^*)$.

*Formule.* Pour $z=e^\zeta\in D^*$, $\Re\zeta=\log|z|$, donc
$$
\Re F(z)=\Re\Psi(\zeta)=v(\zeta)-\alpha\Re\zeta=u(z)-\alpha\log|z| ,
$$
soit $u=\alpha\log|z|+\Re F$ sur $D^*$.

*Unicité de $\alpha$.* Si $u=\alpha\log|z|+\Re F=\alpha'\log|z|+\Re F_1$ avec $\alpha\neq\alpha'$, alors $\log|z|=\Re\Big(\dfrac{F_1-F}{\alpha-\alpha'}\Big)$ avec $\dfrac{F_1-F}{\alpha-\alpha'}\in\Hol(D^*)$, ce qui contredit la question 1. Donc $\alpha$ ne dépend que de $u$.

**4.** On a $m(r)=\alpha\log r+\Re M(r)$ avec $M(r)=\frac1{2\pi}\int_0^{2\pi}F(re^{i\theta})\,d\theta$. La fonction $(r,\theta)\mapsto\varphi(r,\theta)=F(re^{i\theta})$ est de classe $C^1$ sur $]0,1[\times\R$ ($F$ holomorphe, donc $C^\infty$, [[ch01-holomorphe-analytique]]), avec
$$
\partial_r\varphi=e^{i\theta}F'(re^{i\theta}),\qquad \partial_\theta\varphi=ire^{i\theta}F'(re^{i\theta})=ir\,\partial_r\varphi .
$$
L'intervalle d'intégration $[0,2\pi]$ est compact et $\partial_r\varphi$ continue : on peut dériver sous le signe somme, et
$$
M'(r)=\frac1{2\pi}\int_0^{2\pi}\partial_r\varphi\,d\theta=\frac1{2i\pi r}\int_0^{2\pi}\partial_\theta\varphi\,d\theta=\frac{F(re^{2i\pi})-F(r)}{2i\pi r}=0 .
$$
$M$ est donc constante sur l'intervalle $]0,1[$ ; avec $c=\Re M(r)$ (indépendant de $r$), $m(r)=\alpha\log r+c$.

**5.** *Étape 1 : $\alpha=0$.* Soit $K$ tel que $|u|\le K$ sur $D^*$. Alors $|m(r)|\le K$ pour tout $r\in\,]0,1[$. Si $\alpha\neq0$, $|m(r)|=|\alpha\log r+c|\to+\infty$ quand $r\to0^+$ : contradiction. Donc $\alpha=0$ et $u=\Re F$ avec $F\in\Hol(D^*)$.

*Étape 2 : effacer la singularité de $e^F$.* Posons $E=e^F\in\Hol(D^*)$. On a $|E|=e^{\Re F}=e^u$, donc $e^{-K}\le|E(z)|\le e^K$ sur $D^*$. $E$ est holomorphe sur $D\setminus\{0\}$ et bornée au voisinage de $0$ : par le théorème de Riemann ([[ch02-singularite-effacable-riemann]], Corollaire II.4.7, p. 45), $E$ se prolonge en une fonction $\tilde E\in\Hol(D)$. Par continuité, $|\tilde E(0)|=\lim_{z\to0}|E(z)|\ge e^{-K}>0$ ; et $\tilde E=e^F$ ne s'annule pas sur $D^*$. Donc $\tilde E$ ne s'annule pas sur $D$.

*Étape 3 : logarithme.* $D$ est convexe donc simplement connexe, et $\tilde E\in\Hol(D)$ ne s'annule pas : il existe $L\in\Hol(D)$ avec $e^L=\tilde E$ ([[ch02-logarithme-existence]], Proposition II.9.3, p. 56). Pour $z\in D^*$, $e^{\Re L(z)}=|e^{L(z)}|=|E(z)|=e^{u(z)}$, donc $\Re L=u$ sur $D^*$.

*Conclusion.* $\tilde u:=\Re L$ est harmonique sur $D$ ([[ch04-holomorphe-implique-harmonique]]) et coïncide avec $u$ sur $D^*$ : c'est le prolongement cherché (unique, puisqu'un prolongement continu est déterminé par $u$ sur $D^*$, dense dans $D$). En particulier $\tilde u(0)=\lim_{z\to0}u(z)=c$ (la moyenne $m(r)$, constante).

## Pièges et variantes

* **Prendre un « logarithme de $z$ » sur $D^*$** : il n'en existe pas (question 1) ; tout l'exercice consiste à contourner ce défaut, en passant par le revêtement $\exp:P\to D^*$ où tout est simplement connexe. C'est le même phénomène que pour la Remarque IV.2.3 et le Corollaire IV.2.4 : la décomposition $u=\Re F$ est **locale** sur $D^*$, et le terme $\alpha\log|z|$ est l'obstruction globale.
* **Composer sans vérifier l'image** : la formule de composition s'applique car $\exp(P)\subset D^*$, ouvert sur lequel $u$ est harmonique.
* **Holomorphie de $F$** : la définition « $F(e^\zeta)=\Psi(\zeta)$ » ne suffit pas, il faut l'inversion locale de $\exp$ (et non un logarithme global).
* **Question 5 : $E(0)\neq0$** est essentiel pour prendre un logarithme ; c'est la **minoration** $|E|\ge e^{-K}$ qui le donne (une majoration seule de $u$ ne suffit pas : $u=\log|z|$ est majorée par $0$ sur $D^*$ et ne se prolonge pas).
* Variante : la conclusion de 5 reste vraie si l'on suppose seulement $u$ **minorée** (ou majorée) près de $0$ : on montre encore $\alpha=0$ ... à condition de savoir que $u-\alpha\log|z|$ est alors bornée, ce qui demande plus de travail (théorème de Bôcher). Avec seulement $u$ majorée, $\log|z|$ montre que c'est faux.
* Variante (même méthode, couronne) : sur $A=\{r_1<|z|<r_2\}$, toute $u$ harmonique s'écrit $\alpha\log|z|+\Re F$ avec $F\in\Hol(A)$ (remplacer $P$ par la bande $\{\log r_1<\Re\zeta<\log r_2\}$) ; les fonctions harmoniques radiales sur $\C^\times$ sont les $\alpha\log|z|+\beta$ (Exercice IV.4.2 du poly, p. 86).
