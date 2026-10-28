---
id: ch01-cauchy-formule-disque
type: theorem
chapter: 1
title: Formule intégrale de Cauchy sur un disque
ref: Théorème I.6.1
page: 18
importance: 3
depends: [ch01-integrale-sur-cercle, ch01-stabilite-operations, ch01-derivee-f-rond-gamma, ch01-def-integrale-chemin, ch01-def-holomorphe]
tags: [cauchy, formule-integrale, disque, cercle, homotopie]
---
## Intuition

> 💡 Une fonction holomorphe est entièrement déterminée, à l'intérieur d'un disque, par ses valeurs **sur le cercle qui le borde** : connaître $f$ sur le bord, c'est la connaître dedans. C'est le contraire du monde réel, où une fonction $C^1$ peut faire n'importe quoi à l'intérieur d'un intervalle quand on fixe ses valeurs aux extrémités.

La formule dit que $f(z)$ est une **moyenne pondérée** des valeurs $f(\omega)$, $\omega$ parcourant le cercle, avec le poids $\frac{1}{2i\pi}\frac{d\omega}{\omega-z}$. Image mentale de la preuve : on « rétrécit » le cercle continûment jusqu'au point $z$ ; pour une fonction holomorphe, l'intégrale de $\frac{f(\omega)-f(z)}{\omega-z}$ ne change pas pendant la déformation, et elle vaut $0$ quand le cercle est réduit à un point.

Notations : $D(z_0,r)$ et $\bar D(z_0,r)$ sont les disques ouvert et fermé, $C(z_0,r)$ le cercle ; $\Hol(\Omega)$ est l'ensemble des fonctions holomorphes sur l'ouvert $\Omega$ ([[ch01-def-holomorphe]]) ; $\int_\Gamma g(\omega)\,d\omega$ est l'intégrale le long du cercle paramétré par $\theta\mapsto z_0+re^{i\theta}$, $\theta\in[0,2\pi]$ ([[ch01-def-integrale-chemin]], [[ch01-integrale-sur-cercle]]).

## Énoncé

**Théorème (poly, Théorème I.6.1, p. 18) — Cauchy (1825–1831).** Soit $\Omega$ un ouvert de $\C$, $z_0\in\Omega$ et $r>0$. On suppose que $\bar D(z_0,r)\subset\Omega$ et l'on note $\Gamma:=C(z_0,r)$ le bord de ce disque (que l'on suppose orienté positivement, i.e. parcouru dans le sens trigonométrique). Soit $f\in\Hol(\Omega)$. Alors,
$$
f(z)=\frac{1}{2i\pi}\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega,
$$
pour tout $z\in D(z_0,r)$.

## Hypothèses

### H1 — $f$ holomorphe sur $\Omega$

**Rôle.** Elle sert dans l'étape 2 : l'identité $\frac{\partial F}{\partial t}=\frac{\partial G}{\partial\theta}$ repose sur la dérivation $\frac{d}{dt}f(c(t))=f'(c(t))\,c'(t)$ ([[ch01-derivee-f-rond-gamma]]), qui n'est vraie que si $f$ est $\C$-dérivable. La continuité de $f'$ (incluse dans la définition de $\Hol(\Omega)$) sert à dériver sous le signe somme.

**Si on la retire.** Prenons $f(\omega)=\bar\omega$ ($C^1$ au sens réel mais non holomorphe), $z_0=0$, $r=1$, $z\in D(0,1)$, $z\neq0$. Sur $C(0,1)$, $\bar\omega=1/\omega$ et $\dfrac{1}{\omega(\omega-z)}=\dfrac1z\Bigl(\dfrac{1}{\omega-z}-\dfrac1\omega\Bigr)$, donc, avec l'étape 1 ci-dessous (appliquée à $z$ et à $0$) :
$$
\frac{1}{2i\pi}\int_{C(0,1)}\frac{\bar\omega}{\omega-z}\,d\omega=\frac{1}{z}\cdot\frac{1}{2i\pi}\bigl(2i\pi-2i\pi\bigr)=0\neq\bar z.
$$
*Hypothèse de confort :* la continuité de $f'$ peut être retirée, la conclusion reste vraie (théorème de Goursat, [[ch01-goursat]]), mais la preuve change (découpage en triangles au lieu de la dérivation sous l'intégrale).

### H2 — le disque **fermé** $\bar D(z_0,r)$ est inclus dans $\Omega$

**Rôle.** Les cercles intermédiaires $\Gamma_t=C(tz,1-t)$ de la déformation sont contenus dans $\bar D(z_0,r)$ (après normalisation, dans $\bar D(0,1)$) : $f$ doit y être holomorphe. Il faut aussi que $f$ soit définie et continue sur $\Gamma$ pour que l'intégrale ait un sens.

**Si on la retire.** $\Omega=\C^\times$, $f(\omega)=1/\omega\in\Hol(\Omega)$, $z_0=0$, $r=1$ : ici $\Gamma\subset\Omega$ mais $\bar D(0,1)\not\subset\Omega$. Pour $z\in D(0,1)$, $z\neq0$, le même calcul que ci-dessus donne $\frac{1}{2i\pi}\int_{C(0,1)}\frac{d\omega}{\omega(\omega-z)}=0\neq\frac1z$.

### H3 — $\Gamma$ est parcouru dans le sens trigonométrique

**Rôle.** L'étape 1 calcule $\int_\Gamma\frac{d\omega}{\omega-z}=2i\pi$ avec le paramétrage $\omega=z_0+re^{i\theta}$, $\theta\in[0,2\pi]$.

**Si on la retire.** Pour le cercle parcouru dans le sens horaire (chemin opposé), l'intégrale change de signe (Proposition I.5.6 (ii), [[ch01-integrale-reparametrage-oppose-concatenation]]) et l'on obtient $-f(z)$ ; par exemple pour $f=1$, $\frac{1}{2i\pi}\int\frac{d\omega}{\omega-z}=-1$.

### H4 — $z$ est dans le disque **ouvert** $D(z_0,r)$

**Rôle.** $|z-z_0|<r$ assure la convergence normale de la série géométrique de l'étape 1 et le fait que $\omega-z$ ne s'annule pas sur les cercles $\Gamma_t$.

**Si on la retire.** Si $|z-z_0|>r$, l'intégrale vaut $0$, pas $f(z)$. En effet, $\bar D(z_0,r)$ étant compact dans l'ouvert $\Omega$, il existe $r'$ avec $r<r'\le|z-z_0|$ et $D(z_0,r')\subset\Omega$ ; la fonction $\omega\mapsto\frac{f(\omega)}{\omega-z}$ est holomorphe sur le disque $D(z_0,r')$ (qui ne contient pas $z$), y admet une primitive ([[ch01-primitive-locale]], dont la preuve n'utilise la formule de Cauchy qu'à l'intérieur des disques), donc son intégrale sur le lacet $\Gamma$ est nulle ([[ch01-integrale-primitive]]). Si $|z-z_0|=r$, l'intégrale n'a en général pas de sens : pour $f=1$, $z_0=0$, $r=1$, $z=1$, l'intégrande $\frac{ie^{i\theta}}{e^{i\theta}-1}$ se comporte comme $\frac1\theta$ en $0$, non intégrable.

## Idée de la preuve

On écrit $\frac{f(\omega)}{\omega-z}=\frac{f(\omega)-f(z)}{\omega-z}+\frac{f(z)}{\omega-z}$. Le second terme s'intègre par une série géométrique ($2i\pi f(z)$). Pour le premier, on rétracte le cercle sur le point $z$ par $\Gamma_t=C(tz,1-t)$ : l'intégrale $I(t)$ a une dérivée nulle (holomorphie de $f$) et vaut $0$ en $t=1$.

## Preuve

Le théorème est une conséquence des deux formules suivantes : pour $z\in D(z_0,r)$,
$$
\int_\Gamma\frac{f(\omega)-f(z)}{\omega-z}\,d\omega=0\qquad\text{et}\qquad\int_\Gamma\frac{d\omega}{\omega-z}=2i\pi,
$$
puisqu'en les additionnant (la seconde multipliée par $f(z)$) on obtient $\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega=2i\pi f(z)$.

**Réduction à $z_0=0$, $r=1$.** Posons $\Omega':=\{u\in\C\ :\ z_0+ru\in\Omega\}$ (ouvert, contenant $\bar D(0,1)$) et $g(u):=f(z_0+ru)$ ; $g\in\Hol(\Omega')$ comme composée de $f$ et d'une application affine ([[ch01-stabilite-operations]]). Pour $z\in D(z_0,r)$, posons $u:=\frac{z-z_0}{r}\in D(0,1)$. Le changement de variable $\omega=z_0+rv$ (le cercle $C(0,1)$ parcouru par $v=e^{i\theta}$ correspond à $\Gamma$ parcouru par $\omega=z_0+re^{i\theta}$, $d\omega=r\,dv$, $\omega-z=r(v-u)$) donne $\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega=\int_{C(0,1)}\frac{g(v)}{v-u}\,dv$, et $f(z)=g(u)$. On suppose donc désormais $z_0=0$, $r=1$, $\Gamma=C(0,1)$ et $|z|<1$.

**Étape 1 : calcul de la seconde intégrale.** Avec $\omega=e^{i\theta}$, $d\omega=ie^{i\theta}d\theta$ ([[ch01-integrale-sur-cercle]]) :
$$
\int_\Gamma\frac{d\omega}{\omega-z}=\int_0^{2\pi}\frac{ie^{i\theta}}{e^{i\theta}-z}\,d\theta=i\int_0^{2\pi}\frac{d\theta}{1-ze^{-i\theta}}.
$$
Comme $|ze^{-i\theta}|=|z|<1$, on a $\frac{1}{1-ze^{-i\theta}}=\sum_{n\ge0}z^ne^{-in\theta}$, série **normalement** convergente sur $[0,2\pi]$ (terme général majoré par $|z|^n$). On peut donc intégrer terme à terme ; comme $\int_0^{2\pi}e^{-in\theta}d\theta$ vaut $2\pi$ si $n=0$ et $0$ sinon,
$$
i\int_0^{2\pi}\frac{d\theta}{1-ze^{-i\theta}}=i\sum_{n\ge0}z^n\int_0^{2\pi}e^{-in\theta}\,d\theta=2i\pi.
$$

**Étape 2 : la première intégrale est nulle.** Pour $t\in[0,1]$ et $\theta\in[0,2\pi]$, posons $c(t,\theta):=tz+(1-t)e^{i\theta}$. C'est une combinaison convexe de deux points de $\bar D(0,1)$, donc $c(t,\theta)\in\bar D(0,1)\subset\Omega$. Pour $t\in[0,1[$, $\theta\mapsto c(t,\theta)$ parcourt le cercle $\Gamma_t:=C(tz,1-t)$ dans le sens trigonométrique ; on rétracte ainsi continûment $\Gamma_0=\Gamma$ sur le point $z$. Posons
$$
I(t):=\int_{\Gamma_t}\frac{f(\omega)-f(z)}{\omega-z}\,d\omega .
$$
Avec $\omega=c(t,\theta)$, on a $d\omega=i(1-t)e^{i\theta}d\theta$ et $\omega-z=(1-t)(e^{i\theta}-z)$, d'où
$$
\text{(I.6.1)}\qquad I(t)=i\int_0^{2\pi}\frac{f(tz+(1-t)e^{i\theta})-f(z)}{e^{i\theta}-z}\,e^{i\theta}\,d\theta=\int_0^{2\pi}F(t,\theta)\,d\theta,
\qquad F(t,\theta):=i\,\frac{f(c(t,\theta))-f(z)}{e^{i\theta}-z}\,e^{i\theta}.
$$
Le dénominateur $e^{i\theta}-z$ ne s'annule pas ($|z|<1$), donc $F$ est continue sur le compact $[0,1]\times[0,2\pi]$. La formule (I.6.1) a encore un sens pour $t=1$ et donne $I(1)=\int_0^{2\pi}F(1,\theta)\,d\theta=0$ car $c(1,\theta)=z$. Par le théorème de continuité des intégrales à paramètre (intégrande continue sur un compact), $I$ est continue sur $[0,1]$.

Pour $\theta$ fixé, $t\mapsto c(t,\theta)$ est un chemin $C^1$ de dérivée $z-e^{i\theta}$ ; comme $f$ est holomorphe, le lemme I.5.10 ([[ch01-derivee-f-rond-gamma]]) donne
$$
\frac{\partial F}{\partial t}(t,\theta)=i\,\frac{f'(c(t,\theta))\,(z-e^{i\theta})}{e^{i\theta}-z}\,e^{i\theta}=-i\,f'(c(t,\theta))\,e^{i\theta},
$$
fonction continue sur $[0,1]\times[0,2\pi]$ car $f'$ est continue. Par le théorème de dérivation sous le signe somme, $I$ est de classe $C^1$ et, pour tout $t\in\,]0,1[$,
$$
I'(t)=\int_0^{2\pi}\frac{\partial F}{\partial t}(t,\theta)\,d\theta .
$$
Définissons, pour $t\in[0,1[$, $G(t,\theta):=\dfrac{f(c(t,\theta))}{t-1}$. Pour $t$ fixé, $\theta\mapsto c(t,\theta)$ est $C^1$ de dérivée $i(1-t)e^{i\theta}$, donc, encore par le lemme I.5.10,
$$
\frac{\partial G}{\partial\theta}(t,\theta)=\frac{f'(c(t,\theta))\,i(1-t)e^{i\theta}}{t-1}=-i\,f'(c(t,\theta))\,e^{i\theta}=\frac{\partial F}{\partial t}(t,\theta).
$$
Par conséquent, pour tout $t\in\,]0,1[$,
$$
I'(t)=\int_0^{2\pi}\frac{\partial G}{\partial\theta}(t,\theta)\,d\theta=G(t,2\pi)-G(t,0)=0,
$$
car $c(t,2\pi)=c(t,0)$. La fonction $I$ est donc constante sur $]0,1[$, donc sur $[0,1]$ par continuité, et $I(0)=I(1)=0$. Comme $\Gamma_0=\Gamma$, c'est la première formule. $\square$

## Preuve à trous

On écrit $\frac{f(\omega)}{\omega-z}=\frac{f(\omega)-f(z)}{\omega-z}+\frac{f(z)}{\omega-z}$ et l'on se ramène à $z_0=0$, $r=1$, $|z|<1$.

*Étape 1.* Avec $\omega=e^{i\theta}$, $\int_\Gamma\frac{d\omega}{\omega-z}=i\int_0^{2\pi}\frac{d\theta}{1-ze^{-i\theta}}$, et l'on développe <trou indice="|z|<1 : quelle série ?">$\frac{1}{1-ze^{-i\theta}}=\sum_{n\ge0}z^ne^{-in\theta}$, normalement convergente car $|z|<1$, puis on intègre terme à terme : seul $n=0$ contribue</trou>, d'où $2i\pi$.

*Étape 2.* On pose $c(t,\theta)=tz+(1-t)e^{i\theta}$ (le cercle $\Gamma_t=C(tz,1-t)$ se rétracte sur $z$) et
$$
I(t)=\int_0^{2\pi}F(t,\theta)\,d\theta,\qquad F(t,\theta)=i\,\frac{f(c(t,\theta))-f(z)}{e^{i\theta}-z}\,e^{i\theta},
$$
continue sur $[0,1]$ avec <trou indice="que vaut F quand t=1 ?">$I(1)=0$ car $c(1,\theta)=z$</trou>. Grâce à l'holomorphie de $f$ (lemme I.5.10),
<trou indice="dériver f(c(t,θ)) en t, puis comparer à la dérivée en θ d'une fonction G bien choisie">$\frac{\partial F}{\partial t}=-if'(c(t,\theta))e^{i\theta}=\frac{\partial G}{\partial\theta}$ avec $G(t,\theta)=\frac{f(c(t,\theta))}{t-1}$</trou>, donc, en dérivant sous le signe somme,
$I'(t)=\int_0^{2\pi}\frac{\partial G}{\partial\theta}\,d\theta=$ <trou indice="θ ↦ c(t,θ) est 2π-périodique">$G(t,2\pi)-G(t,0)=0$</trou>. Ainsi $I$ est constante et $I(0)=I(1)=0$. En sommant les deux étapes, $\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega=2i\pi f(z)$. $\square$

## Exemples

* **Une intégrale réelle.** $f=\exp$, $z_0=z=0$, $r=1$ : $\frac{1}{2i\pi}\int_{C(0,1)}\frac{e^\omega}{\omega}\,d\omega=e^0=1$. Avec $\omega=e^{i\theta}$ : $\frac{1}{2\pi}\int_0^{2\pi}e^{e^{i\theta}}\,d\theta=1$, et comme $e^{e^{i\theta}}=e^{\cos\theta}\bigl(\cos(\sin\theta)+i\sin(\sin\theta)\bigr)$, on obtient
$$
\int_0^{2\pi}e^{\cos\theta}\cos(\sin\theta)\,d\theta=2\pi,\qquad\int_0^{2\pi}e^{\cos\theta}\sin(\sin\theta)\,d\theta=0.
$$
* **Une fraction rationnelle.** Calculons $\int_{C(i,1)}\frac{d\omega}{\omega^2+1}$. On écrit $\frac{1}{\omega^2+1}=\frac{f(\omega)}{\omega-i}$ avec $f(\omega)=\frac{1}{\omega+i}$, holomorphe sur $\Omega=\C\setminus\{-i\}$ ; on a $\bar D(i,1)\subset\Omega$ car $|-i-i|=2>1$. La formule avec $z=i$ donne $\int_{C(i,1)}\frac{d\omega}{\omega^2+1}=2i\pi f(i)=2i\pi\cdot\frac1{2i}=\pi$.
* **Le point est dehors.** $\int_{C(0,1)}\frac{e^\omega}{\omega-3}\,d\omega=0$ (cf. H4) : $\omega\mapsto\frac{e^\omega}{\omega-3}$ est holomorphe sur $D(0,2)$, qui contient $C(0,1)$, et y admet une primitive.

## Pièges

* > ⚠️ Il faut le disque **fermé** $\bar D(z_0,r)\subset\Omega$, pas seulement le cercle : $1/\omega$ sur $C(0,1)$ en est le contre-exemple type (H2).
* > ⚠️ La formule ne vaut que pour $z$ **à l'intérieur** du disque ; dehors l'intégrale vaut $0$, sur le cercle elle n'est en général pas définie.
* Le facteur est $\frac{1}{2i\pi}$ (pas $\frac1{2\pi}$) ; le $i$ disparaît dans la formule de la moyenne ([[ch01-formule-moyenne]]) parce que $d\omega=ire^{i\theta}d\theta$.
* Le sens de parcours compte : sens horaire $\Rightarrow$ signe $-$.
* Dans $\int_\Gamma\frac{f(\omega)}{\omega-z}\,d\omega$, la variable d'intégration est $\omega$ ; $z$ est un paramètre fixé. Ne pas confondre les deux rôles.
