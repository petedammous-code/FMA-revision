---
id: ch02-weierstrass-p-fonction
type: proposition
chapter: 2
title: Fonctions elliptiques — la fonction ℘ de Weierstrass
ref: Exercice II.7.10
page: 52
importance: 2
depends: [ch01-liouville, ch02-pole-meromorphe-def, ch02-laurent-developpement, ch03-weierstrass-series, ch02-singularite-effacable-riemann, ch02-meromorphes-operations]
tags: [weierstrass, fonction elliptique, reseau, periodique, meromorphe, laurent, liouville]
---
## Intuition

> 💡 Peut-on fabriquer une fonction méromorphe **doublement périodique**, c'est-à-dire invariante par deux translations indépendantes ($z\mapsto z+\omega_1$ et $z\mapsto z+\omega_2$) ? Holomorphe et non constante, c'est impossible (elle serait bornée, donc constante par Liouville). Il faut donc des pôles. L'idée de Weierstrass : placer un pôle double $\frac{1}{(z+\lambda)^2}$ en chaque point du réseau et **sommer** — en corrigeant chaque terme par $-\frac1{\lambda^2}$ pour que la série converge.

Image mentale : le plan est pavé par des parallélogrammes identiques ; $\wp$ (lire « p de Weierstrass ») est la même dans chaque pavé, avec un pôle double à chaque sommet. C'est l'exemple fondamental de fonction méromorphe non rationnelle, et elle satisfait une équation différentielle algébrique remarquable : $\wp'^2$ est un polynôme de degré $3$ en $\wp$.

Vocabulaire. Un **réseau** est $\Lambda=\Z\omega_1\oplus\Z\omega_2=\{m\omega_1+n\omega_2 \mid m,n\in\Z\}$ avec $\omega_1,\omega_2$ linéairement indépendants sur $\R$. Une fonction $f$ est **$\Lambda$-périodique** si $f(z+\lambda)=f(z)$ pour tout $\lambda\in\Lambda$ (une fonction méromorphe $\Lambda$-périodique s'appelle une **fonction elliptique**). **Méromorphe**, **pôle**, **multiplicité** : voir [[ch02-pole-meromorphe-def]] ; développement de Laurent : [[ch02-laurent-developpement]].

## Énoncé

**Proposition (poly, Exercice II.7.10, p. 52) — La fonction $\wp$ de Weierstrass.** Soit $\Lambda\subset\C$ un réseau, i.e. un sous-groupe discret de la forme $\Z\omega_1\oplus\Z\omega_2$ où $\omega_1$ et $\omega_2$ sont linéairement indépendants sur $\R$. On admet que, pour tout entier $k\ge3$, la série $\displaystyle\sum_{\lambda\in\Lambda\setminus\{0\}}\frac{1}{|\lambda|^k}$ est convergente.

1. Soit $f$ une fonction holomorphe sur $\C$ qui est $\Lambda$-périodique, i.e. $f(z+\lambda)=f(z)$ pour tout $\lambda\in\Lambda$. Alors $f$ est constante.
2. La série
$$
\wp(z)=\frac1{z^2}+\sum_{\lambda\in\Lambda\setminus\{0\}}\Big(\frac1{(z+\lambda)^2}-\frac1{\lambda^2}\Big)
$$
définit une fonction méromorphe sur $\C$, $\Lambda$-périodique et paire. Ses pôles sont exactement les points de $\Lambda$ ; ce sont des pôles doubles, de partie principale $\frac1{(z-\lambda)^2}$ (donc de résidu nul). De plus $\wp'(z)=-2\sum_{\lambda\in\Lambda}\frac{1}{(z+\lambda)^3}$.
3. Pour tout entier $k\ge3$, on pose $E_k(\Lambda)=\sum_{\lambda\in\Lambda\setminus\{0\}}\lambda^{-k}$. Pour $|z|<|\lambda|$,
$$
\frac1{(z+\lambda)^2}-\frac1{\lambda^2}=\sum_{k=1}^{\infty}(k+1)\lambda^{-k-2}(-1)^kz^k ,
$$
et l'on en déduit le développement de Laurent de $\wp$ au voisinage de $0$ : en notant $r=\min\{|\lambda| \mid \lambda\in\Lambda\setminus\{0\}\}$, pour $0<|z|<r$,
$$
\wp(z)=\frac1{z^2}+\sum_{k\ge1}(-1)^k(k+1)E_{k+2}(\Lambda)\,z^k=\frac1{z^2}+\sum_{n\ge1}(2n+1)E_{2n+2}(\Lambda)\,z^{2n},
$$
car les $E_k(\Lambda)$ avec $k$ impair sont nuls. Ainsi $\wp(z)=\frac1{z^2}+3E_4(\Lambda)z^2+5E_6(\Lambda)z^4+\cdots$
4. $\wp'(z)^2=4\wp(z)^3-60E_4(\Lambda)\wp(z)-140E_6(\Lambda)$.

## Hypothèses

### H1 — $\Lambda$ est un réseau ($\omega_1,\omega_2$ indépendants sur $\R$)

**Rôle.** (a) $(\omega_1,\omega_2)$ est une base de $\C$ vu comme $\R$-espace vectoriel : tout $z$ s'écrit $z=x\omega_1+y\omega_2$ avec $x,y$ réels, ce qui permet de ramener tout point dans le parallélogramme compact $P=\{s\omega_1+t\omega_2 \mid s,t\in[0,1]\}$ (question 1). (b) C'est ce qui rend $\Lambda$ discret et donne la convergence des séries $\sum|\lambda|^{-k}$, $k\ge3$ (voir H2). (c) Les coordonnées dans cette base sont uniques, ce qui garantit $\omega/2\notin\Lambda$ pour $\omega\in\{\omega_1,\omega_2\}$ (preuve de la périodicité).

**Si on la retire.** Avec une seule période, $\Lambda=\Z$ (« réseau de rang 1 ») : $f(z)=e^{2i\pi z}$ est entière, $\Z$-périodique et non constante, donc 1. tombe. La raison : la bande $\{0\le\Re(z)\le1\}$ n'est pas compacte, et $|e^{2i\pi z}|=e^{-2\pi\Im(z)}$ n'est pas bornée sur elle. (Pour $\Lambda=\Z$, l'analogue de $\wp$ est $\sum_{n\in\Z}\frac1{(z-n)^2}=\frac{\pi^2}{\sin^2(\pi z)}$, sans terme correcteur : voir [[ch03-euler-sinus-carre]].)

### H2 — Convergence de $\sum_{\lambda\ne0}|\lambda|^{-k}$ pour $k\ge3$ (admise)

**Rôle.** C'est l'ingrédient de convergence normale : le terme général de $\wp$ est majoré par $10R|\lambda|^{-3}$ sur $\bar D(0,R)$ dès que $|\lambda|\ge2R$. Elle sert aussi à définir les $E_k(\Lambda)$ et à intervertir les sommes en 3.

**Ce n'est pas une vraie hypothèse** : c'est une conséquence de H1. En effet $N(m,n)=|m\omega_1+n\omega_2|$ est une norme sur $\R^2$ (elle est nulle seulement si $m=n=0$ par indépendance), donc équivalente à $\max(|m|,|n|)$ : il existe $c,C>0$ avec $c\max(|m|,|n|)\le|m\omega_1+n\omega_2|\le C\max(|m|,|n|)$ (on peut prendre $C=|\omega_1|+|\omega_2|$). Le nombre de couples $(m,n)\in\Z^2$ avec $\max(|m|,|n|)=N\ge1$ est $(2N+1)^2-(2N-1)^2=8N$. D'où
$$
\sum_{\lambda\ne0}\frac1{|\lambda|^k}\le\sum_{N\ge1}\frac{8N}{c^kN^k}=\frac{8}{c^k}\sum_{N\ge1}\frac1{N^{k-1}}<\infty\quad(k\ge3).
$$

**Si on la retire (cas $k=2$).** La même minoration donne $\sum_{\lambda\ne0}|\lambda|^{-2}\ge\sum_{N\ge1}\frac{8N}{C^2N^2}=+\infty$ : sur un réseau plan, $\sum|\lambda|^{-2}$ **diverge**. C'est pourquoi la série naïve $\sum_\lambda\frac1{(z+\lambda)^2}$ n'est pas absolument convergente (son terme général est équivalent à $\lambda^{-2}$) et pourquoi on ajoute le terme correcteur $-\frac1{\lambda^2}$, qui ramène le terme général à $O(|\lambda|^{-3})$. C'est aussi pourquoi $E_2(\Lambda)$ n'est pas défini.

### H3 — (pour 1.) $f$ holomorphe sur $\C$ tout entier

**Rôle.** Holomorphe donc continue sur $\C$ : $f$ est bornée sur le compact $P$, donc sur $\C$ par périodicité, et Liouville s'applique.

**Si on la retire.** $\wp$ elle-même est $\Lambda$-périodique, méromorphe, non constante : un seul pôle par maille suffit à tout casser. Sans holomorphie du tout, pour $\Lambda=\Z\oplus\Z i$, la fonction $z\mapsto\cos(2\pi\Re(z))$ est continue, $\Lambda$-périodique, non constante.

## Idée de la preuve

1. Périodique et continue $\Rightarrow$ bornée (tout se ramène au parallélogramme compact) $\Rightarrow$ constante par Liouville. 2. Le terme général est $O(|\lambda|^{-3})$ uniformément sur les disques : convergence normale (Weierstrass), pôles doubles aux $\lambda$ ; $\wp'$ est visiblement périodique, donc $\wp(z+\omega)-\wp(z)$ est constant, nul par parité. 3.–4. Développements en série entière ; la différence des deux membres de 4. est elliptique, sans pôle et nulle en $0$.

## Preuve

Le poly laisse la preuve en exercice ; en voici une rédaction complète.

**1.** Soit $z\in\C$. Comme $(\omega_1,\omega_2)$ est une $\R$-base de $\C$, $z=x\omega_1+y\omega_2$ avec $x,y\in\R$. Posons $\lambda=\lfloor x\rfloor\omega_1+\lfloor y\rfloor\omega_2\in\Lambda$ : alors $z-\lambda=(x-\lfloor x\rfloor)\omega_1+(y-\lfloor y\rfloor)\omega_2\in P$, où $P=\{s\omega_1+t\omega_2 \mid s,t\in[0,1]\}$. Par périodicité $f(z)=f(z-\lambda)$, donc $f(\C)=f(P)$. Or $P$ est compact (image de $[0,1]^2$ par une application continue) et $f$ est continue : $f$ est bornée sur $P$, donc sur $\C$. Par le théorème de Liouville ([[ch01-liouville]]), $f$ est constante.

**2. (a) Estimation clé.** Soit $R>0$, $|z|\le R$ et $\lambda\in\Lambda$ avec $|\lambda|\ge2R$. Alors $|z+\lambda|\ge|\lambda|-|z|\ge|\lambda|/2$, $|2\lambda+z|\le\frac52|\lambda|$, et
$$
\Big|\frac1{(z+\lambda)^2}-\frac1{\lambda^2}\Big|=\frac{|\lambda^2-(z+\lambda)^2|}{|\lambda|^2|z+\lambda|^2}=\frac{|z|\,|2\lambda+z|}{|\lambda|^2|z+\lambda|^2}\le\frac{R\cdot\frac52|\lambda|}{|\lambda|^2\cdot\frac14|\lambda|^2}=\frac{10R}{|\lambda|^3}.
$$

**(b) Finitude locale.** Pour $\rho>0$, l'ensemble $S_\rho=\{\lambda\in\Lambda\setminus\{0\} \mid |\lambda|<\rho\}$ est fini : chacun de ses éléments contribue plus de $\rho^{-3}$ à la série convergente $\sum|\lambda|^{-3}$, donc $\operatorname{card}S_\rho\le\rho^3\sum_{\lambda\ne0}|\lambda|^{-3}$. En particulier $\Lambda$ est localement fini, et $r=\min_{\lambda\ne0}|\lambda|>0$ existe.

**(c) Méromorphie et pôles.** Fixons $R>0$. Sur $D(0,R)$, écrivons $\wp=A_R+B_R$ avec
$$
A_R(z)=\frac1{z^2}+\sum_{\lambda\in S_{2R}}\Big(\frac1{(z+\lambda)^2}-\frac1{\lambda^2}\Big),\qquad B_R(z)=\sum_{|\lambda|\ge2R}\Big(\frac1{(z+\lambda)^2}-\frac1{\lambda^2}\Big).
$$
Chaque terme de $B_R$ est holomorphe sur $D(0,2R)$ (son pôle $-\lambda$ vérifie $|-\lambda|\ge2R$) et, par (a), majoré par $10R|\lambda|^{-3}$ sur $D(0,R)$ ; comme $\sum|\lambda|^{-3}<\infty$, la série $B_R$ converge normalement sur $D(0,R)$. Par le théorème de Weierstrass pour les séries ([[ch03-weierstrass-series]]), $B_R\in\Hol(D(0,R))$ et se dérive terme à terme. $A_R$ est une somme **finie** de fractions rationnelles, de pôles $0$ et les $-\lambda$, $\lambda\in S_{2R}$ ; comme $\Lambda=-\Lambda$, ces pôles sont dans $\Lambda$.

Soit $\mu\in\Lambda\cap D(0,R)$. Dans $\wp$, un seul terme est singulier en $\mu$ : $\frac1{z^2}$ si $\mu=0$, et $\frac1{(z-\mu)^2}-\frac1{\mu^2}$ (terme d'indice $\lambda=-\mu$, qui est dans $S_{2R}$ car $|\mu|<R$) sinon ; tous les autres termes sont holomorphes près de $\mu$. Donc, près de $\mu$,
$$
\wp(z)=\frac1{(z-\mu)^2}+h_\mu(z)=(z-\mu)^{-2}\big(1+(z-\mu)^2h_\mu(z)\big),\qquad h_\mu\text{ holomorphe en }\mu .
$$
La fonction $1+(z-\mu)^2h_\mu(z)$ est holomorphe en $\mu$ et vaut $1\neq0$ en $\mu$ : $\mu$ est un pôle de multiplicité $2$ ([[ch02-pole-meromorphe-def]]), de développement de Laurent $\frac1{(z-\mu)^2}+0\cdot\frac1{z-\mu}+\cdots$ ([[ch02-laurent-developpement]]), donc de résidu nul. Comme $R$ est arbitraire, $\wp$ est holomorphe sur $\C\setminus\Lambda$, $\Lambda$ est localement fini, et tout point de $\Lambda$ est un pôle double : $\wp\in\mathcal M(\C)$ et $\mathcal P(\wp,\C)=\Lambda$.

Remarque importante : par (a), pour $z\notin\Lambda$ fixé, la série est **absolument** convergente ; sa somme ne dépend donc pas de l'ordre de sommation et l'on peut la réindexer par n'importe quelle bijection de $\Lambda\setminus\{0\}$.

**(d) Dérivée.** En dérivant terme à terme ($A_R$ est une somme finie, $B_R$ relève de Weierstrass), pour $z\notin\Lambda$ :
$$
\wp'(z)=-\frac2{z^3}-\sum_{\lambda\ne0}\frac2{(z+\lambda)^3}=-2\sum_{\lambda\in\Lambda}\frac1{(z+\lambda)^3},
$$
série absolument convergente (pour $|\lambda|\ge2|z|$, $|z+\lambda|^{-3}\le8|\lambda|^{-3}$).

**(e) Parité.** Pour $z\notin\Lambda$, en réindexant par la bijection $\lambda\mapsto-\lambda$ de $\Lambda\setminus\{0\}$ :
$$
\wp(-z)=\frac1{z^2}+\sum_{\lambda\ne0}\Big(\frac1{(z-\lambda)^2}-\frac1{\lambda^2}\Big)=\frac1{z^2}+\sum_{\lambda\ne0}\Big(\frac1{(z+\lambda)^2}-\frac1{(-\lambda)^2}\Big)=\wp(z).
$$

**(f) Périodicité.** Soit $\omega\in\Lambda$. Comme $\lambda\mapsto\lambda+\omega$ est une bijection de $\Lambda$ et que la série de (d) est absolument convergente, $\wp'(z+\omega)=-2\sum_{\lambda\in\Lambda}\frac1{(z+\omega+\lambda)^3}=\wp'(z)$. Donc la fonction $g_\omega(z)=\wp(z+\omega)-\wp(z)$, holomorphe sur $\C\setminus\Lambda$, a une dérivée nulle. L'ouvert $\C\setminus\Lambda$ est connexe : deux points $a\neq b$ y sont reliés par les lignes brisées $[a,c]\vee[c,b]$, $c$ décrivant la médiatrice de $[a,b]$ ; ces lignes sont deux à deux disjointes hors de $\{a,b\}$, il y en a une infinité non dénombrable, et l'ensemble dénombrable $\Lambda$ n'en rencontre qu'une quantité dénombrable. Donc $g_\omega$ est constante, égale à $c_\omega$. Prenons $\omega\in\{\omega_1,\omega_2\}$ et $z=-\omega/2$, qui n'est pas dans $\Lambda$ (ses coordonnées dans la base $(\omega_1,\omega_2)$ sont $-\frac12$ et $0$, ou $0$ et $-\frac12$) ; de même $\omega/2\notin\Lambda$. Par parité,
$$
c_\omega=\wp(\omega/2)-\wp(-\omega/2)=0 .
$$
Ainsi $\wp(z+\omega_1)=\wp(z)=\wp(z+\omega_2)$ sur $\C\setminus\Lambda$ ; en itérant (et en appliquant l'égalité à $z-\omega_j$ pour les translations négatives), $\wp(z+\lambda)=\wp(z)$ pour tout $\lambda\in\Lambda$.

**3.** Pour $|z|<|\lambda|$, la série géométrique dérivée donne $\frac1{(1+u)^2}=\sum_{k\ge0}(k+1)(-u)^k$ pour $|u|<1$, d'où avec $u=z/\lambda$ :
$$
\frac1{(z+\lambda)^2}=\frac1{\lambda^2}\cdot\frac1{(1+z/\lambda)^2}=\sum_{k\ge0}(k+1)(-1)^k\lambda^{-k-2}z^k ,
$$
et en retranchant le terme $k=0$, qui vaut $\lambda^{-2}$, on obtient la formule de l'énoncé. Pour $0<|z|<r$, on a $|z|<|\lambda|$ pour tout $\lambda\ne0$ ; posons $\rho=|z|/r<1$. La série double est absolument convergente :
$$
\sum_{\lambda\ne0}\sum_{k\ge1}(k+1)|\lambda|^{-k-2}|z|^k=\sum_{\lambda\ne0}\frac1{|\lambda|^2}\Big(\frac1{(1-t_\lambda)^2}-1\Big),\quad t_\lambda=\frac{|z|}{|\lambda|}\le\rho,
$$
et $\frac1{(1-t)^2}-1=\frac{t(2-t)}{(1-t)^2}\le\frac{2t}{(1-\rho)^2}$ pour $0\le t\le\rho$, d'où un majorant $\frac{2|z|}{(1-\rho)^2}\sum_{\lambda\ne0}|\lambda|^{-3}<\infty$. On peut donc intervertir les sommations (Fubini pour les séries absolument convergentes) :
$$
\wp(z)-\frac1{z^2}=\sum_{k\ge1}(-1)^k(k+1)\Big(\sum_{\lambda\ne0}\lambda^{-k-2}\Big)z^k=\sum_{k\ge1}(-1)^k(k+1)E_{k+2}(\Lambda)z^k .
$$
Enfin, pour $k$ impair, la réindexation $\lambda\mapsto-\lambda$ (licite, la série $E_k$ étant absolument convergente) donne $E_k(\Lambda)=\sum(-\lambda)^{-k}=(-1)^kE_k(\Lambda)=-E_k(\Lambda)$, donc $E_k(\Lambda)=0$. Il ne reste que les $k=2n$ pairs, avec $(-1)^{2n}(2n+1)E_{2n+2}(\Lambda)$ : c'est le développement annoncé (et, par unicité, c'est le développement de Laurent de $\wp$ en $0$).

**4.** Notons $E_4=E_4(\Lambda)$, $E_6=E_6(\Lambda)$. Par 3., pour $0<|z|<r$, avec $O(z^m)$ désignant $z^m$ fois une fonction holomorphe près de $0$ :
$$
\wp(z)=z^{-2}+3E_4z^2+5E_6z^4+O(z^6),\qquad \wp'(z)=-2z^{-3}+6E_4z+20E_6z^3+O(z^5).
$$
On calcule :
$$
\begin{aligned}
\wp'(z)^2&=4z^{-6}-24E_4z^{-2}-80E_6+O(z^2),\\
\wp(z)^3&=z^{-6}\big(1+3E_4z^4+5E_6z^6+O(z^8)\big)^3=z^{-6}+9E_4z^{-2}+15E_6+O(z^2),\\
4\wp(z)^3-60E_4\wp(z)-140E_6&=4z^{-6}+36E_4z^{-2}+60E_6-60E_4z^{-2}-140E_6+O(z^2)\\
&=4z^{-6}-24E_4z^{-2}-80E_6+O(z^2).
\end{aligned}
$$
Soit $g=\wp'^2-4\wp^3+60E_4\wp+140E_6$. C'est une fonction méromorphe sur $\C$ ([[ch02-meromorphes-operations]]), holomorphe sur $\C\setminus\Lambda$ et $\Lambda$-périodique (car $\wp$ et $\wp'$ le sont). Par le calcul ci-dessus, $g(z)=O(z^2)$ près de $0$ : $g$ est bornée au voisinage de $0$, donc se prolonge holomorphiquement en $0$ ([[ch02-singularite-effacable-riemann]]), avec la valeur $\lim_{z\to0}g(z)=0$. Pour $\lambda\in\Lambda$, $g(z)=g(z-\lambda)$ pour $z$ proche de $\lambda$ ($z\notin\Lambda$), donc $g$ est aussi bornée près de $\lambda$ et se prolonge holomorphiquement en $\lambda$. Le prolongement $G$ est entier et $\Lambda$-périodique (l'égalité $G(z+\lambda)=G(z)$, vraie sur $\C\setminus\Lambda$, passe à la limite aux points de $\Lambda$ par continuité). Par 1., $G$ est constante, égale à $G(0)=0$. Donc $\wp'^2=4\wp^3-60E_4\wp-140E_6$ sur $\C\setminus\Lambda$. $\square$

## Preuve à trous

**1.** Tout $z\in\C$ s'écrit $z=\lambda+p$ avec $\lambda\in\Lambda$ et <trou indice="utiliser la base (ω₁, ω₂) de C sur R et les parties entières">$p$ dans le parallélogramme compact $P=\{s\omega_1+t\omega_2 \mid s,t\in[0,1]\}$</trou>, donc $f(\C)=f(P)$ est borné, et Liouville conclut.

**2.** Pour $|z|\le R$ et $|\lambda|\ge2R$, on a $\Big|\frac1{(z+\lambda)^2}-\frac1{\lambda^2}\Big|=\frac{|z|\,|2\lambda+z|}{|\lambda|^2|z+\lambda|^2}\le$ <trou indice="minorer |z+λ| par |λ|/2 et majorer |2λ+z| par 5|λ|/2">$\dfrac{10R}{|\lambda|^3}$</trou>,
ce qui, avec $\sum|\lambda|^{-3}<\infty$ et la finitude de $\{|\lambda|<2R\}$, donne la convergence normale sur $D(0,R)$ du reste et la méromorphie de $\wp$, avec un pôle double $\frac1{(z-\mu)^2}$ en chaque $\mu\in\Lambda$. La parité s'obtient en réindexant par $\lambda\mapsto-\lambda$. Pour la périodicité, $\wp'(z)=-2\sum_{\lambda\in\Lambda}(z+\lambda)^{-3}$ est périodique (réindexation $\lambda\mapsto\lambda+\omega$), donc $\wp(z+\omega)-\wp(z)=c_\omega$ sur le connexe $\C\setminus\Lambda$, et <trou indice="évaluer en un point bien choisi et utiliser la parité">en $z=-\omega/2\notin\Lambda$ : $c_\omega=\wp(\omega/2)-\wp(-\omega/2)=0$</trou>.

**3.** Développer $\frac1{(1+z/\lambda)^2}$, intervertir (convergence absolue de la série double pour $|z|<r$), et noter $E_k=-E_k$ pour $k$ impair.

**4.** Avec $\wp=z^{-2}+3E_4z^2+5E_6z^4+O(z^6)$, on obtient $\wp'^2-4\wp^3+60E_4\wp=$ <trou indice="développer jusqu'au terme constant">$-140E_6+O(z^2)$</trou>. La fonction $g=\wp'^2-4\wp^3+60E_4\wp+140E_6$ est elliptique, bornée près de $0$ donc (par périodicité) près de chaque point de $\Lambda$ : <trou indice="singularités effaçables, puis question 1">elle se prolonge en une fonction entière $\Lambda$-périodique, donc constante, égale à sa valeur $0$ en $0$</trou>. $\square$

## Exemples

* **Premiers coefficients.** $\wp(z)=\dfrac1{z^2}+3E_4z^2+5E_6z^4+7E_8z^6+\cdots$ pour $0<|z|<r$. En comparant les coefficients de $z^4$ dans l'équation dérivée $\wp''=6\wp^2-30E_4$ (obtenue en dérivant 4. et en divisant par $2\wp'$), on trouverait $E_8=\frac37E_4^2$ : tous les $E_{2n}$ sont des polynômes en $E_4$ et $E_6$. (Notation classique, hors poly : $g_2=60E_4$, $g_3=140E_6$, et 4. s'écrit $\wp'^2=4\wp^3-g_2\wp-g_3$.)
* **Réseau carré $\Lambda=\Z\oplus\Z i$.** On a $i\Lambda=\Lambda$, donc (réindexation $\lambda\mapsto i\lambda$) $E_k(\Lambda)=\sum(i\lambda)^{-k}=i^{-k}E_k(\Lambda)$ ; pour $k=6$, $i^{-6}=-1$, donc $E_6(\Lambda)=0$ et $\wp'^2=4\wp^3-60E_4\wp$. De même $(iz+\lambda)^2=-(z-i\lambda)^2$ et la réindexation $\mu=-i\lambda$ donnent $\wp(iz)=-\wp(z)$. Avec $z_0=\frac{1+i}2$ : $iz_0=\frac{i-1}2=z_0-1$, donc $\wp(iz_0)=\wp(z_0)$ par périodicité, d'où $\wp(z_0)=-\wp(z_0)$, soit $\wp\big(\frac{1+i}2\big)=0$.
* **Demi-périodes.** $\wp'$ est impaire et $\Lambda$-périodique, donc pour $\omega\in\Lambda$ avec $\omega/2\notin\Lambda$ : $\wp'(\omega/2)=\wp'(\omega/2-\omega)=\wp'(-\omega/2)=-\wp'(\omega/2)$, d'où $\wp'(\omega/2)=0$. Avec 4., les trois valeurs $\wp(\omega_1/2)$, $\wp(\omega_2/2)$, $\wp\big((\omega_1+\omega_2)/2\big)$ sont racines de $4X^3-60E_4X-140E_6$. (Vérification sur le réseau carré : $X=0$ est bien racine de $4X^3-60E_4X$.)

## Pièges

* > ⚠️ Le terme correcteur $-\frac1{\lambda^2}$ est indispensable : $\sum|\lambda|^{-2}$ diverge sur un réseau plan, donc $\sum\frac1{(z+\lambda)^2}$ n'est pas absolument convergente.
* > ⚠️ On ne peut pas lire la périodicité de $\wp$ directement sur la série : la réindexation $\lambda\mapsto\lambda+\omega$ décale les termes correcteurs, et l'on ne peut pas séparer $\sum\frac1{(z+\lambda)^2}$ de $\sum\frac1{\lambda^2}$ (non convergentes séparément). D'où le passage par $\wp'$, dont la série converge absolument sans correction.
* Après « $\wp'$ périodique », il reste une **constante** $c_\omega$ à tuer : c'est la parité, évaluée en $-\omega/2$ (qui n'est pas un pôle), qui le fait.
* Les pôles de $\wp$ sont **doubles** et de **résidu nul** : ne pas les croire simples. Plus généralement (classique, hors poly), la somme des résidus d'une fonction elliptique dans un parallélogramme de périodes (dont le bord évite les pôles) est nulle — les intégrales sur les côtés opposés se compensent par périodicité — donc une fonction elliptique non constante ne peut pas avoir un unique pôle simple par maille.
* Le développement de 3. n'est valable que sur la couronne $0<|z|<r$, $r$ = plus petite norme d'un élément non nul du réseau (il y a un autre pôle sur le cercle $|z|=r$).
* $E_k(\Lambda)$ n'est défini que pour $k\ge3$, et il est nul pour $k$ impair : les coefficients non nuls sont $E_4,E_6,E_8,\dots$
* 1. exige l'holomorphie sur **tout** $\C$ : $\wp$ est périodique et non constante, mais seulement méromorphe.
