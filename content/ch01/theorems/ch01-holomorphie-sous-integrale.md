---
id: ch01-holomorphie-sous-integrale
type: theorem
chapter: 1
title: "Holomorphie d'une intégrale à paramètre (domination locale) et dérivation sous le signe $\int$"
ref: Théorème I.9.1
page: 24
importance: 3
depends: [ch01-cauchy-formule-disque, ch01-holomorphe-analytique, ch01-serie-entiere-holomorphe, ch01-estimees-cauchy, ch01-integrale-sur-cercle]
tags: [integrale-parametre, domination, fubini, convergence-dominee, derivation-sous-integrale]
---
## Intuition

> 💡 Une intégrale $f(z)=\int_XF(z,x)\,dx$ est une « somme continue » de fonctions holomorphes $z\mapsto F(z,x)$. Une somme finie de fonctions holomorphes est holomorphe ; pour une somme infinie, il faut un contrôle qui empêche les termes de « s'échapper » : c'est la **domination locale**, exactement comme dans les théorèmes de Lebesgue.

La bonne surprise par rapport au cas réel : il n'y a **rien à dominer pour la dérivée**. En variable réelle, pour dériver sous $\int$, il faut dominer $\partial F/\partial t$ ; ici, on domine seulement $F$, et la formule de Cauchy ([[ch01-cauchy-formule-disque]]) fournit gratuitement le contrôle des dérivées (une fonction holomorphe bornée sur un disque a des dérivées contrôlées au centre, [[ch01-estimees-cauchy]]).

Vocabulaire : $X\subset\R^N$ est mesurable, muni de la mesure de Lebesgue $dx$ ; « $g$ intégrable » signifie $\int_X|g|\,dx<+\infty$ ; $D(z_0,r)$ est le disque ouvert, $\bar D(z_0,r)$ le disque fermé, $C(z_0,r)$ le cercle orienté dans le sens direct ([[ch01-cercle-sens-direct]]).

## Énoncé

**Théorème (poly, Théorème I.9.1, p. 24).** Soit $\Omega$ un ouvert de $\C$, $X$ un sous-ensemble mesurable de $\R^N$ (muni de la mesure de Lebesgue $dx$) et $F$ une fonction définie sur $\Omega\times X$. On suppose que :

* (i) $F$ est mesurable sur $\Omega\times X$ et, pour tout $x\in X$, $z\mapsto F(z,x)$ est holomorphe sur $\Omega$ ;
* (ii) pour tout $z_0\in\Omega$, il existe $r_0>0$ tel que le disque $D(z_0,r_0)$ soit inclus dans $\Omega$, et une fonction $g_{z_0}$ intégrable sur $X$ (au sens de Lebesgue) avec, pour tout $z\in D(z_0,r_0)$ et tout $x\in X$, $|F(z,x)|\le g_{z_0}(x)$.

Alors la fonction $f$ définie par
$$
f(z)=\int_XF(z,x)\,dx\qquad\text{(I.9.1)}
$$
est bien définie et holomorphe sur $\Omega$. De plus, pour tout $k\in\N$,
$$
f^{(k)}(z)=\int_X\frac{\partial^kF}{\partial z^k}(z,x)\,dx .
$$

## Hypothèses

### H1 — $F$ mesurable sur $\Omega\times X$

**Rôle.** Elle donne un sens aux intégrales $\int_XF(z,x)\,dx$ et permet d'appliquer le théorème de Fubini à $(\omega,x)\mapsto F(\omega,x)/(\omega-z)$ sur $C(z_0,r)\times X$.

**Si on la retire.** L'intégrale peut ne pas exister : avec $X=[0,1]$, $A\subset[0,1]$ non mesurable (ensemble de Vitali) et $F(z,x)=\mathbf 1_A(x)$, la fonction $z\mapsto F(z,x)$ est constante donc holomorphe, $|F|\le1$ est dominée par la constante $1$ intégrable sur $[0,1]$, mais $\int_0^1\mathbf 1_A(x)\,dx$ n'a pas de sens. C'est une hypothèse technique, toujours vérifiée en pratique (fonctions continues ou continues par morceaux).

### H2 — $z\mapsto F(z,x)$ holomorphe pour tout $x$

**Rôle.** On applique la formule de Cauchy à chaque $z\mapsto F(z,x)$ — pour écrire $f$ comme une intégrale de Cauchy, puis pour reconnaître $\frac{\partial^kF}{\partial z^k}(z_0,x)$.

**Si on la retire.** $X=[0,1]$, $F(z,x)=\bar z$ : $F$ est continue, $|F(z,x)|\le|z_0|+r_0$ sur $D(z_0,r_0)$ (constante intégrable sur $[0,1]$), mais $f(z)=\bar z$ n'est holomorphe nulle part ([[ch01-exemple-zbar-rez-module]]). (La conclusion resterait vraie si l'holomorphie n'avait lieu que pour presque tout $x$ : on modifie $F$ sur un ensemble négligeable de $x$.)

### H3 — domination **locale** par une fonction intégrable **indépendante de $z$**

**Rôle.** Elle assure (a) que $f(z)$ est bien définie ; (b) que $f$ est continue (convergence dominée), donc bornée sur les cercles ; (c) l'intégrabilité de $(\omega,x)\mapsto F(\omega,x)/(\omega-z)$ et de $(\omega,x)\mapsto F(\omega,x)/(\omega-z_0)^{k+1}$ sur $C(z_0,r)\times X$, qui justifie les deux applications de Fubini.

**Si on la retire.** Prenons $\Omega=\C$, $X=]0,+\infty[$, $F(z,x)=e^{-xz}$ : $F$ est continue et holomorphe en $z$. Mais $|F(z,x)|=e^{-x\Re(z)}\ge1$ si $\Re(z)\le0$, donc $x\mapsto F(z,x)$ n'est pas intégrable et $f(z)$ n'est **pas définie** sur le demi-plan $\{\Re(z)\le0\}$. Sur $\Omega'=\{\Re(z)>0\}$ en revanche, pour $z\in D(z_0,r_0)$ avec $r_0=\Re(z_0)/2$, on a $|F(z,x)|\le e^{-x\Re(z_0)/2}$ intégrable : le théorème s'applique et donne $f(z)=\int_0^{+\infty}e^{-xz}dx=\frac1z$, holomorphe sur $\Omega'$. Noter qu'aucune fonction intégrable ne domine $e^{-xz}$ pour **tous** les $z\in\Omega'$ (il faudrait $g(x)\ge\sup_{\Re z>0}e^{-x\Re z}=1$) : c'est pour cela que la domination n'est demandée que **localement**.

## Idée de la preuve

Sur un petit disque fermé $\bar D(z_0,r)$, on écrit la formule de Cauchy pour chaque $F(\cdot,x)$, on intègre en $x$ et on échange les intégrales (Fubini, grâce à la domination) : $f$ vérifie elle-même la formule de Cauchy, donc elle est développable en série entière (preuve de I.7.4). Même échange avec la formule (I.7.1) pour les dérivées.

## Preuve

**Bonne définition et continuité.** Pour $z_0\in\Omega$, (ii) avec $z=z_0$ donne $|F(z_0,x)|\le g_{z_0}(x)$, donc $x\mapsto F(z_0,x)$ est intégrable et $f(z_0)$ est bien définie. Si $z_n\to z$ dans $D(z_0,r_0)$, alors $F(z_n,x)\to F(z,x)$ pour tout $x$ (une fonction holomorphe est continue) et $|F(z_n,x)|\le g_{z_0}(x)$ : par convergence dominée, $f(z_n)\to f(z)$. Donc $f$ est continue sur $\Omega$.

**Réduction locale.** L'holomorphie étant une propriété locale, il suffit de montrer que $f$ est holomorphe sur un disque centré en chaque $z_0\in\Omega$. Fixons $z_0$, prenons $r_0$ et $g=g_{z_0}$ comme dans (ii), et fixons $0<r<r_0$ ; ainsi $\bar D(z_0,r)\subset D(z_0,r_0)\subset\Omega$, et la domination $|F(\omega,x)|\le g(x)$ vaut pour tout $\omega\in\bar D(z_0,r)$ (le poly dit « quitte à prendre $r_0$ un peu plus petit »).

**$f$ vérifie la formule de Cauchy.** Soit $z\in D(z_0,r)$. Pour tout $x$, $F(\cdot,x)$ est holomorphe sur $\Omega\supset\bar D(z_0,r)$, donc par la formule de Cauchy ([[ch01-cauchy-formule-disque]])
$$
f(z)=\int_X\Big(\frac1{2i\pi}\int_{C(z_0,r)}\frac{F(\omega,x)}{\omega-z}\,d\omega\Big)dx .
$$
Pour $(\omega,x)\in C(z_0,r)\times X$, on a $|\omega-z|\ge r-|z-z_0|>0$, donc
$$
\Big|\frac{F(\omega,x)}{\omega-z}\Big|\le\frac{g(x)}{r-|z-z_0|} .
$$
En paramétrant $\omega=z_0+re^{i\theta}$, $\theta\in[0,2\pi]$, $d\omega=ire^{i\theta}d\theta$ ([[ch01-integrale-sur-cercle]]), la fonction $(\theta,x)\mapsto\frac{F(z_0+re^{i\theta},x)}{z_0+re^{i\theta}-z}\,ire^{i\theta}$ est majorée par $\frac{r\,g(x)}{r-|z-z_0|}$, intégrable sur $[0,2\pi]\times X$. Le théorème de Fubini permet d'échanger :
$$
f(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{\int_XF(\omega,x)\,dx}{\omega-z}\,d\omega=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{\omega-z}\,d\omega .
$$

**$f$ est analytique, donc holomorphe, sur $D(z_0,r)$.** On reprend la démonstration du Théorème I.7.4 ([[ch01-holomorphe-analytique]]), qui n'utilise que cette formule et la continuité de $f$ sur le cercle. Avec $\omega=z_0+re^{i\theta}$ et $|z-z_0|<r$ :
$$
\frac{1}{\omega-z}=\frac{1}{re^{i\theta}}\cdot\frac{1}{1-\frac{z-z_0}{re^{i\theta}}}=\frac1{re^{i\theta}}\sum_{n\ge0}\Big(\frac{z-z_0}{r}\Big)^ne^{-in\theta},
$$
et la série $\sum_n\big(\frac{z-z_0}{r}\big)^nf(z_0+re^{i\theta})e^{-in\theta}$ converge normalement en $\theta$, car son terme général est majoré par $\sup_{C(z_0,r)}|f|\cdot\big(\frac{|z-z_0|}r\big)^n$ ($f$ continue donc bornée sur le compact $C(z_0,r)$). En intégrant terme à terme,
$$
f(z)=\sum_{n\ge0}a_n(z-z_0)^n,\qquad a_nr^n=\frac1{2\pi}\int_0^{2\pi}f(z_0+re^{i\theta})e^{-in\theta}\,d\theta ,
$$
pour tout $z\in D(z_0,r)$. Une série entière est holomorphe sur son disque de convergence ([[ch01-serie-entiere-holomorphe]]), donc $f$ est holomorphe sur $D(z_0,r)$. Ceci pour tout $z_0$ : $f\in\Hol(\Omega)$.

**Dérivées.** Maintenant que $f$ est holomorphe sur $\Omega$ et que $\bar D(z_0,r)\subset\Omega$, la formule (I.7.1) des estimées de Cauchy ([[ch01-estimees-cauchy]]) en $z=z_0$ donne, pour $k\in\N$,
$$
f^{(k)}(z_0)=\frac{k!}{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{(\omega-z_0)^{k+1}}\,d\omega=\frac{k!}{2i\pi}\int_{C(z_0,r)}\frac{\int_XF(\omega,x)\,dx}{(\omega-z_0)^{k+1}}\,d\omega .
$$
La majoration $\Big|\dfrac{F(\omega,x)}{(\omega-z_0)^{k+1}}\Big|\le\dfrac{g(x)}{r^{k+1}}$ sur $C(z_0,r)\times X$ permet d'appliquer Fubini dans l'autre sens, puis (I.7.1) à la fonction holomorphe $z\mapsto F(z,x)$ :
$$
f^{(k)}(z_0)=\int_X\Big(\frac{k!}{2i\pi}\int_{C(z_0,r)}\frac{F(\omega,x)}{(\omega-z_0)^{k+1}}\,d\omega\Big)dx=\int_X\frac{\partial^kF}{\partial z^k}(z_0,x)\,dx .
$$
Au passage, les estimées de Cauchy donnent $\big|\frac{\partial^kF}{\partial z^k}(z_0,x)\big|\le\frac{k!}{r^k}g(x)$, ce qui confirme que la dernière intégrale a un sens. Comme $z_0$ est arbitraire, la formule vaut en tout point de $\Omega$. $\square$

## Preuve à trous

$f$ est bien définie et continue par <trou indice="théorème de Lebesgue">convergence dominée (domination par $g_{z_0}$ sur $D(z_0,r_0)$)</trou>. Fixons $z_0$, $0<r<r_0$ ; pour $z\in D(z_0,r)$, la formule de Cauchy appliquée à chaque $F(\cdot,x)$ donne $f(z)=\int_X\frac1{2i\pi}\int_{C(z_0,r)}\frac{F(\omega,x)}{\omega-z}\,d\omega\,dx$. La majoration <trou indice="minorer $|\omega-z|$ sur le cercle">$\big|\frac{F(\omega,x)}{\omega-z}\big|\le\frac{g_{z_0}(x)}{r-|z-z_0|}$</trou> rend la fonction intégrable sur $C(z_0,r)\times X$, et Fubini donne
<trou indice="que devient l'intégrale après échange ?">$f(z)=\frac1{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{\omega-z}\,d\omega$ : $f$ vérifie la formule de Cauchy</trou>.
En développant $\frac1{\omega-z}$ en série géométrique (convergence normale car $f$ est bornée sur le cercle), on obtient comme dans la preuve de I.7.4 que $f$ est développable en série entière sur $D(z_0,r)$, donc holomorphe. Enfin, par (I.7.1), $f^{(k)}(z_0)=\frac{k!}{2i\pi}\int_{C(z_0,r)}\frac{f(\omega)}{(\omega-z_0)^{k+1}}d\omega$, et grâce à <trou>la majoration $\big|\frac{F(\omega,x)}{(\omega-z_0)^{k+1}}\big|\le\frac{g_{z_0}(x)}{r^{k+1}}$, Fubini dans l'autre sens puis (I.7.1) pour $F(\cdot,x)$</trou>, on trouve $f^{(k)}(z_0)=\int_X\frac{\partial^kF}{\partial z^k}(z_0,x)\,dx$. $\square$

## Exemples

* **Transformée de Laplace de $\mathbf 1_{\R_+}$.** $f(z)=\int_0^{+\infty}e^{-xz}dx$ sur $\{\Re(z)>0\}$ : domination locale par $e^{-x\Re(z_0)/2}$ sur $D(z_0,\Re(z_0)/2)$ (car $\Re(z)\ge\Re(z_0)/2$ sur ce disque). Donc $f$ est holomorphe et $f'(z)=\int_0^{+\infty}(-x)e^{-xz}dx$. Contrôle : $f(z)=\frac1z$ (vrai pour $z$ réel $>0$ par calcul direct, puis partout sur le demi-plan, par exemple en calculant $\int_0^A e^{-xz}dx=\frac{1-e^{-Az}}{z}\to\frac1z$), et $f'(z)=-\frac1{z^2}$ ; pour $z=1$ : $-\int_0^\infty xe^{-x}dx=-1$ ✓.
* **La fonction $\Gamma$ d'Euler.** $\Gamma(z)=\int_0^{+\infty}t^{z-1}e^{-t}dt$ est holomorphe sur $\{\Re(z)>0\}$, avec domination sur des bandes $\alpha\le\Re(z)\le\beta$ : voir [[ch01-fonction-gamma]].
* **Transformée de Fourier d'une fonction à support compact.** Si $\varphi$ est mesurable bornée nulle hors de $[-A,A]$, $\hat\varphi(z)=\int_{\R}e^{-izt}\varphi(t)\,dt$ est entière : pour $|z-z_0|<1$, $|e^{-izt}\varphi(t)|=e^{t\Im(z)}|\varphi(t)|\le e^{A(|\Im z_0|+1)}\norm{\varphi}_\infty\mathbf 1_{[-A,A]}(t)$, intégrable (cf. Exercice I.9.5 du poly).

## Pièges

* > ⚠️ La dominante $g_{z_0}$ doit être **la même pour tous les $z$ du disque** $D(z_0,r_0)$ : une majoration $|F(z,x)|\le g_z(x)$ avec $g_z$ dépendant de $z$ ne suffit pas.
* Inversement, inutile (et souvent impossible) de dominer sur **tout** $\Omega$ : c'est le cas de $\Gamma$ sur $\{\Re z>0\}$ ou de $e^{-xz}$. On domine sur des disques, des bandes ou des compacts.
* Ne pas chercher à dominer $\partial F/\partial z$ comme dans le théorème réel de dérivation sous $\int$ : ici c'est inutile, mais il faut **vérifier l'holomorphie** de $F(\cdot,x)$ pour chaque $x$.
* Dans la rédaction, vérifier les trois points dans l'ordre : mesurabilité, holomorphie en $z$ à $x$ fixé, domination locale (en précisant le disque et la dominante).
