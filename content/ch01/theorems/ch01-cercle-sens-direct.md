---
id: ch01-cercle-sens-direct
type: proposition
chapter: 1
title: "Le lacet $\gamma(t)=z_0+re^{it}$, $t\in[0,2\pi]$ : cercle $C(z_0,r)$ parcouru dans le sens direct"
ref: Exemple I.5.3
page: 15
importance: 2
depends: [ch01-def-chemin-lacet, ch01-exp-trigo-hyperboliques]
tags: [cercle, lacet, sens-direct, parametrage, orientation]
---
## Intuition

> 💡 Un point qui tourne autour de $z_0$ à distance constante $r$, à vitesse angulaire $1$, en partant de $z_0+r$ (à « 3 heures ») et en tournant **dans le sens inverse des aiguilles d'une montre** : au temps $t$, il a tourné de l'angle $t$. Au temps $2\pi$, il a fait exactement un tour et revient à son point de départ.

C'est **le** lacet de référence du cours : toutes les formules de Cauchy ([[ch01-cauchy-formule-disque]], [[ch01-estimees-cauchy]]) et les calculs de résidus s'écrivent sur des cercles parcourus ainsi. Notations : $C(z_0,r)=\{z\in\C : |z-z_0|=r\}$ est le cercle de centre $z_0$ et de rayon $r$ ; $e^{it}=\cos t+i\sin t$ ([[ch01-exp-trigo-hyperboliques]]). Les notions de chemin et de lacet sont dans [[ch01-def-chemin-lacet]].

## Énoncé

**Proposition (poly, Exemple I.5.3, p. 15).** Soient $z_0\in\C$ et $r>0$. L'application
$$
\gamma:[0,2\pi]\to\C,\qquad \gamma(t)=z_0+r\,e^{it}
$$
est un lacet (de classe $C^1$), de chemin de tout ouvert $\Omega$ contenant $C(z_0,r)$ ; son image est le cercle $C(z_0,r)$ de centre $z_0$ et de rayon $r$, qui est **parcouru dans le sens direct** (trigonométrique) : l'angle polaire de $\gamma(t)-z_0$ est $t$, fonction croissante du temps. De plus $\gamma'(t)=i\,r\,e^{it}=i\,(\gamma(t)-z_0)$, et $\gamma$ est injective sur $[0,2\pi[$ (un seul tour).

## Hypothèses

### H1 — $r>0$

**Rôle.** Garantit que l'image est un vrai cercle et que l'angle polaire de $\gamma(t)-z_0=re^{it}$ a un sens.

**Si on la retire.** Pour $r=0$, $\gamma$ est le lacet constant égal à $z_0$ : c'est encore un lacet ($C^1$, $\gamma(0)=\gamma(2\pi)$), mais son image est le point $\{z_0\}$, sa vitesse est nulle et toute intégrale le long de ce lacet vaut $0$. (Pour $r<0$, $z_0+re^{it}=z_0+|r|e^{i(t+\pi)}$ : même cercle $C(z_0,|r|)$, même sens, mais point de départ $z_0-|r|$.)

### H2 — l'intervalle de temps est $[0,2\pi]$

**Rôle.** Une durée $2\pi$ à vitesse angulaire $1$ donne **exactement un tour**, et $\gamma(2\pi)=\gamma(0)$ (lacet).

**Si on la retire.** Sur $[0,4\pi]$, $t\mapsto z_0+re^{it}$ est encore un lacet d'image $C(z_0,r)$, mais il fait **deux tours** : on vérifie avec [[ch01-integrale-sur-cercle]] que $\int\frac{dz}{z-z_0}=i\int_0^{4\pi}dt=4i\pi$ au lieu de $2i\pi$. Sur $[0,\pi]$, on n'obtient que le demi-cercle supérieur, de $z_0+r$ à $z_0-r$ : ce n'est plus un lacet.

### H3 — le signe $+$ dans $e^{it}$

**Rôle.** C'est lui qui fixe le sens de parcours.

**Si on la retire.** $t\mapsto z_0+re^{-it}$, $t\in[0,2\pi]$, a la même image mais parcourt le cercle dans le sens **indirect** (horaire) : comme $e^{-it}=e^{i(2\pi-t)}$, c'est exactement le chemin opposé $\gamma^{opp}(t)=\gamma(0+2\pi-t)$ ([[ch01-def-chemin-lacet]]), et les intégrales changent de signe ([[ch01-integrale-reparametrage-oppose-concatenation]]).

## Idée de la preuve

Écrire $\gamma(t)-z_0=re^{it}$ : module $r$ (donc image dans le cercle), argument $t$ (donc surjectivité via la forme polaire, et sens direct car l'argument croît). La périodicité $e^{2i\pi}=1$ donne $\gamma(2\pi)=\gamma(0)$, et $(e^{it})'=ie^{it}$ donne la vitesse.

## Preuve

*Le poly énonce ce fait sans preuve ; voici la vérification.*

**Régularité.** $t\mapsto e^{it}=\cos t+i\sin t$ est $C^\infty$ sur $\R$, de dérivée $-\sin t+i\cos t=i(\cos t+i\sin t)=ie^{it}$. Donc $\gamma$ est de classe $C^1$ sur $[0,2\pi]$ (a fortiori $C^1$ par morceaux), avec $\gamma'(t)=ire^{it}=i(\gamma(t)-z_0)$.

**Lacet.** $\gamma(0)=z_0+r$ et $\gamma(2\pi)=z_0+r(\cos2\pi+i\sin2\pi)=z_0+r$. Donc $\gamma(0)=\gamma(2\pi)$.

**Image.** Pour tout $t$, $|\gamma(t)-z_0|=r|e^{it}|=r\sqrt{\cos^2t+\sin^2t}=r$ : $\gamma([0,2\pi])\subset C(z_0,r)$. Réciproquement, si $|z-z_0|=r$, alors $(z-z_0)/r$ est de module $1$, donc s'écrit $\cos\theta+i\sin\theta=e^{i\theta}$ pour un (unique) $\theta\in[0,2\pi[$ (forme polaire), et $z=\gamma(\theta)$. Donc $\gamma([0,2\pi])=C(z_0,r)$, et l'unicité de $\theta$ dans $[0,2\pi[$ montre que $\gamma$ est injective sur $[0,2\pi[$. En particulier, pour tout ouvert $\Omega\supset C(z_0,r)$, $\gamma$ est un lacet de $\Omega$.

**Sens direct.** Au temps $t$, l'angle polaire de $\gamma(t)-z_0$ est $t$ : il croît de $0$ à $2\pi$, ce qui est par définition le parcours dans le sens trigonométrique. De manière équivalente, la vitesse $\gamma'(t)=i(\gamma(t)-z_0)$ est le rayon vecteur $\gamma(t)-z_0$ tourné de $+\pi/2$ (multiplication par $i$) : le mouvement se fait « vers la gauche » du rayon, c'est-à-dire dans le sens inverse des aiguilles d'une montre. $\square$

## Preuve à trous

**Régularité.** $(e^{it})'=$ <trou indice="dériver cos t + i sin t">$-\sin t+i\cos t=ie^{it}$</trou>, donc $\gamma$ est $C^1$ et $\gamma'(t)=ire^{it}$.

**Lacet.** $\gamma(2\pi)=z_0+re^{2i\pi}=z_0+r=\gamma(0)$.

**Image.** $|\gamma(t)-z_0|=r$, donc $\gamma([0,2\pi])\subset C(z_0,r)$ ; réciproquement, si $|z-z_0|=r$, <trou indice="forme polaire d'un complexe de module 1">$(z-z_0)/r=e^{i\theta}$ avec un unique $\theta\in[0,2\pi[$, donc $z=\gamma(\theta)$</trou>.

**Sens direct.** L'angle polaire de $\gamma(t)-z_0$ vaut $t$, croissant ; autrement dit $\gamma'(t)=$ <trou indice="exprimer la vitesse à l'aide du rayon vecteur">$i(\gamma(t)-z_0)$, le rayon vecteur tourné de $+\pi/2$</trou>, ce qui correspond au sens trigonométrique. $\square$

## Exemples

* **Le cercle $C(1,2)$.** $\gamma(t)=1+2e^{it}$ : $\gamma(0)=3$, $\gamma(\pi/2)=1+2i$, $\gamma(\pi)=-1$, $\gamma(3\pi/2)=1-2i$, $\gamma(2\pi)=3$. On passe bien par le haut avant le bas : sens direct. Ce lacet passe par $-1$ ; c'est un lacet de $\C\setminus\{-2\}$, mais pas de $\C\setminus\{-1\}$.
* **Vitesse et longueur.** $|\gamma'(t)|=r$ (vitesse constante), donc la longueur vaut $\int_0^{2\pi}r\,dt=2\pi r$ ([[ch01-longueur-majoration-integrale]]) : on retrouve le périmètre du cercle.
* **Reparamétrages.** $s\mapsto z_0+re^{2is}$, $s\in[0,\pi]$, parcourt le même cercle, une fois, dans le même sens, deux fois plus vite : c'est $\gamma\circ\varphi$ avec $\varphi(s)=2s$, et toutes les intégrales sont les mêmes ([[ch01-integrale-reparametrage-oppose-concatenation]]). C'est ce qui justifie l'abus de notation $\int_{C(z_0,r)}f(z)\,dz$ ([[ch01-notation-integrale-sur-courbe]]).

## Pièges

* > ⚠️ Le cercle $C(z_0,r)$ (une partie du plan) et le lacet $\gamma$ (une application) sont deux objets différents : quand on écrit $\int_{C(z_0,r)}$, on sous-entend **ce** paramétrage, sens direct, **un seul tour**.
* Ne pas confondre $C(z_0,r)$ (le cercle), $D(z_0,r)$ (le disque ouvert $|z-z_0|<r$) et $\bar D(z_0,r)$ (le disque fermé $|z-z_0|\le r$).
* Le point de départ est $z_0+r$, pas $z_0$ : le centre $z_0$ n'est **pas** sur le lacet (c'est justement pourquoi on peut y placer une singularité, comme dans $\int\frac{dz}{z-z_0}$).
* $e^{-it}$ ou un intervalle autre que $[0,2\pi]$ (de longueur autre que $2\pi$) changent l'intégrale : signe opposé, ou nombre de tours différent.
